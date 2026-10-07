console.log("El Soundboard está funcionando");


// ==========================================
// BIBLIOTECAS DE MÚSICA (archivos locales)
// ==========================================

// Cada clave coincide con el data-ambiente del HTML.
// Para que un ambiente suene, añade aquí su carpeta y sus archivos:
//   bosque: { nombre: "Bosque", carpeta: "sounds/ambientes/bosque/",
//             archivos: ["bosque-01.mp3"] }
const bibliotecas = {};


// ==========================================
// SUBAMBIENTES
// ==========================================

const subambientes = {

    bosque: [
        "Tranquilo",
        "Misterioso",
        "Oscuro",
        "Peligroso"
    ],

    taberna: [
        "Alegre",
        "Animada",
        "Triste",
        "Pelea"
    ],

    mazmorra: [
        "Oscura",
        "Misteriosa",
        "Peligrosa",
        "Terrorífica"
    ],

    ciudad: [
        "Día",
        "Noche",
        "Mercado",
        "Palacio"
    ],

    costa: [
        "Tranquila",
        "Oleaje",
        "Tormenta",
        "Puerto"
    ],

    montaña: [
        "Tranquila",
        "Ventosa",
        "Nevada",
        "Peligrosa"
    ],

    batalla: [
        "Batalla",
        "Batalla intensa",
        "Asedio",
        "Batalla contra jefe"
    ]

};


// ==========================================
// ESTRUCTURA DE CAPAS
// ==========================================
// Cada sonido final es una opción sin "opciones" dentro.

const capas = {

    // ==========================================
    // CLIMA
    // ==========================================

    clima: {

        nombre: "Clima",

        opciones: {

            lluvia: {

                nombre: "Lluvia",

                opciones: {

                    ligera: {
                        nombre: "Lluvia ligera"
                    },

                    normal: {
                        nombre: "Lluvia normal"
                    },

                    intensa: {
                        nombre: "Lluvia intensa"
                    }

                }

            },


            tormenta: {

                nombre: "Tormenta",

                opciones: {

                    truenos: {
                        nombre: "Truenos"
                    },

                    ligera: {
                        nombre: "Tormenta ligera"
                    },

                    intensa: {
                        nombre: "Tormenta intensa"
                    }

                }

            },


            viento: {

                nombre: "Viento",

                opciones: {

                    brisa: {
                        nombre: "Brisa"
                    },

                    normal: {
                        nombre: "Viento normal"
                    },

                    fuerte: {
                        nombre: "Viento fuerte"
                    }

                }

            },


            nieve: {

                nombre: "Nieve",

                opciones: {

                    ligera: {
                        nombre: "Nevada ligera"
                    },

                    normal: {
                        nombre: "Nevada normal"
                    },

                    ventisca: {
                        nombre: "Ventisca"
                    }

                }

            },


            niebla: {

                nombre: "Niebla",

                opciones: {

                    ligera: {
                        nombre: "Niebla ligera"
                    },

                    densa: {
                        nombre: "Niebla densa"
                    },

                    sobrenatural: {
                        nombre: "Niebla sobrenatural"
                    }

                }

            }

        }

    },


    // ==========================================
    // NATURALEZA
    // ==========================================

    naturaleza: {

        nombre: "Naturaleza",

        opciones: {

            bosque: {

                nombre: "Bosque",

                opciones: {

                    hojas: {
                        nombre: "Hojas y vegetación"
                    },

                    vientoArboles: {
                        nombre: "Viento entre árboles"
                    },

                    naturaleza: {
                        nombre: "Naturaleza"
                    }

                }

            },


            agua: {

                nombre: "Agua",

                opciones: {

                    goteo: {
                        nombre: "Goteo"
                    },

                    rio: {
                        nombre: "Río"
                    },

                    cascada: {
                        nombre: "Cascada"
                    },

                    mar: {
                        nombre: "Mar"
                    }

                }

            },


            rocas: {

                nombre: "Rocas",

                opciones: {

                    piedras: {
                        nombre: "Piedras"
                    },

                    derrumbe: {
                        nombre: "Derrumbe"
                    },

                    rocasCayendo: {
                        nombre: "Rocas cayendo"
                    }

                }

            }

        }

    },


    // ==========================================
    // ANIMALES
    // ==========================================

    animales: {

        nombre: "Animales",

        opciones: {

            lobos: {

                nombre: "Lobos",

                opciones: {

                    lobo: {
                        nombre: "Lobo"
                    },

                    manada: {
                        nombre: "Manada"
                    }

                }

            },


            aves: {

                nombre: "Aves",

                opciones: {

                    pajaros: {
                        nombre: "Pájaros"
                    },

                    aveRapaz: {
                        nombre: "Ave rapaz"
                    }

                }

            },


            caballos: {

                nombre: "Caballos",

                opciones: {

                    caballo: {
                        nombre: "Caballo"
                    },

                    caballos: {
                        nombre: "Caballos"
                    }

                }

            },


            animalesSalvajes: {

                nombre: "Animales salvajes",

                opciones: {

                    oso: {
                        nombre: "Oso"
                    },

                    jabali: {
                        nombre: "Jabalí"
                    },

                    ciervo: {
                        nombre: "Ciervo"
                    }

                }

            }

        }

    },


    // ==========================================
    // ENTORNO
    // ==========================================

    entorno: {

        nombre: "Entorno",

        opciones: {

            fuego: {

                nombre: "Fuego",

                opciones: {

                    hoguera: {
                        nombre: "Hoguera"
                    },

                    fuegoPequeno: {
                        nombre: "Fuego pequeño"
                    },

                    fuegoGrande: {
                        nombre: "Fuego grande"
                    }

                }

            },


            puertas: {

                nombre: "Puertas",

                opciones: {

                    madera: {
                        nombre: "Puerta de madera"
                    },

                    pesada: {
                        nombre: "Puerta pesada"
                    },

                    metalica: {
                        nombre: "Puerta metálica"
                    }

                }

            },


            campanas: {

                nombre: "Campanas",

                opciones: {

                    pequena: {
                        nombre: "Campana pequeña"
                    },

                    grande: {
                        nombre: "Campana grande"
                    }

                }

            },


            cadenas: {

                nombre: "Cadenas",

                opciones: {

                    moviendose: {
                        nombre: "Cadenas moviéndose"
                    },

                    pesadas: {
                        nombre: "Cadenas pesadas"
                    }

                }

            },


            multitud: {

                nombre: "Multitud",

                opciones: {

                    ciudad: {
                        nombre: "Multitud ciudad"
                    },

                    taberna: {
                        nombre: "Multitud taberna"
                    },

                    gritando: {
                        nombre: "Multitud gritando"
                    }

                }

            }

        }

    }

};


// ==========================================
// ESTRUCTURA DE EFECTOS
// ==========================================

const efectos = {

    combate: {

        nombre: "Combate",

        opciones: {

            espadas: {
                nombre: "Espadas",

                opciones: {

                    espadazo: {
                        nombre: "Espadazo"
                    },

                    corte: {
                        nombre: "Corte"
                    },

                    estocada: {
                        nombre: "Estocada"
                    },

                    choque: {
                        nombre: "Choque de espadas"
                    }

                }
            },

            mazas: {
                nombre: "Mazas y martillos",

                opciones: {

                    mazazo: {
                        nombre: "Mazazo"
                    },

                    golpe_martillo: {
                        nombre: "Golpe de martillo"
                    },

                    golpe_pesado: {
                        nombre: "Golpe pesado"
                    }

                }
            },

            escudos: {
                nombre: "Escudos",

                opciones: {

                    golpe_escudo: {
                        nombre: "Golpe al escudo"
                    },

                    bloqueo: {
                        nombre: "Bloqueo"
                    },

                    escudo_pesado: {
                        nombre: "Golpe fuerte al escudo"
                    }

                }
            },

            arcos: {
                nombre: "Arcos y ballestas",

                opciones: {

                    flechazo: {
                        nombre: "Flechazo"
                    },

                    disparo_arco: {
                        nombre: "Disparo de arco"
                    },

                    ballesta: {
                        nombre: "Disparo de ballesta"
                    },

                    cuerda: {
                        nombre: "Tensar arco"
                    }

                }
            },

            otras_armas: {
                nombre: "Otras armas",

                opciones: {

                    hachazo: {
                        nombre: "Hachazo"
                    },

                    lanza: {
                        nombre: "Golpe de lanza"
                    },

                    daga: {
                        nombre: "Golpe de daga"
                    }

                }
            }

        }
    },


    magia: {

        nombre: "Magia",

        opciones: {

            fuego: {
                nombre: "Fuego",

                opciones: {

                    fuego_pequeno: {
                        nombre: "Fuego pequeño"
                    },

                    fuego_grande: {
                        nombre: "Fuego intenso"
                    },

                    explosion: {
                        nombre: "Explosión"
                    }

                }
            },

            hielo: {
                nombre: "Hielo",

                opciones: {

                    hielo: {
                        nombre: "Hielo"
                    },

                    congelacion: {
                        nombre: "Congelación"
                    },

                    cristal: {
                        nombre: "Cristal mágico"
                    }

                }
            },

            electricidad: {
                nombre: "Electricidad",

                opciones: {

                    chispa: {
                        nombre: "Chispa"
                    },

                    rayo: {
                        nombre: "Rayo"
                    },

                    trueno_magico: {
                        nombre: "Trueno mágico"
                    }

                }
            },

            aire: {
                nombre: "Aire",

                opciones: {

                    viento_magico: {
                        nombre: "Viento mágico"
                    },

                    rafaga: {
                        nombre: "Ráfaga de aire"
                    }

                }
            },

            agua: {
                nombre: "Agua",

                opciones: {

                    agua: {
                        nombre: "Agua mágica"
                    },

                    oleada: {
                        nombre: "Oleada"
                    }

                }
            },

            oscura: {
                nombre: "Magia oscura",

                opciones: {

                    energia_oscura: {
                        nombre: "Energía oscura"
                    },

                    maldicion: {
                        nombre: "Maldición"
                    },

                    invocacion: {
                        nombre: "Invocación"
                    }

                }
            }

        }
    }

};


// ==========================================
// ELEMENTOS
// ==========================================

const botonesAmbiente =
    document.querySelectorAll(".boton-ambiente");

const botonesCapa =
    document.querySelectorAll(".boton-capa");

const botonesEfecto =
    document.querySelectorAll(".boton-efecto");

const botonesPlaylist =
    document.querySelectorAll(".boton-playlist");

const submenuAmbiente =
    document.getElementById("submenu-ambiente");

const submenuCapas =
    document.getElementById("submenu-capas");

const submenuEfectos =
    document.getElementById("submenu-efectos");

const pararAmbiente =
    document.querySelector("#parar-ambiente");

const botonPararTodo =
    document.querySelector("#parar-todo");

const aviso =
    document.querySelector("#aviso");


// ==========================================
// SLIDERS
// ==========================================

const sliders = {

    musica:
        document.querySelector("#volumen-musica"),

    ambiente:
        document.querySelector("#volumen-ambiente"),

    clima:
        document.querySelector("#volumen-clima"),

    naturaleza:
        document.querySelector("#volumen-naturaleza"),

    animales:
        document.querySelector("#volumen-animales"),

    entorno:
        document.querySelector("#volumen-entorno"),

    combate:
        document.querySelector("#volumen-combate"),

    magia:
        document.querySelector("#volumen-magia")

};


// ==========================================
// VOLUMEN DE CADA CATEGORÍA
// ==========================================

const volumenes = {

    musica: 0.4,

    ambiente: 0.7,

    clima: 0.5,

    naturaleza: 0.5,

    animales: 0.5,

    entorno: 0.5,

    combate: 0.7,

    magia: 0.7

};


// ==========================================
// SONIDOS ACTIVOS
// ==========================================

const sonidosActivos = {

    musica: new Set(),

    ambiente: new Set(),

    clima: new Set(),

    naturaleza: new Set(),

    animales: new Set(),

    entorno: new Set(),

    combate: new Set(),

    magia: new Set()

};


// ==========================================
// ESTADO: QUÉ ESTÁ SONANDO
// ==========================================

// Audio del ambiente que suena ahora
let sonidoActual = null;

// Ruta del subambiente que suena (por ejemplo "ambiente/bosque/0")
let ambienteActual = null;

// Capas encendidas (clave: ruta como "capa/clima/lluvia/ligera",
// valor: { categoria, sonido }). sonido es null mientras carga.
const capasEncendidas = {};

// Sube cada vez que se pulsa "Parar todo". Si un efecto
// termina de cargar después, ve que el número cambió y no suena.
let numeroParada = 0;


// ==========================================
// MOSTRAR AVISO EN PANTALLA
// ==========================================

// Guarda el temporizador para poder reiniciarlo
// si llega otro aviso antes de que se oculte el anterior
let temporizadorAviso = null;

function mostrarAviso(texto) {

    aviso.textContent = texto;

    aviso.hidden = false;


    clearTimeout(temporizadorAviso);

    temporizadorAviso = setTimeout(function() {

        aviso.hidden = true;

    }, 4000);

}


// ==========================================
// CARGAR VOLUMEN INICIAL
// ==========================================

Object.keys(sliders).forEach(function(categoria) {

    const slider = sliders[categoria];

    if (slider) {

        volumenes[categoria] =
            slider.value / 100;

    }

});


// ==========================================
// CAMBIAR VOLUMEN
// ==========================================

Object.keys(sliders).forEach(function(categoria) {

    const slider = sliders[categoria];

    if (!slider) {
        return;
    }

    slider.addEventListener(
        "input",
        function() {

            volumenes[categoria] =
                slider.value / 100;

            sonidosActivos[categoria]
                .forEach(function(sonido) {

                    sonido.volume =
                        volumenes[categoria];

                });

        }
    );

});


// ==========================================
// REGISTRAR SONIDO ACTIVO
// ==========================================

function registrarSonido(sonido, categoria) {

    sonido.volume =
        volumenes[categoria];

    sonidosActivos[categoria]
        .add(sonido);

    sonido.addEventListener(
        "ended",
        function() {

            sonidosActivos[categoria]
                .delete(sonido);

            if (sonidoActual === sonido) {

                sonidoActual = null;

            }

        }
    );

    return sonido;
}


// ==========================================
// MARCAR LOS BOTONES QUE ESTÁN SONANDO
// ==========================================
// Cada botón de menú tiene data-ruta. Un botón se marca
// como activo si lo que suena es él o algo dentro de él
// (así "Clima" brilla si suena "Clima → Lluvia → Ligera").

function actualizarBotones() {

    const rutasSonando =
        Object.keys(capasEncendidas);

    if (ambienteActual) {

        rutasSonando.push(ambienteActual);

    }


    document.querySelectorAll("[data-ruta]")
        .forEach(function(boton) {

            const ruta =
                boton.dataset.ruta;

            const activo =
                rutasSonando.some(function(rutaSonando) {

                    return rutaSonando === ruta ||
                        rutaSonando.indexOf(ruta + "/") === 0;

                });

            boton.classList.toggle("activo", activo);

        });

}


// ==========================================
// CREAR UN BOTÓN
// ==========================================

function crearBoton(texto, clase, ruta) {

    const boton =
        document.createElement("button");

    boton.className = clase;

    boton.textContent = texto;

    if (ruta) {

        boton.dataset.ruta = ruta;

    }

    return boton;

}


// ==========================================
// DETENER AMBIENTE ACTUAL
// ==========================================

function detenerAmbiente() {

    if (!sonidoActual) {
        return;
    }

    sonidoActual.pause();

    sonidoActual.currentTime = 0;

    sonidosActivos.ambiente
        .delete(sonidoActual);

    sonidoActual = null;

    ambienteActual = null;

    actualizarBotones();
}


// ==========================================
// BOTÓN PARAR AMBIENTE
// ==========================================

pararAmbiente.addEventListener(
    "click",
    function() {

        detenerAmbiente();

    }
);


// ==========================================
// REPRODUCIR BIBLIOTECA LOCAL
// ==========================================

function reproducirBiblioteca(
    biblioteca,
    variante,
    ruta
) {

    detenerAmbiente();


    const archivos =
        biblioteca.archivos;

    const indice =
        Math.floor(
            Math.random() * archivos.length
        );


    console.log(
        biblioteca.nombre + " → " + variante + ":",
        archivos[indice]
    );


    const sonido =
        new Audio(
            biblioteca.carpeta + archivos[indice]
        );


    sonido.loop = true;


    registrarSonido(
        sonido,
        "ambiente"
    );


    sonidoActual =
        sonido;

    ambienteActual =
        ruta;

    actualizarBotones();


    sonido.play()
        .catch(function(error) {

            // AbortError = lo paramos nosotros antes de que empezara
            // (por ejemplo, al cambiar rápido de variante): no es un fallo
            if (error.name === "AbortError") {
                return;
            }


            console.log(
                "No se pudo reproducir " + biblioteca.nombre + ":",
                error
            );

            mostrarAviso(
                "No se pudo reproducir " + biblioteca.nombre +
                " (" + archivos[indice] + ")"
            );

            // Si falla, que no quede como "ambiente actual"
            if (sonidoActual === sonido) {

                detenerAmbiente();

            }

        });

}


// ==========================================
// NAVEGACIÓN DE AMBIENTES
// ==========================================

function mostrarAmbiente(boton) {

    const ambiente =
        boton.dataset.ambiente;

    const opciones =
        subambientes[ambiente];


    if (!opciones) {

        mostrarAviso(
            "Este ambiente todavía no tiene subambientes"
        );

        return;
    }


    submenuAmbiente.innerHTML = "";


    const titulo =
        document.createElement("h3");

    titulo.textContent =
        boton.textContent.trim();


    const contenedor =
        document.createElement("div");

    contenedor.className =
        "botones-submenu";


    opciones.forEach(function(variante, indice) {

        const ruta =
            "ambiente/" + ambiente + "/" + indice;

        const botonVariante =
            crearBoton(variante, "boton-submenu", ruta);


        botonVariante.addEventListener(
            "click",
            function() {

                const propio =
                    sonidosPropiosAmbiente[ambiente + "|" + variante];

                // Sonido subido por el usuario: suena ese, en bucle
                if (propio) {

                    reproducirBiblioteca(
                        {
                            nombre: variante,
                            carpeta: "",
                            archivos: [propio.url]
                        },
                        variante,
                        ruta
                    );

                    return;
                }

                const biblioteca =
                    bibliotecas[ambiente];

                if (!biblioteca) {

                    mostrarAviso(
                        "Este ambiente todavía no tiene sonidos"
                    );

                    return;
                }

                reproducirBiblioteca(
                    biblioteca,
                    variante,
                    ruta
                );

            }
        );

        contenedor.appendChild(botonVariante);

    });


    const botonVolver =
        crearBoton("← Volver", "boton-volver");

    botonVolver.addEventListener(
        "click",
        function() {

            submenuAmbiente.innerHTML =
                "<p>Selecciona un ambiente</p>";

        }
    );


    submenuAmbiente.appendChild(titulo);

    submenuAmbiente.appendChild(contenedor);

    submenuAmbiente.appendChild(botonVolver);


    actualizarBotones();

}


botonesAmbiente.forEach(function(boton) {

    boton.dataset.ruta =
        "ambiente/" + boton.dataset.ambiente;

    boton.addEventListener(
        "click",
        function() {

            mostrarAmbiente(boton);

        }
    );

});


// ==========================================
// MENÚS POR NIVELES (CAPAS Y EFECTOS)
// ==========================================
// Capas y efectos tienen la misma forma:
// categoría → opciones → opciones → sonido final.
// "ruta" es la lista de claves hasta el nivel actual,
// por ejemplo ["clima", "lluvia"].

function obtenerNivel(datos, ruta) {

    let nivel =
        datos[ruta[0]];

    for (let i = 1; i < ruta.length; i++) {

        nivel = nivel.opciones[ruta[i]];

    }

    return nivel;

}


function mostrarMenu(tipo, ruta) {

    const datos =
        tipo === "capa" ? capas : efectos;

    const contenedorMenu =
        tipo === "capa" ? submenuCapas : submenuEfectos;

    const nivel =
        obtenerNivel(datos, ruta);


    // Título con el camino: "Clima → Lluvia"
    const nombres = [];

    for (let i = 1; i <= ruta.length; i++) {

        nombres.push(
            obtenerNivel(datos, ruta.slice(0, i)).nombre
        );

    }


    contenedorMenu.innerHTML = "";


    const titulo =
        document.createElement("h3");

    titulo.textContent =
        nombres.join(" → ");


    const contenedor =
        document.createElement("div");

    contenedor.className =
        "botones-submenu";


    Object.keys(nivel.opciones).forEach(function(clave) {

        const opcion =
            nivel.opciones[clave];

        const rutaOpcion =
            ruta.concat(clave);

        const boton =
            crearBoton(
                opcion.nombre,
                "boton-submenu",
                tipo + "/" + rutaOpcion.join("/")
            );


        boton.addEventListener(
            "click",
            function() {

                // Tiene más subcategorías: bajar un nivel
                if (opcion.opciones) {

                    mostrarMenu(tipo, rutaOpcion);

                    return;
                }


                // Sonido final
                if (tipo === "capa") {

                    alternarCapa(rutaOpcion, opcion);

                } else {

                    reproducirEfecto(rutaOpcion, opcion);

                }

            }
        );

        contenedor.appendChild(boton);

    });


    const botonVolver =
        crearBoton("← Volver", "boton-volver");

    botonVolver.addEventListener(
        "click",
        function() {

            if (ruta.length > 1) {

                mostrarMenu(tipo, ruta.slice(0, -1));

            } else if (tipo === "capa") {

                contenedorMenu.innerHTML =
                    "<p>Selecciona una capa</p>";

            } else {

                contenedorMenu.innerHTML =
                    "<p>Selecciona un tipo de efecto</p>";

            }

        }
    );


    contenedorMenu.appendChild(titulo);

    contenedorMenu.appendChild(contenedor);

    contenedorMenu.appendChild(botonVolver);


    actualizarBotones();

}


botonesCapa.forEach(function(boton) {

    boton.dataset.ruta =
        "capa/" + boton.dataset.capa;

    boton.addEventListener(
        "click",
        function() {

            mostrarMenu("capa", [boton.dataset.capa]);

        }
    );

});


botonesEfecto.forEach(function(boton) {

    boton.addEventListener(
        "click",
        function() {

            mostrarMenu("efecto", [boton.dataset.efecto]);

        }
    );

});


// Un sonido subido por el usuario ("url") se usa tal cual.
// Devuelve una lista con la misma forma de siempre; vacía si
// el botón todavía no tiene sonido asignado.
function obtenerResultados(opcion) {

    if (opcion.url) {

        return Promise.resolve([{
            name: opcion.nombre,
            previews: { "preview-hq-mp3": opcion.url }
        }]);

    }

    return Promise.resolve([]);

}


function elegirAlAzar(lista) {

    return lista[
        Math.floor(Math.random() * lista.length)
    ];

}


// ==========================================
// CAPAS: ENCENDER / APAGAR
// ==========================================

function apagarCapa(ruta) {

    const capa =
        capasEncendidas[ruta];

    if (!capa) {
        return;
    }


    if (capa.sonido) {

        capa.sonido.pause();

        sonidosActivos[capa.categoria]
            .delete(capa.sonido);

    }


    delete capasEncendidas[ruta];

    actualizarBotones();

}


function alternarCapa(rutaOpcion, opcion) {

    const ruta =
        "capa/" + rutaOpcion.join("/");

    const categoria =
        rutaOpcion[0];


    // Si ya está encendida, este clic la apaga
    if (capasEncendidas[ruta]) {

        apagarCapa(ruta);

        return;
    }


    // Se marca como encendida ya, aunque la búsqueda tarde
    capasEncendidas[ruta] = {
        categoria: categoria,
        sonido: null
    };

    actualizarBotones();


    obtenerResultados(opcion, "capa")

    .then(function(resultados) {

        const capa =
            capasEncendidas[ruta];

        // Se apagó mientras cargaba, o ya tiene un audio
        // (clics muy rápidos): no crear otro
        if (!capa || capa.sonido) {
            return;
        }


        if (resultados.length === 0) {

            mostrarAviso(
                "Aún no hay sonido asignado a " +
                opcion.nombre
            );

            apagarCapa(ruta);

            return;
        }


        const resultado =
            elegirAlAzar(resultados);

        console.log(
            "Sonido elegido:",
            resultado.name
        );


        const sonido =
            new Audio(
                resultado.previews["preview-hq-mp3"]
            );

        sonido.loop = true;

        registrarSonido(
            sonido,
            categoria
        );

        capa.sonido = sonido;


        sonido.play().catch(function(error) {

            // Apagada antes de empezar a sonar: no es un fallo
            if (error.name === "AbortError") {
                return;
            }


            console.log(
                "No se pudo reproducir la capa:",
                error
            );

            mostrarAviso(
                "No se pudo reproducir " +
                opcion.nombre
            );

            if (
                capasEncendidas[ruta] &&
                capasEncendidas[ruta].sonido === sonido
            ) {

                apagarCapa(ruta);

            }

        });

    })

    .catch(function(error) {

        console.log(
            "Error al cargar el sonido:",
            error
        );

        mostrarAviso(
            "No se pudo cargar el sonido (" +
            error.message + ")"
        );

        apagarCapa(ruta);

    });

}


// ==========================================
// EFECTOS: SUENAN UNA VEZ
// ==========================================

function reproducirEfecto(rutaOpcion, opcion) {

    const categoria =
        rutaOpcion[0];

    const paradaAlPulsar =
        numeroParada;


    console.log(
        "Reproduciendo efecto:",
        opcion.nombre,
        "| Categoría:",
        categoria
    );


    obtenerResultados(opcion, "efecto")

    .then(function(resultados) {

        // Se pulsó "Parar todo" mientras cargaba
        if (numeroParada !== paradaAlPulsar) {
            return;
        }


        if (resultados.length === 0) {

            mostrarAviso(
                "Aún no hay sonido asignado a " +
                opcion.nombre
            );

            return;
        }


        const sonido =
            new Audio(
                elegirAlAzar(resultados).previews["preview-hq-mp3"]
            );

        registrarSonido(
            sonido,
            categoria
        );


        sonido.play().catch(function(error) {

            sonidosActivos[categoria]
                .delete(sonido);

            // Parado con "Parar todo" antes de empezar: no es un fallo
            if (error.name === "AbortError") {
                return;
            }

            console.log(
                "No se pudo reproducir el efecto:",
                error
            );

            mostrarAviso(
                "No se pudo reproducir " +
                opcion.nombre
            );

        });

    })

    .catch(function(error) {

        console.log(
            "Error al cargar el sonido:",
            error
        );

        mostrarAviso(
            "No se pudo cargar el sonido (" +
            error.message + ")"
        );

    });

}


// ==========================================
// REPRODUCTOR DE MÚSICA
// ==========================================

const playlists = {

    exploracion: { nombre: "Exploración", canciones: [], spotify: "" },
    combate:     { nombre: "Combate",     canciones: [], spotify: "" },
    mazmorras:   { nombre: "Mazmorras",   canciones: [], spotify: "" },
    tabernas:    { nombre: "Tabernas",    canciones: [], spotify: "" },

    terror:   { nombre: "Terror",   canciones: [], spotify: "" },
    fantasia: { nombre: "Fantasía", canciones: [], spotify: "" },
    jefes:    { nombre: "Jefes",    canciones: [], spotify: "" }

};

const musica = new Audio();

let playlistActual = null;
let indiceActual = -1;

// true mientras la música suena desde Spotify y no desde un MP3
let usandoSpotify = false;

let spotifyPausado = true;

// Duración de la canción de Spotify (ms), para la barra
let spotifyDuracion = 0;

const tituloCancion =
    document.getElementById("cancion-actual");

const barraProgreso =
    document.getElementById("progreso-musica");

const tiempoTranscurrido =
    document.getElementById("tiempo-transcurrido");

const tiempoRestante =
    document.getElementById("tiempo-restante");

const botonPlay =
    document.getElementById("reproducir-musica");

const botonAnterior =
    document.getElementById("anterior-musica");

const botonSiguiente =
    document.getElementById("siguiente-musica");

const listaPlaylist =
    document.getElementById("lista-playlist");

const sliderMusica =
    document.getElementById("volumen-musica");


// ==========================================
// PLAYLISTS DE SPOTIFY
// ==========================================
// Cada playlist de la web apunta a una playlist de Spotify.
// Se definen en config.js (SPOTIFY_PLAYLISTS), así que son
// las mismas para todo el que abra la página.

Object.keys(playlists).forEach(function(clave) {

    const uri = musicaSpotify.leerEnlace(
        SPOTIFY_PLAYLISTS[clave] || ""
    );

    playlists[clave].spotify = uri || "";

});


// ==========================================
// BOTONES DEL REPRODUCTOR
// ==========================================

// Escribe el tiempo transcurrido y el que falta (en ms)
function mostrarTiempos(posicion, duracion) {

    tiempoTranscurrido.textContent =
        formatoDuracion(posicion);

    tiempoRestante.textContent =
        "-" + formatoDuracion(Math.max(duracion - posicion, 0));

}


function actualizarBotonPlay() {

    const pausado =
        usandoSpotify ? spotifyPausado : musica.paused;

    botonPlay.textContent =
        pausado ? "Reproducir" : "Pausar";

    botonPlay.setAttribute(
        "aria-label",
        pausado ? "Reproducir" : "Pausar"
    );

}


musicaSpotify.alAviso = mostrarAviso;

musicaSpotify.alCambiarEstado = function(estado) {

    if (!usandoSpotify) {
        return;
    }

    spotifyPausado = estado.pausado;

    spotifyDuracion = estado.duracion;

    marcarCancionDeSpotify(estado.uri);

    tituloCancion.textContent = estado.titulo;

    barraProgreso.value =
        estado.duracion
            ? (estado.posicion / estado.duracion) * 100
            : 0;

    mostrarTiempos(estado.posicion, estado.duracion);

    actualizarBotonPlay();

};

musicaSpotify.alCambiarConexion = function() {

    musicaSpotify.volumen(sliderMusica.value / 100);

    if (playlistActual) {

        mostrarPlaylist(playlistActual);

    }

};


function reproducirCancion(indice) {

    if (!playlistActual) {
        return;
    }

    const canciones =
        playlists[playlistActual].canciones;

    if (canciones.length === 0) {
        return;
    }

    // Una canción local corta la de Spotify
    if (usandoSpotify) {

        musicaSpotify.pausar();

        usandoSpotify = false;

    }

    indiceActual =
        (indice + canciones.length) % canciones.length;

    const cancion = canciones[indiceActual];

    musica.src = cancion.ruta;

    tituloCancion.textContent = cancion.titulo;

    musica.play().catch(function(error) {

        console.log(
            "No se pudo reproducir la canción:",
            error
        );

    });

    marcarCancionActiva();

}


function reproducirEnSpotify(clave, cancion) {

    const uri = playlists[clave].spotify;

    if (!uri || !musicaSpotify.conectado) {
        return;
    }

    // Una playlist de Spotify corta la música local
    musica.pause();

    usandoSpotify = true;

    spotifyPausado = false;

    indiceActual = -1;

    tituloCancion.textContent = playlists[clave].nombre;

    actualizarBotonPlay();

    musicaSpotify.reproducir(uri, cancion).catch(function(error) {

        console.log("No se pudo reproducir en Spotify:", error);

        usandoSpotify = false;

        spotifyPausado = true;

        actualizarBotonPlay();

        mostrarAviso(
            "No se pudo reproducir la playlist (" +
            error.message + ")"
        );

    });

}


// 215000 ms → "3:35"
function formatoDuracion(milisegundos) {

    const segundos = Math.round(milisegundos / 1000);

    return Math.floor(segundos / 60) + ":" +
        String(segundos % 60).padStart(2, "0");

}


function marcarCancionDeSpotify(uri) {

    listaPlaylist
        .querySelectorAll("[data-uri]")
        .forEach(function(boton) {

            boton.classList.toggle(
                "activo",
                boton.dataset.uri === uri
            );

        });

}


// Lista de canciones de la playlist de Spotify, para elegir una
function mostrarCancionesDeSpotify(clave) {

    const contenedor = document.createElement("div");

    contenedor.className = "lista-canciones";

    const estado = document.createElement("p");

    estado.textContent = "Cargando canciones...";

    listaPlaylist.appendChild(estado);

    musicaSpotify.canciones(playlists[clave].spotify)

    .then(function(canciones) {

        // Se eligió otra playlist mientras cargaba
        if (playlistActual !== clave) {
            return;
        }

        if (canciones.length === 0) {

            estado.textContent = "La playlist está vacía";

            return;
        }

        estado.remove();

        canciones.forEach(function(cancion, i) {

            const fila = document.createElement("button");

            fila.type = "button";

            fila.className = "fila-cancion";

            fila.dataset.uri = cancion.uri;

            const numero = document.createElement("span");

            numero.className = "cancion-numero";

            numero.textContent = i + 1;

            const texto = document.createElement("span");

            texto.className = "cancion-texto";

            const titulo = document.createElement("strong");

            titulo.textContent = cancion.titulo;

            const artistas = document.createElement("small");

            artistas.textContent = cancion.artistas;

            texto.appendChild(titulo);

            texto.appendChild(artistas);

            const duracion = document.createElement("span");

            duracion.className = "cancion-duracion";

            duracion.textContent = formatoDuracion(cancion.duracion);

            fila.appendChild(numero);

            fila.appendChild(texto);

            fila.appendChild(duracion);

            fila.addEventListener("click", function() {

                reproducirEnSpotify(clave, cancion.uri);

            });

            contenedor.appendChild(fila);

        });

        listaPlaylist.appendChild(contenedor);

    })

    .catch(function(error) {

        if (playlistActual !== clave) {
            return;
        }

        console.log("No se pudo cargar la lista:", error);

        estado.textContent =
            error.message.indexOf("403") !== -1
                ? "Spotify solo deja ver las canciones de playlists " +
                  "propias. La playlist suena igual con su botón."
                : "No se pudo cargar la lista de canciones (" +
                  error.message + ")";

    });

}


function marcarCancionActiva() {

    listaPlaylist
        .querySelectorAll(".boton-submenu")
        .forEach(function(boton, i) {

            boton.classList.toggle(
                "activo",
                i === indiceActual
            );

        });

}


// Bloque de Spotify de la playlist: botón para conectar la cuenta
function crearBloqueSpotify() {

    const bloque = document.createElement("div");

    bloque.className = "bloque-spotify";

    if (!SPOTIFY_CLIENT_ID) {

        const aviso = document.createElement("p");

        aviso.textContent =
            "Para usar Spotify, pon tu Client ID en config.js";

        bloque.appendChild(aviso);

        return bloque;
    }

    if (musicaSpotify.conectado) {

        return bloque;
    }

    const conectar = document.createElement("button");

    conectar.type = "button";

    conectar.className = "boton-volver";

    // Con sesión guardada, la conexión se hace sola al cargar
    const hayCredencial =
        !!localStorage.getItem(CLAVE_SPOTIFY_TOKEN);

    conectar.textContent =
        hayCredencial
            ? "Conectando con Spotify..."
            : "Conectar con Spotify";

    conectar.disabled = hayCredencial;

    conectar.addEventListener("click", function() {

        musicaSpotify.conectar();

    });

    bloque.appendChild(conectar);

    return bloque;

}


function mostrarPlaylist(clave) {

    const playlist = playlists[clave];

    if (!playlist) {
        return;
    }

    playlistActual = clave;

    listaPlaylist.innerHTML = "";

    const titulo = document.createElement("h3");

    titulo.textContent = playlist.nombre;

    listaPlaylist.appendChild(titulo);

    listaPlaylist.appendChild(crearBloqueSpotify());

    if (playlist.spotify && musicaSpotify.conectado) {

        mostrarCancionesDeSpotify(clave);

        return;
    }

    if (playlist.canciones.length === 0) {

        if (!playlist.spotify) {

            const aviso = document.createElement("p");

            aviso.textContent =
                "Esta playlist aún no tiene canciones";

            listaPlaylist.appendChild(aviso);

        }

        return;
    }

    const contenedor = document.createElement("div");

    contenedor.className = "botones-submenu";

    playlist.canciones.forEach(function(cancion, i) {

        const boton = document.createElement("button");

        boton.type = "button";

        boton.className = "boton-submenu";

        boton.textContent = cancion.titulo;

        boton.addEventListener("click", function() {

            reproducirCancion(i);

        });

        contenedor.appendChild(boton);

    });

    listaPlaylist.appendChild(contenedor);

    marcarCancionActiva();

}


document
    .querySelectorAll(".boton-playlist")
    .forEach(function(boton) {

        boton.addEventListener("click", function() {

            mostrarPlaylist(boton.dataset.playlist);

            // Con una playlist de Spotify guardada, suena al elegirla
            reproducirEnSpotify(boton.dataset.playlist);

        });

    });


botonPlay.addEventListener("click", function() {

    if (usandoSpotify) {

        musicaSpotify.alternar();

        return;
    }

    if (
        playlistActual &&
        playlists[playlistActual].spotify &&
        musicaSpotify.conectado
    ) {

        reproducirEnSpotify(playlistActual);

        return;
    }

    if (!musica.src) {

        // Sin canción cargada: empezar la playlist elegida.
        reproducirCancion(0);

        return;
    }

    if (musica.paused) {

        musica.play();

    } else {

        musica.pause();

    }

});

botonAnterior.addEventListener("click", function() {

    if (usandoSpotify) {

        musicaSpotify.anterior();

        return;
    }

    reproducirCancion(indiceActual - 1);

});

botonSiguiente.addEventListener("click", function() {

    if (usandoSpotify) {

        musicaSpotify.siguiente();

        return;
    }

    reproducirCancion(indiceActual + 1);

});

musica.addEventListener("play", actualizarBotonPlay);
musica.addEventListener("pause", actualizarBotonPlay);

musica.addEventListener("ended", function() {

    reproducirCancion(indiceActual + 1);

});

musica.addEventListener("timeupdate", function() {

    if (musica.duration) {

        barraProgreso.value =
            (musica.currentTime / musica.duration) * 100;

        mostrarTiempos(
            musica.currentTime * 1000,
            musica.duration * 1000
        );

    }

});

barraProgreso.addEventListener("input", function() {

    if (usandoSpotify) {

        musicaSpotify.buscar(
            (barraProgreso.value / 100) * spotifyDuracion
        );

        return;
    }

    if (musica.duration) {

        musica.currentTime =
            (barraProgreso.value / 100) * musica.duration;

    }

});

sliderMusica.addEventListener("input", function() {

    musica.volume = sliderMusica.value / 100;

    musicaSpotify.volumen(sliderMusica.value / 100);

});

musica.volume = sliderMusica.value / 100;


// ==========================================
// PARAR TODO
// ==========================================

function pararTodo() {

    // 1. Ambiente
    detenerAmbiente();


    // 2. Capas (también las que aún están cargando)
    Object.keys(capasEncendidas).forEach(function(ruta) {

        apagarCapa(ruta);

    });


    // 3. Efectos y cualquier otro sonido registrado
    Object.keys(sonidosActivos).forEach(function(categoria) {

        sonidosActivos[categoria]
            .forEach(function(sonido) {

                sonido.pause();

            });

        sonidosActivos[categoria].clear();

    });


    // 4. Música (local y Spotify)
    musica.pause();

    musicaSpotify.pausar();


    // 5. Que los efectos que aún cargan no suenen después
    numeroParada++;


    actualizarBotones();

    console.log("Todo parado");

}


botonPararTodo.addEventListener(
    "click",
    function() {

        pararTodo();

    }
);


// ==========================================
// MIS SONIDOS (los añade el usuario desde la web)
// ==========================================
// Los archivos se guardan en el navegador (IndexedDB), así que
// no hace falta servidor, pero solo existen en este navegador.
// Al cargar la página se vuelven a meter en playlists,
// subambientes, capas y efectos para que tengan su botón.

const BD_NOMBRE = "dnd-soundboard";

const BD_ALMACEN = "sonidos";

const TAMANO_MAXIMO_MB = 50;

// Sonidos propios cargados ahora mismo en la página
const propios = [];

// "ambiente|nombre del botón" → registro del sonido
const sonidosPropiosAmbiente = {};

const formPropio =
    document.getElementById("form-propio");

const campoArchivo =
    document.getElementById("propio-archivo");

const campoNombre =
    document.getElementById("propio-nombre");

const selectTipo =
    document.getElementById("propio-tipo");

const selectDestino1 =
    document.getElementById("propio-destino1");

const selectDestino2 =
    document.getElementById("propio-destino2");

const campoDestino1 =
    document.getElementById("campo-destino1");

const campoDestino2 =
    document.getElementById("campo-destino2");

const listaPropios =
    document.getElementById("lista-propios");


// ==========================================
// BASE DE DATOS
// ==========================================

let promesaBD = null;

function abrirBD() {

    if (!promesaBD) {

        promesaBD = new Promise(function(resolver, rechazar) {

            const peticion =
                indexedDB.open(BD_NOMBRE, 1);

            peticion.onupgradeneeded = function() {

                peticion.result.createObjectStore(
                    BD_ALMACEN,
                    { keyPath: "id", autoIncrement: true }
                );

            };

            peticion.onsuccess = function() {
                resolver(peticion.result);
            };

            peticion.onerror = function() {
                rechazar(peticion.error);
            };

        });

    }

    return promesaBD;

}


function operacionBD(modo, operacion) {

    return abrirBD().then(function(bd) {

        return new Promise(function(resolver, rechazar) {

            const transaccion =
                bd.transaction(BD_ALMACEN, modo);

            const peticion =
                operacion(transaccion.objectStore(BD_ALMACEN));

            transaccion.oncomplete = function() {
                resolver(peticion.result);
            };

            transaccion.onerror = function() {
                rechazar(transaccion.error);
            };

            transaccion.onabort = function() {
                rechazar(transaccion.error);
            };

        });

    });

}


// ==========================================
// DATOS SEGÚN EL TIPO
// ==========================================

function datosDe(tipo) {

    return tipo === "capa" ? capas : efectos;

}


function nombreAmbiente(clave) {

    for (const boton of botonesAmbiente) {

        if (boton.dataset.ambiente === clave) {

            return boton.textContent.trim();

        }

    }

    return clave;

}


// Texto que se ve en la lista: "Capa · Clima › Lluvia"
function describirDestino(registro) {

    const d = registro.destino;

    if (registro.tipo === "musica") {

        return "Música · " + playlists[d[0]].nombre;

    }

    if (registro.tipo === "ambiente") {

        return "Ambiente · " + nombreAmbiente(d[0]);

    }

    const datos = datosDe(registro.tipo);

    return (registro.tipo === "capa" ? "Capa" : "Efecto") +
        " · " + datos[d[0]].nombre +
        " › " + datos[d[0]].opciones[d[1]].nombre;

}


// ==========================================
// METER / QUITAR UN SONIDO EN LA PÁGINA
// ==========================================

function aplicarPropio(registro) {

    const d = registro.destino;

    registro.url =
        URL.createObjectURL(registro.archivo);

    if (registro.tipo === "musica") {

        playlists[d[0]].canciones.push({
            titulo: registro.nombre,
            ruta: registro.url,
            idPropio: registro.id
        });

    } else if (registro.tipo === "ambiente") {

        subambientes[d[0]].push(registro.nombre);

        sonidosPropiosAmbiente[d[0] + "|" + registro.nombre] =
            registro;

    } else {

        datosDe(registro.tipo)[d[0]].opciones[d[1]]
            .opciones["propio" + registro.id] = {
                nombre: registro.nombre,
                url: registro.url,
                idPropio: registro.id
            };

    }

    propios.push(registro);

}


function quitarPropioDePagina(registro) {

    const d = registro.destino;

    if (registro.tipo === "musica") {

        const lista = playlists[d[0]].canciones;

        lista.splice(
            lista.findIndex(function(c) {
                return c.idPropio === registro.id;
            }),
            1
        );

    } else if (registro.tipo === "ambiente") {

        const lista = subambientes[d[0]];

        lista.splice(lista.indexOf(registro.nombre), 1);

        delete sonidosPropiosAmbiente[
            d[0] + "|" + registro.nombre
        ];

    } else {

        delete datosDe(registro.tipo)[d[0]].opciones[d[1]]
            .opciones["propio" + registro.id];

    }

    URL.revokeObjectURL(registro.url);

    propios.splice(propios.indexOf(registro), 1);

}


// Los menús abiertos ya no están al día: se vuelven al inicio
function reiniciarMenu(tipo) {

    if (tipo === "ambiente") {

        submenuAmbiente.innerHTML =
            "<p>Selecciona un ambiente</p>";

    } else if (tipo === "capa") {

        submenuCapas.innerHTML =
            "<p>Selecciona una capa</p>";

    } else if (tipo === "efecto") {

        submenuEfectos.innerHTML =
            "<p>Selecciona un tipo de efecto</p>";

    } else if (playlistActual) {

        mostrarPlaylist(playlistActual);

    }

}


// ==========================================
// FORMULARIO
// ==========================================

function llenarSelect(select, opciones) {

    select.innerHTML = "";

    opciones.forEach(function(opcion) {

        const elemento =
            document.createElement("option");

        elemento.value = opcion[0];

        elemento.textContent = opcion[1];

        select.appendChild(elemento);

    });

}


function opcionesDe(objeto) {

    return Object.keys(objeto).map(function(clave) {

        return [clave, objeto[clave].nombre];

    });

}


function actualizarGrupos() {

    const datos = datosDe(selectTipo.value);

    llenarSelect(
        selectDestino2,
        opcionesDe(datos[selectDestino1.value].opciones)
    );

}


function actualizarDestinos() {

    const tipo = selectTipo.value;

    const etiqueta1 =
        campoDestino1.querySelector("span");

    campoDestino2.hidden = true;


    if (tipo === "musica") {

        etiqueta1.textContent = "Playlist";

        llenarSelect(selectDestino1, opcionesDe(playlists));

    } else if (tipo === "ambiente") {

        etiqueta1.textContent = "Ambiente";

        llenarSelect(
            selectDestino1,
            Array.from(botonesAmbiente).map(function(boton) {

                return [
                    boton.dataset.ambiente,
                    boton.textContent.trim()
                ];

            })
        );

    } else {

        etiqueta1.textContent = "Categoría";

        llenarSelect(
            selectDestino1,
            opcionesDe(datosDe(tipo))
        );

        campoDestino2.hidden = false;

        actualizarGrupos();

    }

}


selectTipo.addEventListener("change", actualizarDestinos);

selectDestino1.addEventListener("change", function() {

    if (selectTipo.value === "capa" || selectTipo.value === "efecto") {

        actualizarGrupos();

    }

});


// Si no se ha escrito nombre, se propone el del archivo
campoArchivo.addEventListener("change", function() {

    const archivo = campoArchivo.files[0];

    if (archivo && !campoNombre.value.trim()) {

        campoNombre.value =
            archivo.name.replace(/\.[^.]+$/, "");

    }

});


formPropio.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const archivo = campoArchivo.files[0];

    const nombre = campoNombre.value.trim();

    const tipo = selectTipo.value;


    if (!archivo || !nombre) {
        return;
    }

    if (archivo.type.indexOf("audio/") !== 0) {

        mostrarAviso("El archivo tiene que ser de audio");

        return;
    }

    if (archivo.size > TAMANO_MAXIMO_MB * 1024 * 1024) {

        mostrarAviso(
            "El archivo pesa más de " + TAMANO_MAXIMO_MB + " MB"
        );

        return;
    }


    const destino = [selectDestino1.value];

    if (tipo === "capa" || tipo === "efecto") {

        destino.push(selectDestino2.value);

    }

    if (
        tipo === "ambiente" &&
        subambientes[destino[0]].indexOf(nombre) !== -1
    ) {

        mostrarAviso(
            "Ese ambiente ya tiene un botón con ese nombre"
        );

        return;
    }


    const registro = {
        nombre: nombre,
        tipo: tipo,
        destino: destino,
        archivo: archivo
    };


    operacionBD("readwrite", function(almacen) {

        return almacen.add(registro);

    })

    .then(function(id) {

        registro.id = id;

        aplicarPropio(registro);

        reiniciarMenu(tipo);

        mostrarListaPropios();

        formPropio.reset();

        actualizarDestinos();

        mostrarAviso(
            "Añadido: " + nombre + " (" +
            describirDestino(registro) + ")"
        );

    })

    .catch(function(error) {

        console.log("No se pudo guardar el sonido:", error);

        mostrarAviso(
            "No se pudo guardar el sonido en el navegador"
        );

    });

});


// ==========================================
// LISTA DE SONIDOS AÑADIDOS
// ==========================================

function mostrarListaPropios() {

    listaPropios.innerHTML = "";

    if (propios.length === 0) {

        const vacio = document.createElement("p");

        vacio.textContent = "Todavía no has añadido sonidos";

        listaPropios.appendChild(vacio);

        return;
    }


    propios.forEach(function(registro) {

        const fila = document.createElement("div");

        fila.className = "fila-propio";


        const texto = document.createElement("span");

        const nombre = document.createElement("strong");

        nombre.textContent = registro.nombre;

        const donde = document.createElement("small");

        donde.textContent = describirDestino(registro);

        texto.appendChild(nombre);

        texto.appendChild(donde);


        const quitar = document.createElement("button");

        quitar.type = "button";

        quitar.className = "boton-volver";

        quitar.textContent = "Quitar";

        quitar.addEventListener("click", function() {

            // Evita que siga sonando algo que se va a borrar
            pararTodo();

            operacionBD("readwrite", function(almacen) {

                return almacen.delete(registro.id);

            })

            .then(function() {

                quitarPropioDePagina(registro);

                if (registro.tipo === "musica") {

                    musica.removeAttribute("src");

                    indiceActual = -1;

                    tituloCancion.textContent =
                        "Ninguna canción seleccionada";

                    actualizarBotonPlay();

                }

                reiniciarMenu(registro.tipo);

                mostrarListaPropios();

            })

            .catch(function(error) {

                console.log("No se pudo quitar el sonido:", error);

                mostrarAviso("No se pudo quitar el sonido");

            });

        });


        fila.appendChild(texto);

        fila.appendChild(quitar);

        listaPropios.appendChild(fila);

    });

}


// ==========================================
// CARGAR LOS SONIDOS GUARDADOS
// ==========================================

actualizarDestinos();

mostrarListaPropios();

if (window.indexedDB) {

    operacionBD("readonly", function(almacen) {

        return almacen.getAll();

    })

    .then(function(guardados) {

        guardados.forEach(function(registro) {

            try {

                aplicarPropio(registro);

            } catch (error) {

                // El destino ya no existe: se ignora ese sonido
                console.log("Sonido ignorado:", registro.nombre);

            }

        });

        mostrarListaPropios();

        // Pide al navegador que no borre los archivos solo
        if (navigator.storage && navigator.storage.persist) {

            navigator.storage.persist();

        }

    })

    .catch(function(error) {

        console.log("No se pudo leer la base de datos:", error);

    });

} else {

    mostrarAviso(
        "Este navegador no permite guardar sonidos propios"
    );

}


// ==========================================
// FIN DEL SCRIPT
// ==========================================

console.log(
    "Soundboard cargado correctamente."
);
