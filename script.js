console.log("El Soundboard está funcionando");


// ==========================================
// SUBAMBIENTES
// ==========================================

const subambientes = {

    bosque: [
        "😌 Tranquilo",
        "🕵️ Misterioso",
        "🌑 Oscuro",
        "☠️ Peligroso"
    ],

    taberna: [
        "😊 Alegre",
        "🍻 Animada",
        "😔 Triste",
        "⚔️ Pelea"
    ],

    mazmorra: [
        "🌑 Oscura",
        "👻 Misteriosa",
        "☠️ Peligrosa",
        "👹 Terrorífica"
    ],

    ciudad: [
        "🌞 Día",
        "🌙 Noche",
        "🏪 Mercado",
        "🏰 Palacio"
    ],

    costa: [
        "🌅 Tranquila",
        "🌊 Oleaje",
        "⛈️ Tormenta",
        "🏴‍☠️ Puerto"
    ],

    montaña: [
        "🏔️ Tranquila",
        "💨 Ventosa",
        "❄️ Nevada",
        "⛰️ Peligrosa"
    ],

    batalla: [
        "⚔️ Batalla",
        "🩸 Batalla intensa",
        "🏹 Asedio",
        "👑 Batalla contra jefe"
    ]

};


// ==========================================
// ESTRUCTURA DE CAPAS
// ==========================================

const capas = {

    // ==========================================
    // CLIMA
    // ==========================================

    clima: {

        nombre: "🌧️ Clima",

        opciones: {

            lluvia: {

                nombre: "🌧️ Lluvia",

                opciones: {

                    ligera: {
                        nombre: "🌦️ Lluvia ligera",
                        sonido: true
                    },

                    normal: {
                        nombre: "🌧️ Lluvia normal",
                        sonido: true
                    },

                    intensa: {
                        nombre: "🌧️ Lluvia intensa",
                        sonido: true
                    }

                }

            },


            tormenta: {

                nombre: "⛈️ Tormenta",

                opciones: {

                    truenos: {
                        nombre: "⚡ Truenos",
                        sonido: true
                    },

                    ligera: {
                        nombre: "⛈️ Tormenta ligera",
                        sonido: true
                    },

                    intensa: {
                        nombre: "🌩️ Tormenta intensa",
                        sonido: true
                    }

                }

            },


            viento: {

                nombre: "💨 Viento",

                opciones: {

                    brisa: {
                        nombre: "🍃 Brisa",
                        sonido: true
                    },

                    normal: {
                        nombre: "💨 Viento normal",
                        sonido: true
                    },

                    fuerte: {
                        nombre: "🌪️ Viento fuerte",
                        sonido: true
                    }

                }

            },


            nieve: {

                nombre: "❄️ Nieve",

                opciones: {

                    ligera: {
                        nombre: "❄️ Nevada ligera",
                        sonido: true
                    },

                    normal: {
                        nombre: "🌨️ Nevada normal",
                        sonido: true
                    },

                    ventisca: {
                        nombre: "🌨️ Ventisca",
                        sonido: true
                    }

                }

            },


            niebla: {

                nombre: "🌫️ Niebla",

                opciones: {

                    ligera: {
                        nombre: "🌫️ Niebla ligera",
                        sonido: true
                    },

                    densa: {
                        nombre: "🌫️ Niebla densa",
                        sonido: true
                    },

                    sobrenatural: {
                        nombre: "👻 Niebla sobrenatural",
                        sonido: true
                    }

                }

            }

        }

    },


    // ==========================================
    // NATURALEZA
    // ==========================================

    naturaleza: {

        nombre: "🌿 Naturaleza",

        opciones: {

            bosque: {

                nombre: "🌳 Bosque",

                opciones: {

                    hojas: {
                        nombre: "🍃 Hojas y vegetación",
                        sonido: true
                    },

                    vientoArboles: {
                        nombre: "🌲 Viento entre árboles",
                        sonido: true
                    },

                    naturaleza: {
                        nombre: "🌿 Naturaleza",
                        sonido: true
                    }

                }

            },


            agua: {

                nombre: "🌊 Agua",

                opciones: {

                    goteo: {
                        nombre: "💧 Goteo",
                        sonido: true
                    },

                    rio: {
                        nombre: "🌊 Río",
                        sonido: true
                    },

                    cascada: {
                        nombre: "🏞️ Cascada",
                        sonido: true
                    },

                    mar: {
                        nombre: "🌊 Mar",
                        sonido: true
                    }

                }

            },


            rocas: {

                nombre: "🪨 Rocas",

                opciones: {

                    piedras: {
                        nombre: "🪨 Piedras",
                        sonido: true
                    },

                    derrumbe: {
                        nombre: "⛰️ Derrumbe",
                        sonido: true
                    },

                    rocasCayendo: {
                        nombre: "🪨 Rocas cayendo",
                        sonido: true
                    }

                }

            }

        }

    },


    // ==========================================
    // ANIMALES
    // ==========================================

    animales: {

        nombre: "🐺 Animales",

        opciones: {

            lobos: {

                nombre: "🐺 Lobos",

                opciones: {

                    lobo: {
                        nombre: "🐺 Lobo",
                        sonido: true
                    },

                    manada: {
                        nombre: "🐺 Manada",
                        sonido: true
                    }

                }

            },


            aves: {

                nombre: "🦅 Aves",

                opciones: {

                    pajaros: {
                        nombre: "🐦 Pájaros",
                        sonido: true
                    },

                    aveRapaz: {
                        nombre: "🦅 Ave rapaz",
                        sonido: true
                    }

                }

            },


            caballos: {

                nombre: "🐴 Caballos",

                opciones: {

                    caballo: {
                        nombre: "🐴 Caballo",
                        sonido: true
                    },

                    caballos: {
                        nombre: "🐎 Caballos",
                        sonido: true
                    }

                }

            },


            animalesSalvajes: {

                nombre: "🐻 Animales salvajes",

                opciones: {

                    oso: {
                        nombre: "🐻 Oso",
                        sonido: true
                    },

                    jabali: {
                        nombre: "🐗 Jabalí",
                        sonido: true
                    },

                    ciervo: {
                        nombre: "🦌 Ciervo",
                        sonido: true
                    }

                }

            }

        }

    },


    // ==========================================
    // ENTORNO
    // ==========================================

    entorno: {

        nombre: "🔥 Entorno",

        opciones: {

            fuego: {

                nombre: "🔥 Fuego",

                opciones: {

                    hoguera: {
                        nombre: "🔥 Hoguera",
                        sonido: true
                    },

                    fuegoPequeno: {
                        nombre: "🕯️ Fuego pequeño",
                        sonido: true
                    },

                    fuegoGrande: {
                        nombre: "🔥 Fuego grande",
                        sonido: true
                    }

                }

            },


            puertas: {

                nombre: "🚪 Puertas",

                opciones: {

                    madera: {
                        nombre: "🚪 Puerta de madera",
                        sonido: true
                    },

                    pesada: {
                        nombre: "🚪 Puerta pesada",
                        sonido: true
                    },

                    metalica: {
                        nombre: "🔒 Puerta metálica",
                        sonido: true
                    }

                }

            },


            campanas: {

                nombre: "🔔 Campanas",

                opciones: {

                    pequena: {
                        nombre: "🔔 Campana pequeña",
                        sonido: true
                    },

                    grande: {
                        nombre: "🔔 Campana grande",
                        sonido: true
                    }

                }

            },


            cadenas: {

                nombre: "⛓️ Cadenas",

                opciones: {

                    moviendose: {
                        nombre: "⛓️ Cadenas moviéndose",
                        sonido: true
                    },

                    pesadas: {
                        nombre: "⛓️ Cadenas pesadas",
                        sonido: true
                    }

                }

            },


            multitud: {

                nombre: "👥 Multitud",

                opciones: {

                    ciudad: {
                        nombre: "🏙️ Multitud ciudad",
                        sonido: true
                    },

                    taberna: {
                        nombre: "🍺 Multitud taberna",
                        sonido: true
                    },

                    gritando: {
                        nombre: "📣 Multitud gritando",
                        sonido: true
                    }

                }

            }

        }

    }

};

const efectos = {

    combate: {

        nombre: "⚔️ Combate",

        opciones: {

            espadas: {
                nombre: "🗡️ Espadas",

                opciones: {

                    espadazo: {
                        nombre: "⚔️ Espadazo",
                        sonido: true
                    },

                    corte: {
                        nombre: "🗡️ Corte",
                        sonido: true
                    },

                    estocada: {
                        nombre: "🔱 Estocada",
                        sonido: true
                    },

                    choque: {
                        nombre: "⚔️ Choque de espadas",
                        sonido: true
                    }

                }
            },

            mazas: {
                nombre: "🔨 Mazas y martillos",

                opciones: {

                    mazazo: {
                        nombre: "🔨 Mazazo",
                        sonido: true
                    },

                    golpe_martillo: {
                        nombre: "🔨 Golpe de martillo",
                        sonido: true
                    },

                    golpe_pesado: {
                        nombre: "💥 Golpe pesado",
                        sonido: true
                    }

                }
            },

            escudos: {
                nombre: "🛡️ Escudos",

                opciones: {

                    golpe_escudo: {
                        nombre: "🛡️ Golpe al escudo",
                        sonido: true
                    },

                    bloqueo: {
                        nombre: "🛡️ Bloqueo",
                        sonido: true
                    },

                    escudo_pesado: {
                        nombre: "💥 Golpe fuerte al escudo",
                        sonido: true
                    }

                }
            },

            arcos: {
                nombre: "🏹 Arcos y ballestas",

                opciones: {

                    flechazo: {
                        nombre: "🏹 Flechazo",
                        sonido: true
                    },

                    disparo_arco: {
                        nombre: "🏹 Disparo de arco",
                        sonido: true
                    },

                    ballesta: {
                        nombre: "🏹 Disparo de ballesta",
                        sonido: true
                    },

                    cuerda: {
                        nombre: "🏹 Tensar arco",
                        sonido: true
                    }

                }
            },

            otras_armas: {
                nombre: "🪓 Otras armas",

                opciones: {

                    hachazo: {
                        nombre: "🪓 Hachazo",
                        sonido: true
                    },

                    lanza: {
                        nombre: "🔱 Golpe de lanza",
                        sonido: true
                    },

                    daga: {
                        nombre: "🔪 Golpe de daga",
                        sonido: true
                    }

                }
            }

        }
    },


    magia: {

        nombre: "✨ Magia",

        opciones: {

            fuego: {
                nombre: "🔥 Fuego",

                opciones: {

                    fuego_pequeno: {
                        nombre: "🔥 Fuego pequeño",
                        sonido: true
                    },

                    fuego_grande: {
                        nombre: "🔥 Fuego intenso",
                        sonido: true
                    },

                    explosion: {
                        nombre: "💥 Explosión",
                        sonido: true
                    }

                }
            },

            hielo: {
                nombre: "❄️ Hielo",

                opciones: {

                    hielo: {
                        nombre: "❄️ Hielo",
                        sonido: true
                    },

                    congelacion: {
                        nombre: "🧊 Congelación",
                        sonido: true
                    },

                    cristal: {
                        nombre: "💎 Cristal mágico",
                        sonido: true
                    }

                }
            },

            electricidad: {
                nombre: "⚡ Electricidad",

                opciones: {

                    chispa: {
                        nombre: "⚡ Chispa",
                        sonido: true
                    },

                    rayo: {
                        nombre: "⚡ Rayo",
                        sonido: true
                    },

                    trueno_magico: {
                        nombre: "🌩️ Trueno mágico",
                        sonido: true
                    }

                }
            },

            aire: {
                nombre: "🌪️ Aire",

                opciones: {

                    viento_magico: {
                        nombre: "💨 Viento mágico",
                        sonido: true
                    },

                    rafaga: {
                        nombre: "🌪️ Ráfaga de aire",
                        sonido: true
                    }

                }
            },

            agua: {
                nombre: "🌊 Agua",

                opciones: {

                    agua: {
                        nombre: "💧 Agua mágica",
                        sonido: true
                    },

                    oleada: {
                        nombre: "🌊 Oleada",
                        sonido: true
                    }

                }
            },

            oscura: {
                nombre: "🌑 Magia oscura",

                opciones: {

                    energia_oscura: {
                        nombre: "🌑 Energía oscura",
                        sonido: true
                    },

                    maldicion: {
                        nombre: "☠️ Maldición",
                        sonido: true
                    },

                    invocacion: {
                        nombre: "👹 Invocación",
                        sonido: true
                    }

                }
            }

        }
    }

};

/* ==========================================
   NAVEGACIÓN DE EFECTOS
========================================== */

const botonesEfecto = document.querySelectorAll(".boton-efecto");

const submenuEfectos = document.getElementById("submenu-efectos");


function mostrarEfecto(categoria, opciones, rutaActual = []) {

    submenuEfectos.innerHTML = "";


    const contenedor = document.createElement("div");

    contenedor.className = "botones-submenu";


    /* ==========================================
       BOTÓN VOLVER
    ========================================== */

    if (rutaActual.length > 0) {

        const botonVolver = document.createElement("button");

        botonVolver.className = "boton-volver";

        botonVolver.textContent = "⬅️ Volver";


        botonVolver.addEventListener("click", () => {

            if (rutaActual.length === 1) {

                mostrarEfecto(
                    categoria,
                    efectos[categoria].opciones,
                    []
                );

            } else {

                let nivel = efectos[categoria].opciones;


                for (
                    let i = 0;
                    i < rutaActual.length - 1;
                    i++
                ) {

                    nivel = nivel[rutaActual[i]].opciones;

                }


                mostrarEfecto(
                    categoria,
                    nivel,
                    rutaActual.slice(0, -1)
                );

            }

        });


        contenedor.appendChild(botonVolver);

    }


    /* ==========================================
       CREAR BOTONES
    ========================================== */

    Object.entries(opciones).forEach(([clave, opcion]) => {

        const boton = document.createElement("button");

        boton.className = "boton-efecto";

        boton.textContent = opcion.nombre;


        boton.addEventListener("click", () => {


            /* ==========================================
               TIENE SUBMENÚ
            ========================================== */

            if (opcion.opciones) {

                mostrarEfecto(
                    categoria,
                    opcion.opciones,
                    [...rutaActual, clave]
                );

            }


            /* ==========================================
               ES UN EFECTO FINAL
            ========================================== */

            else if (opcion.sonido) {

                console.log(
                    "Efecto seleccionado:",
                    opcion.nombre
                );

            }

        });


        contenedor.appendChild(boton);

    });


    submenuEfectos.appendChild(contenedor);

}


/* ==========================================
   BOTONES PRINCIPALES
========================================== */

botonesEfecto.forEach(boton => {

    boton.addEventListener("click", () => {

        const categoria = boton.dataset.efecto;


        mostrarEfecto(
            categoria,
            efectos[categoria].opciones,
            []
        );

    });

});


// ==========================================
// ELEMENTOS
// ==========================================

const botonesAmbiente =
    document.querySelectorAll(".boton-ambiente");

const botonesSonido =
    document.querySelectorAll(".boton-sonido");

const botonesCapa =
    document.querySelectorAll(".boton-capa");

const submenus =
    document.querySelectorAll(".submenu");

const submenuAmbiente =
    document.getElementById("submenu-ambiente");

const submenuCapas =
    document.getElementById("submenu-capas");

const pararAmbiente =
    document.querySelector("#parar-ambiente");


// ==========================================
// SLIDERS
// ==========================================

const sliders = {

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

    ambiente: new Set(),

    clima: new Set(),

    naturaleza: new Set(),

    animales: new Set(),

    entorno: new Set(),

    combate: new Set(),

    magia: new Set()

};


// ==========================================
// AMBIENTE ACTUAL
// ==========================================

let sonidoActual = null;


// ==========================================
// OCULTAR SUBMENÚS
// ==========================================

submenus.forEach(function(menu) {

    menu.style.display = "none";

});


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
}


// ==========================================
// BOTÓN PARAR AMBIENTE
// ==========================================

if (pararAmbiente) {

    pararAmbiente.addEventListener(
        "click",
        function() {

            detenerAmbiente();

        }
    );

}

// ==========================================
// NAVEGACIÓN DE AMBIENTES
// ==========================================

botonesAmbiente.forEach(function(boton) {

    boton.addEventListener(
        "click",
        function() {

            const ambiente =
                boton.dataset.ambiente;

            const opciones =
                subambientes[ambiente];

            if (!opciones) {

                console.log(
                    "No existen subambientes para:",
                    ambiente
                );

                return;
            }

            submenuAmbiente.innerHTML = `

                <h3>${boton.textContent}</h3>

                <div class="botones-submenu">

                    ${opciones.map(function(opcion) {

                        return `
                            <button
                                class="boton-submenu"
                                data-ambiente="${ambiente}"
                                data-variante="${opcion}">
                                ${opcion}
                            </button>
                        `;

                    }).join("")}

                </div>

                <button
                    class="boton-volver"
                    id="volver-ambientes">
                    ← Volver
                </button>

            `;


            const botonesSubmenu =
                submenuAmbiente.querySelectorAll(
                    ".boton-submenu"
                );


            botonesSubmenu.forEach(
                function(botonSubmenu) {

                    botonSubmenu.addEventListener(
                        "click",
                        function() {

                            const ambiente =
                                botonSubmenu.dataset.ambiente;

                            const variante =
                                botonSubmenu.dataset.variante;

                            console.log(
                                "Subambiente seleccionado:",
                                ambiente,
                                variante
                            );

                            // Los sonidos se añadirán posteriormente.

                        }
                    );

                }
            );


            const botonVolver =
                document.getElementById(
                    "volver-ambientes"
                );


            if (botonVolver) {

                botonVolver.addEventListener(
                    "click",
                    function() {

                        submenuAmbiente.innerHTML = `
                            <p>Selecciona un ambiente</p>
                        `;

                    }
                );

            }

        }
    );

});


// ==========================================
// NAVEGACIÓN DE CAPAS
// ==========================================

function mostrarCapa(
    categoria,
    opciones,
    rutaActual
) {

    if (!submenuCapas) {
        return;
    }


    submenuCapas.innerHTML = `

        <h3>${rutaActual}</h3>

        <div class="botones-submenu">

            ${Object.keys(opciones).map(function(clave) {

                const opcion =
                    opciones[clave];

                return `
                    <button
                        class="boton-submenu boton-subcapa"
                        data-clave="${clave}">
                        ${opcion.nombre}
                    </button>
                `;

            }).join("")}

        </div>

        <button
            class="boton-volver"
            id="volver-capa">
            ← Volver
        </button>

    `;


    // ==========================================
    // BOTONES DEL SIGUIENTE NIVEL
    // ==========================================

    const botonesSubcapa =
        submenuCapas.querySelectorAll(
            ".boton-subcapa"
        );


    botonesSubcapa.forEach(
        function(boton) {

            boton.addEventListener(
                "click",
                function() {

                    const clave =
                        boton.dataset.clave;

                    const opcion =
                        opciones[clave];


                    // ==========================================
                    // TIENE MÁS SUBCATEGORÍAS
                    // ==========================================

                    if (opcion.opciones) {

                        mostrarCapa(
                            categoria,
                            opcion.opciones,
                            rutaActual +
                            " → " +
                            opcion.nombre
                        );

                        return;
                    }


                    // ==========================================
                    // SONIDO FINAL
                    // ==========================================

                    if (opcion.sonido) {

                        console.log(
                            "Sonido seleccionado:",
                            categoria,
                            opcion.nombre
                        );

                        // Los sonidos se añadirán posteriormente.

                    }

                }
            );

        }
    );


    // ==========================================
    // BOTÓN VOLVER
    // ==========================================

    const botonVolver =
        document.getElementById(
            "volver-capa"
        );


    if (botonVolver) {

        botonVolver.addEventListener(
            "click",
            function() {

                mostrarMenuPrincipalCapas();

            }
        );

    }

}


// ==========================================
// MENÚ PRINCIPAL DE CAPAS
// ==========================================

function mostrarMenuPrincipalCapas() {

    if (!submenuCapas) {
        return;
    }

    submenuCapas.innerHTML = `
        <p>Selecciona una capa</p>
    `;

}


// ==========================================
// BOTONES PRINCIPALES DE CAPAS
// ==========================================

botonesCapa.forEach(function(boton) {

    boton.addEventListener(
        "click",
        function() {

            const categoria =
                boton.dataset.capa;

            const capa =
                capas[categoria];


            if (!capa) {

                console.log(
                    "No existe la capa:",
                    categoria
                );

                return;
            }


            mostrarCapa(
                categoria,
                capa.opciones,
                capa.nombre
            );

        }
    );

});

// ==========================================
// BOTONES DE EFECTOS
// ==========================================

botonesSonido.forEach(function(boton) {

    boton.addEventListener(
        "click",
        function() {

            const nombreSonido =
                boton.dataset.sonido;


            if (!nombreSonido) {
                return;
            }


            const categoria =
                boton.dataset.categoria ||
                "entorno";


            const ruta =
                "sounds/" +
                nombreSonido +
                ".mp3";


            console.log(
                "Reproduciendo efecto:",
                boton.textContent,
                "| Categoría:",
                categoria
            );


            const sonido =
                new Audio(ruta);


            registrarSonido(
                sonido,
                categoria
            );


            sonido.play()
                .catch(function(error) {

                    console.log(
                        "No se pudo reproducir el efecto:",
                        error
                    );


                    sonidosActivos[categoria]
                        .delete(sonido);

                });

        }
    );

});


// ==========================================
// FUNCIÓN FREESOUND
// ==========================================
// Se mantiene preparada para cuando
// añadamos los sonidos de las capas.
//
// Por ahora NO se ejecuta al pulsar
// las categorías de Capas.
// ==========================================

function buscarSonidoFreesound(
    busqueda,
    categoria
) {

    if (!busqueda) {

        console.log(
            "No se ha indicado ninguna búsqueda."
        );

        return;
    }


    console.log(
        "Buscando en Freesound:",
        busqueda
    );


    fetch(
        "https://freesound.org/apiv2/search/?query="
        + encodeURIComponent(busqueda)
        + "&fields=id,name,previews,tags"
        + "&page_size=5",
        {

            headers: {

                "Authorization":
                    "Token " +
                    FREESOUND_API_KEY

            }

        }
    )

    .then(function(respuesta) {

        return respuesta.json();

    })

    .then(function(datos) {

        console.log(
            "Resultados encontrados:",
            datos.results.length
        );


        if (
            !datos.results ||
            datos.results.length === 0
        ) {

            console.log(
                "No se encontraron sonidos."
            );

            return;
        }


        // ==========================================
        // ELEGIR SONIDO ALEATORIO
        // ==========================================

        const indice =
            Math.floor(
                Math.random() *
                datos.results.length
            );


        const resultado =
            datos.results[indice];


        console.log(
            "Sonido elegido:",
            resultado.name
        );


        // ==========================================
        // CREAR AUDIO
        // ==========================================

        const sonido =
            new Audio(
                resultado.previews[
                    "preview-hq-mp3"
                ]
            );


        sonido.loop = true;


        // ==========================================
        // REGISTRAR SONIDO
        // ==========================================

        registrarSonido(
            sonido,
            categoria
        );


        // ==========================================
        // REPRODUCIR
        // ==========================================

        sonido.play()
            .catch(function(error) {

                console.log(
                    "No se pudo reproducir la capa:",
                    error
                );

            });

    })

    .catch(function(error) {

        console.log(
            "Error al consultar Freesound:",
            error
        );

    });

}


// ==========================================
// FIN DEL SCRIPT
// ==========================================

console.log(
    "Soundboard cargado correctamente."
);