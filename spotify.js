// ==========================================
// SPOTIFY (Web Playback SDK)
// ==========================================
// La web se convierte en un dispositivo de Spotify (hace falta
// Premium) y reproduce las playlists desde aquí, así que su
// volumen y su pausa se controlan igual que los demás sonidos.
//
// El login usa OAuth con PKCE: no necesita servidor ni claves
// secretas, solo el Client ID de config.js.

const SPOTIFY_PERMISOS = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-read-collaborative"
].join(" ");

const CLAVE_SPOTIFY_TOKEN = "dnd-soundboard-spotify-token";

const CLAVE_SPOTIFY_VERIFICADOR = "dnd-soundboard-spotify-verificador";


const musicaSpotify = {

    // Se rellenan al conectar
    conectado: false,
    dispositivo: null,
    reproductor: null,

    // Los asigna script.js
    alCambiarEstado: function() {},
    alCambiarConexion: function() {},
    alAviso: function() {}

};


// ==========================================
// TOKEN
// ==========================================

// Esta dirección hay que registrarla tal cual en la app de Spotify
function direccionDeRetorno() {

    return location.origin +
        location.pathname.replace(/index\.html$/, "");

}


function leerToken() {

    try {

        return JSON.parse(
            localStorage.getItem(CLAVE_SPOTIFY_TOKEN)
        );

    } catch (error) {

        return null;

    }

}


function guardarToken(respuesta) {

    const anterior = leerToken() || {};

    localStorage.setItem(
        CLAVE_SPOTIFY_TOKEN,
        JSON.stringify({
            acceso: respuesta.access_token,
            refresco:
                respuesta.refresh_token || anterior.refresco,
            caduca: Date.now() + respuesta.expires_in * 1000
        })
    );

}


async function pedirToken(datos) {

    datos.client_id = SPOTIFY_CLIENT_ID;

    const respuesta = await fetch(
        "https://accounts.spotify.com/api/token",
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(datos)
        }
    );

    if (!respuesta.ok) {

        throw new Error(
            "Spotify respondió con el error " + respuesta.status
        );

    }

    guardarToken(await respuesta.json());

}


// Devuelve un token válido, renovándolo si está a punto de caducar
async function obtenerToken() {

    let token = leerToken();

    if (!token) {

        throw new Error("No hay sesión de Spotify");

    }

    if (Date.now() > token.caduca - 60000) {

        await pedirToken({
            grant_type: "refresh_token",
            refresh_token: token.refresco
        });

        token = leerToken();

    }

    return token.acceso;

}


// ==========================================
// LOGIN (PKCE)
// ==========================================

function textoAleatorio(longitud) {

    const letras =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const bytes =
        crypto.getRandomValues(new Uint8Array(longitud));

    return Array.from(bytes, function(b) {

        return letras[b % letras.length];

    }).join("");

}


async function desafioDe(verificador) {

    const resumen = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(verificador)
    );

    return btoa(String.fromCharCode(...new Uint8Array(resumen)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");

}


musicaSpotify.conectar = async function() {

    if (!SPOTIFY_CLIENT_ID) {

        musicaSpotify.alAviso(
            "Falta el Client ID de Spotify en config.js"
        );

        return;
    }

    const verificador = textoAleatorio(64);

    localStorage.setItem(CLAVE_SPOTIFY_VERIFICADOR, verificador);

    location.href =
        "https://accounts.spotify.com/authorize?" +
        new URLSearchParams({
            client_id: SPOTIFY_CLIENT_ID,
            response_type: "code",
            redirect_uri: direccionDeRetorno(),
            scope: SPOTIFY_PERMISOS,
            code_challenge_method: "S256",
            code_challenge: await desafioDe(verificador)
        });

};


musicaSpotify.desconectar = function() {

    if (musicaSpotify.reproductor) {

        musicaSpotify.reproductor.disconnect();

    }

    localStorage.removeItem(CLAVE_SPOTIFY_TOKEN);

    musicaSpotify.reproductor = null;
    musicaSpotify.dispositivo = null;
    musicaSpotify.conectado = false;

    musicaSpotify.alCambiarConexion();

};


// Al volver de Spotify la dirección trae "?code=..."
async function procesarRetorno() {

    const parametros = new URLSearchParams(location.search);

    if (!parametros.has("code") && !parametros.has("error")) {
        return;
    }

    const codigo = parametros.get("code");

    history.replaceState(null, "", direccionDeRetorno());

    if (!codigo) {

        musicaSpotify.alAviso("No se concedió el acceso a Spotify");

        return;
    }

    await pedirToken({
        grant_type: "authorization_code",
        code: codigo,
        redirect_uri: direccionDeRetorno(),
        code_verifier:
            localStorage.getItem(CLAVE_SPOTIFY_VERIFICADOR)
    });

    localStorage.removeItem(CLAVE_SPOTIFY_VERIFICADOR);

}


// ==========================================
// REPRODUCTOR
// ==========================================

function cargarSDK() {

    return new Promise(function(resolver) {

        window.onSpotifyWebPlaybackSDKReady = resolver;

        const script = document.createElement("script");

        script.src = "https://sdk.scdn.co/spotify-player.js";

        document.head.appendChild(script);

    });

}


// Pide al SDK el estado y se lo pasa a script.js
function avisarEstado() {

    if (!musicaSpotify.reproductor) {
        return;
    }

    musicaSpotify.reproductor.getCurrentState().then(function(estado) {

        if (!estado) {
            return;
        }

        const cancion = estado.track_window.current_track;

        musicaSpotify.alCambiarEstado({
            uri: cancion.uri,
            pausado: estado.paused,
            titulo:
                cancion.name + " · " +
                cancion.artists.map(function(a) {
                    return a.name;
                }).join(", "),
            posicion: estado.position,
            duracion: estado.duration
        });

    });

}


async function iniciarReproductor() {

    await cargarSDK();

    const reproductor = new Spotify.Player({
        name: "DND Soundboard",
        volume: 0.4,
        getOAuthToken: function(entregar) {

            obtenerToken().then(entregar);

        }
    });

    musicaSpotify.reproductor = reproductor;

    reproductor.addListener("ready", function(datos) {

        console.log("Spotify listo, dispositivo:", datos.device_id);

        musicaSpotify.dispositivo = datos.device_id;
        musicaSpotify.conectado = true;

        musicaSpotify.alCambiarConexion();

    });

    reproductor.addListener("not_ready", function() {

        musicaSpotify.conectado = false;

        musicaSpotify.alCambiarConexion();

    });

    reproductor.addListener("player_state_changed", avisarEstado);

    reproductor.addListener("account_error", function() {

        musicaSpotify.alAviso(
            "Spotify Premium es necesario para reproducir aquí"
        );

    });

    reproductor.addListener("authentication_error", function() {

        musicaSpotify.desconectar();

        musicaSpotify.alAviso(
            "La sesión de Spotify ha caducado, vuelve a conectar"
        );

    });

    reproductor.addListener("initialization_error", function() {

        musicaSpotify.alAviso(
            "Este navegador no permite reproducir Spotify"
        );

    });

    reproductor.connect();

    // La barra de progreso avanza sola
    setInterval(avisarEstado, 1000);

}


// ==========================================
// CONTROL
// ==========================================

async function llamarAPI(ruta, metodo, cuerpo) {

    const respuesta = await fetch(
        "https://api.spotify.com/v1" + ruta,
        {
            method: metodo,
            headers: {
                "Authorization": "Bearer " + await obtenerToken(),
                "Content-Type": "application/json"
            },
            body: cuerpo ? JSON.stringify(cuerpo) : undefined
        }
    );

    if (!respuesta.ok) {

        const detalle = await respuesta.text();

        console.log("Spotify", ruta, respuesta.status, detalle);

        throw new Error(
            "Spotify respondió con el error " + respuesta.status +
            (detalle ? ": " + detalle.slice(0, 120) : "")
        );

    }

    return respuesta.status === 204 ? null : respuesta.json();

}


// "uri" es algo como spotify:playlist:37i9dQZF1DX...
// "cancion" (opcional) es el URI de la canción por la que empezar.
musicaSpotify.reproducir = async function(uri, cancion) {

    console.log("Spotify reproduciendo:", uri);

    // Los navegadores exigen un clic antes de reproducir audio
    await musicaSpotify.reproductor.activateElement();

    const dispositivo =
        "?device_id=" + musicaSpotify.dispositivo;

    await llamarAPI(
        "/me/player/shuffle" + dispositivo + "&state=true",
        "PUT"
    ).catch(function() {});

    await llamarAPI(
        "/me/player/play" + dispositivo,
        "PUT",
        cancion
            ? { context_uri: uri, offset: { uri: cancion } }
            : { context_uri: uri }
    );

};


// Canciones de una playlist: [{ titulo, artistas, duracion, uri }]
// Se guardan para no pedirlas cada vez que se abre.
const cancionesGuardadas = {};

musicaSpotify.canciones = async function(uriPlaylist) {

    if (cancionesGuardadas[uriPlaylist]) {

        return cancionesGuardadas[uriPlaylist];

    }

    const id = uriPlaylist.split(":")[2];

    const lista = [];

    let pagina = null;

    // Spotify da las canciones de 100 en 100
    for (let i = 0; i < 5; i++) {

        const consulta = "?limit=100&offset=" + lista.length;

        // Spotify está cambiando "tracks" por "items": se prueban los dos
        pagina = await llamarAPI(
            "/playlists/" + id + "/items" + consulta
        ).catch(function() {

            return llamarAPI(
                "/playlists/" + id + "/tracks" + consulta
            );

        });

        pagina.items.forEach(function(entrada) {

            const cancion = entrada.track || entrada.item;

            // Las canciones locales o borradas no se pueden reproducir
            if (!cancion || cancion.is_local || !cancion.uri) {
                return;
            }

            lista.push({
                titulo: cancion.name,
                artistas:
                    cancion.artists.map(function(a) {
                        return a.name;
                    }).join(", "),
                duracion: cancion.duration_ms,
                uri: cancion.uri
            });

        });

        if (!pagina.next) {
            break;
        }

    }

    cancionesGuardadas[uriPlaylist] = lista;

    return lista;

};


musicaSpotify.alternar = function() {

    return musicaSpotify.reproductor.togglePlay();

};


musicaSpotify.pausar = function() {

    if (musicaSpotify.reproductor) {

        return musicaSpotify.reproductor.pause();

    }

};


musicaSpotify.siguiente = function() {

    return musicaSpotify.reproductor.nextTrack();

};


musicaSpotify.anterior = function() {

    return musicaSpotify.reproductor.previousTrack();

};


musicaSpotify.buscar = function(milisegundos) {

    return musicaSpotify.reproductor.seek(milisegundos);

};


// Volumen de 0 a 1
musicaSpotify.volumen = function(valor) {

    if (musicaSpotify.reproductor) {

        musicaSpotify.reproductor.setVolume(valor);

    }

};


// Acepta un enlace (open.spotify.com/playlist/...) o un URI
// y devuelve el URI, o null si no es válido.
musicaSpotify.leerEnlace = function(texto) {

    const coincidencia = texto.trim().match(
        /(playlist|album|artist)[/:]([A-Za-z0-9]{22})/
    );

    return coincidencia
        ? "spotify:" + coincidencia[1] + ":" + coincidencia[2]
        : null;

};


// ==========================================
// ARRANQUE
// ==========================================

if (SPOTIFY_CLIENT_ID) {

    procesarRetorno()

    .then(function() {

        if (leerToken()) {

            return iniciarReproductor();

        }

    })

    .catch(function(error) {

        console.log("Error con Spotify:", error);

        musicaSpotify.alAviso(
            "No se pudo conectar con Spotify (" +
            error.message + ")"
        );

    });

}
