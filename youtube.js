// ==========================================
// YOUTUBE (IFrame Player API)
// ==========================================
// Permite que un botón de ambiente, capa o efecto reproduzca el
// audio de un vídeo de YouTube sin salir de la web. El vídeo va en
// un reproductor oculto y se maneja igual que un "Audio" normal
// (play, pause, volume, loop y el evento "ended"), así que el
// mezclador y "Parar todo" funcionan sin cambios.
//
// No necesita claves ni cuenta. Solo suenan los vídeos que su
// autor deja reproducir fuera de YouTube.

const PREFIJO_YOUTUBE = "youtube:";

let promesaApiYouTube = null;


function cargarApiYouTube() {

    if (!promesaApiYouTube) {

        promesaApiYouTube = new Promise(function(resolver, rechazar) {

            window.onYouTubeIframeAPIReady = resolver;

            const script = document.createElement("script");

            script.src = "https://www.youtube.com/iframe_api";

            script.onerror = function() {

                promesaApiYouTube = null;

                rechazar(new Error("No se pudo cargar YouTube"));

            };

            document.head.appendChild(script);

        });

    }

    return promesaApiYouTube;

}


// Acepta un enlace (youtube.com/watch?v=..., youtu.be/..., shorts)
// o el ID de 11 caracteres. Devuelve el ID, o null si no es válido.
function idDeYouTube(texto) {

    texto = texto.trim();

    if (/^[\w-]{11}$/.test(texto)) {

        return texto;

    }

    const coincidencia = texto.match(
        /(?:youtu\.be\/|[?&]v=|\/(?:shorts|embed|live)\/)([\w-]{11})/
    );

    return coincidencia ? coincidencia[1] : null;

}


// Título del vídeo, para proponer un nombre al botón
function tituloDeYouTube(id) {

    return fetch(
        "https://www.youtube.com/oembed?format=json&url=" +
        encodeURIComponent("https://www.youtube.com/watch?v=" + id)
    )

    .then(function(respuesta) {

        return respuesta.ok ? respuesta.json() : null;

    })

    .then(function(datos) {

        return datos ? datos.title : "";

    })

    .catch(function() {

        return "";

    });

}


// Mensaje legible para los códigos de error de YouTube
function errorDeYouTube(codigo) {

    if (codigo === 101 || codigo === 150) {

        return "El autor del vídeo no permite reproducirlo fuera de YouTube";

    }

    if (codigo === 100) {

        return "El vídeo no existe o es privado";

    }

    return "YouTube no pudo reproducir el vídeo (error " + codigo + ")";

}


// Devuelve algo que se usa como un "Audio" pero suena desde YouTube
function crearSonidoYouTube(id) {

    const oyentesFin = [];

    let reproductor = null;

    let destruido = false;

    let volumen = 1;

    let rechazarPendiente = null;


    function destruir() {

        destruido = true;

        if (reproductor && reproductor.destroy) {

            reproductor.destroy();

        }

        reproductor = null;

    }


    const sonido = {

        loop: false,

        // El efecto de "volver al inicio" no hace falta: al parar
        // se descarta el reproductor y el siguiente clic crea otro
        currentTime: 0,

        get volume() {

            return volumen;

        },

        set volume(valor) {

            volumen = valor;

            if (reproductor && reproductor.setVolume) {

                reproductor.setVolume(Math.round(valor * 100));

            }

        },

        addEventListener: function(tipo, funcion) {

            if (tipo === "ended") {

                oyentesFin.push(funcion);

            }

        },

        pause: function() {

            if (rechazarPendiente) {

                rechazarPendiente(
                    new DOMException("Parado", "AbortError")
                );

                rechazarPendiente = null;

            }

            destruir();

        },

        play: function() {

            return new Promise(function(resolver, rechazar) {

                rechazarPendiente = rechazar;

                function fallar(error) {

                    rechazarPendiente = null;

                    destruir();

                    console.log("YouTube:", error);

                    if (
                        error.name !== "AbortError" &&
                        typeof mostrarAviso === "function"
                    ) {

                        mostrarAviso("YouTube: " + error.message);

                    }

                    rechazar(error);

                }

                cargarApiYouTube().then(function() {

                    // Lo pararon mientras cargaba la API
                    if (destruido) {
                        return;
                    }

                    const hueco = document.createElement("div");

                    document
                        .getElementById("youtube-oculto")
                        .appendChild(hueco);

                    reproductor = new YT.Player(hueco, {
                        videoId: id,
                        width: 200,
                        height: 200,
                        playerVars: {
                            autoplay: 1,
                            controls: 0,
                            playsinline: 1
                        },
                        events: {

                            onReady: function(evento) {

                                evento.target.setVolume(
                                    Math.round(volumen * 100)
                                );

                                evento.target.playVideo();

                            },

                            onStateChange: function(evento) {

                                if (evento.data === YT.PlayerState.PLAYING) {

                                    rechazarPendiente = null;

                                    resolver();

                                } else if (
                                    evento.data === YT.PlayerState.PAUSED &&
                                    sonido.loop &&
                                    !destruido
                                ) {

                                    // Pararlo de verdad destruye el reproductor,
                                    // así que una pausa es del navegador: en un
                                    // bucle se reanuda para que no se corte
                                    evento.target.playVideo();

                                } else if (
                                    evento.data === YT.PlayerState.ENDED
                                ) {

                                    if (sonido.loop) {

                                        evento.target.seekTo(0);

                                        evento.target.playVideo();

                                        return;
                                    }

                                    oyentesFin.forEach(function(f) {

                                        f();

                                    });

                                    destruir();

                                }

                            },

                            onAutoplayBlocked: function() {

                                fallar(new DOMException(
                                    "El navegador bloqueó la reproducción",
                                    "NotAllowedError"
                                ));

                            },

                            onError: function(evento) {

                                fallar(new Error(
                                    errorDeYouTube(evento.data)
                                ));

                            }

                        }
                    });

                }).catch(fallar);

            });

        }

    };

    return sonido;

}


// Un sonido normal si es un archivo, o de YouTube si la dirección
// empieza por "youtube:"
function crearAudioDe(direccion) {

    if (direccion.indexOf(PREFIJO_YOUTUBE) === 0) {

        return crearSonidoYouTube(
            direccion.slice(PREFIJO_YOUTUBE.length)
        );

    }

    return new Audio(direccion);

}
