console.log("El Soundboard está funcionando");


// ==========================================
// BIBLIOTECAS DE MÚSICA (archivos locales)
// ==========================================

// Cada clave coincide con el data-ambiente del HTML.
// Para que un ambiente suene, basta con añadirlo aquí.
const bibliotecas = {

    bosque: {
        nombre: "Bosque",
        carpeta: "sounds/bosque/",
        archivos: [
            "bosque-01.wav",
            "bosque-02.wav",
            "bosque-03.wav",
            "bosque-04.wav",
            "bosque-05.wav"
        ]
    },

    taberna: {
        nombre: "Taberna",
        carpeta: "sounds/taberna/",
        archivos: [
            "taberna-01.mp3",
            "taberna-02.mp3",
            "taberna-03.mp3"
        ]
    }

};


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
// Cada sonido final tiene "busqueda": lo que se
// busca en Freesound (en inglés, da más resultados).

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
                        nombre: "Lluvia ligera",
                        busqueda: "light rain"
                    },

                    normal: {
                        nombre: "Lluvia normal",
                        busqueda: "rain"
                    },

                    intensa: {
                        nombre: "Lluvia intensa",
                        busqueda: "heavy rain"
                    }

                }

            },


            tormenta: {

                nombre: "Tormenta",

                opciones: {

                    truenos: {
                        nombre: "Truenos",
                        busqueda: "thunder"
                    },

                    ligera: {
                        nombre: "Tormenta ligera",
                        busqueda: "distant thunderstorm"
                    },

                    intensa: {
                        nombre: "Tormenta intensa",
                        busqueda: "heavy thunderstorm"
                    }

                }

            },


            viento: {

                nombre: "Viento",

                opciones: {

                    brisa: {
                        nombre: "Brisa",
                        busqueda: "gentle wind"
                    },

                    normal: {
                        nombre: "Viento normal",
                        busqueda: "wind"
                    },

                    fuerte: {
                        nombre: "Viento fuerte",
                        busqueda: "strong wind"
                    }

                }

            },


            nieve: {

                nombre: "Nieve",

                opciones: {

                    ligera: {
                        nombre: "Nevada ligera",
                        busqueda: "snow ambience"
                    },

                    normal: {
                        nombre: "Nevada normal",
                        busqueda: "winter wind"
                    },

                    ventisca: {
                        nombre: "Ventisca",
                        busqueda: "blizzard"
                    }

                }

            },


            niebla: {

                nombre: "Niebla",

                opciones: {

                    ligera: {
                        nombre: "Niebla ligera",
                        busqueda: "eerie ambience"
                    },

                    densa: {
                        nombre: "Niebla densa",
                        busqueda: "dark ambience"
                    },

                    sobrenatural: {
                        nombre: "Niebla sobrenatural",
                        busqueda: "ghostly ambience"
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
                        nombre: "Hojas y vegetación",
                        busqueda: "leaves rustling"
                    },

                    vientoArboles: {
                        nombre: "Viento entre árboles",
                        busqueda: "wind trees"
                    },

                    naturaleza: {
                        nombre: "Naturaleza",
                        busqueda: "forest ambience"
                    }

                }

            },


            agua: {

                nombre: "Agua",

                opciones: {

                    goteo: {
                        nombre: "Goteo",
                        busqueda: "water drip cave"
                    },

                    rio: {
                        nombre: "Río",
                        busqueda: "river"
                    },

                    cascada: {
                        nombre: "Cascada",
                        busqueda: "waterfall"
                    },

                    mar: {
                        nombre: "Mar",
                        busqueda: "ocean waves"
                    }

                }

            },


            rocas: {

                nombre: "Rocas",

                opciones: {

                    piedras: {
                        nombre: "Piedras",
                        busqueda: "rocks stones"
                    },

                    derrumbe: {
                        nombre: "Derrumbe",
                        busqueda: "rockfall"
                    },

                    rocasCayendo: {
                        nombre: "Rocas cayendo",
                        busqueda: "falling rocks"
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
                        nombre: "Lobo",
                        busqueda: "wolf howl"
                    },

                    manada: {
                        nombre: "Manada",
                        busqueda: "wolves howling"
                    }

                }

            },


            aves: {

                nombre: "Aves",

                opciones: {

                    pajaros: {
                        nombre: "Pájaros",
                        busqueda: "birds"
                    },

                    aveRapaz: {
                        nombre: "Ave rapaz",
                        busqueda: "hawk screech"
                    }

                }

            },


            caballos: {

                nombre: "Caballos",

                opciones: {

                    caballo: {
                        nombre: "Caballo",
                        busqueda: "horse"
                    },

                    caballos: {
                        nombre: "Caballos",
                        busqueda: "horses galloping"
                    }

                }

            },


            animalesSalvajes: {

                nombre: "Animales salvajes",

                opciones: {

                    oso: {
                        nombre: "Oso",
                        busqueda: "grizzly growl"
                    },

                    jabali: {
                        nombre: "Jabalí",
                        busqueda: "wild boar"
                    },

                    ciervo: {
                        nombre: "Ciervo",
                        busqueda: "deer"
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
                        nombre: "Hoguera",
                        busqueda: "campfire crackling"
                    },

                    fuegoPequeno: {
                        nombre: "Fuego pequeño",
                        busqueda: "fireplace"
                    },

                    fuegoGrande: {
                        nombre: "Fuego grande",
                        busqueda: "large fire burning"
                    }

                }

            },


            puertas: {

                nombre: "Puertas",

                opciones: {

                    madera: {
                        nombre: "Puerta de madera",
                        busqueda: "wooden door"
                    },

                    pesada: {
                        nombre: "Puerta pesada",
                        busqueda: "heavy door"
                    },

                    metalica: {
                        nombre: "Puerta metálica",
                        busqueda: "metal door"
                    }

                }

            },


            campanas: {

                nombre: "Campanas",

                opciones: {

                    pequena: {
                        nombre: "Campana pequeña",
                        busqueda: "small bell"
                    },

                    grande: {
                        nombre: "Campana grande",
                        busqueda: "church bell"
                    }

                }

            },


            cadenas: {

                nombre: "Cadenas",

                opciones: {

                    moviendose: {
                        nombre: "Cadenas moviéndose",
                        busqueda: "chains"
                    },

                    pesadas: {
                        nombre: "Cadenas pesadas",
                        busqueda: "chains dragging"
                    }

                }

            },


            multitud: {

                nombre: "Multitud",

                opciones: {

                    ciudad: {
                        nombre: "Multitud ciudad",
                        busqueda: "crowd market"
                    },

                    taberna: {
                        nombre: "Multitud taberna",
                        busqueda: "tavern crowd"
                    },

                    gritando: {
                        nombre: "Multitud gritando",
                        busqueda: "crowd shouting"
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
                        nombre: "Espadazo",
                        busqueda: "sword swing"
                    },

                    corte: {
                        nombre: "Corte",
                        busqueda: "sword slash"
                    },

                    estocada: {
                        nombre: "Estocada",
                        busqueda: "sword stab"
                    },

                    choque: {
                        nombre: "Choque de espadas",
                        busqueda: "sword clash"
                    }

                }
            },

            mazas: {
                nombre: "Mazas y martillos",

                opciones: {

                    mazazo: {
                        nombre: "Mazazo",
                        busqueda: "blunt hit"
                    },

                    golpe_martillo: {
                        nombre: "Golpe de martillo",
                        busqueda: "hammer hit"
                    },

                    golpe_pesado: {
                        nombre: "Golpe pesado",
                        busqueda: "heavy impact"
                    }

                }
            },

            escudos: {
                nombre: "Escudos",

                opciones: {

                    golpe_escudo: {
                        nombre: "Golpe al escudo",
                        busqueda: "shield hit"
                    },

                    bloqueo: {
                        nombre: "Bloqueo",
                        busqueda: "shield block"
                    },

                    escudo_pesado: {
                        nombre: "Golpe fuerte al escudo",
                        busqueda: "shield impact"
                    }

                }
            },

            arcos: {
                nombre: "Arcos y ballestas",

                opciones: {

                    flechazo: {
                        nombre: "Flechazo",
                        busqueda: "arrow impact"
                    },

                    disparo_arco: {
                        nombre: "Disparo de arco",
                        busqueda: "bow shot"
                    },

                    ballesta: {
                        nombre: "Disparo de ballesta",
                        busqueda: "crossbow"
                    },

                    cuerda: {
                        nombre: "Tensar arco",
                        busqueda: "bow draw"
                    }

                }
            },

            otras_armas: {
                nombre: "Otras armas",

                opciones: {

                    hachazo: {
                        nombre: "Hachazo",
                        busqueda: "axe hit"
                    },

                    lanza: {
                        nombre: "Golpe de lanza",
                        busqueda: "spear"
                    },

                    daga: {
                        nombre: "Golpe de daga",
                        busqueda: "knife stab"
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
                        nombre: "Fuego pequeño",
                        busqueda: "fire spell"
                    },

                    fuego_grande: {
                        nombre: "Fuego intenso",
                        busqueda: "fireball"
                    },

                    explosion: {
                        nombre: "Explosión",
                        busqueda: "explosion"
                    }

                }
            },

            hielo: {
                nombre: "Hielo",

                opciones: {

                    hielo: {
                        nombre: "Hielo",
                        busqueda: "ice spell"
                    },

                    congelacion: {
                        nombre: "Congelación",
                        busqueda: "ice freeze"
                    },

                    cristal: {
                        nombre: "Cristal mágico",
                        busqueda: "magic chime"
                    }

                }
            },

            electricidad: {
                nombre: "Electricidad",

                opciones: {

                    chispa: {
                        nombre: "Chispa",
                        busqueda: "electric spark"
                    },

                    rayo: {
                        nombre: "Rayo",
                        busqueda: "lightning crack"
                    },

                    trueno_magico: {
                        nombre: "Trueno mágico",
                        busqueda: "lightning spell"
                    }

                }
            },

            aire: {
                nombre: "Aire",

                opciones: {

                    viento_magico: {
                        nombre: "Viento mágico",
                        busqueda: "wind spell"
                    },

                    rafaga: {
                        nombre: "Ráfaga de aire",
                        busqueda: "whoosh"
                    }

                }
            },

            agua: {
                nombre: "Agua",

                opciones: {

                    agua: {
                        nombre: "Agua mágica",
                        busqueda: "water spell"
                    },

                    oleada: {
                        nombre: "Oleada",
                        busqueda: "water splash"
                    }

                }
            },

            oscura: {
                nombre: "Magia oscura",

                opciones: {

                    energia_oscura: {
                        nombre: "Energía oscura",
                        busqueda: "dark magic"
                    },

                    maldicion: {
                        nombre: "Maldición",
                        busqueda: "curse spell"
                    },

                    invocacion: {
                        nombre: "Invocación",
                        busqueda: "summon spell"
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

        // Los sonidos finales llevan un botón para elegir su sonido
        if (opcion.opciones || opcion.idPropio) {

            contenedor.appendChild(boton);

        } else {

            contenedor.appendChild(
                crearCeldaConSelector(
                    tipo,
                    rutaOpcion,
                    opcion,
                    boton
                )
            );

        }

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


// ==========================================
// BUSCAR EN FREESOUND (con resultados guardados)
// ==========================================

// Duración según el tipo: las capas son sonidos largos para
// poner en bucle y los efectos son cortos y suenan una vez.
const duraciones = {
    capa: "duration:[30 TO 600]",
    efecto: "duration:[0 TO 10]"
};

// Etiquetas que casi siempre son música o sonidos sintéticos
// y no encajan en una partida de rol.
const etiquetasExcluidas =
    "-tag:music -tag:synth -tag:electronic -tag:electro -tag:beat -tag:vocal";

// Con "-tag:" delante, Freesound deja fuera lo que lleve esa etiqueta.
const calidadMinima =
    "avg_rating:[3.5 TO *] num_ratings:[3 TO *]";


// Filtros de más a menos exigentes. Se prueba el primero y, si no
// da ningún resultado, el siguiente, para que un botón nunca se
// quede sin sonido.
function filtrosPara(busqueda, tipo) {

    // Cada palabra de la búsqueda tiene que estar en el nombre
    // o en las etiquetas del sonido: "wolf howl" ya no devuelve
    // casas encantadas ni perros de trineo.
    // Se quitan los símbolos para que no rompan el filtro de Freesound
    const palabras =
        busqueda
            .replace(/[^\p{L}\p{N}\s]/gu, " ")
            .split(/\s+/)
            .filter(Boolean)
            .map(function(palabra) {

                return "(tag:" + palabra + " OR name:" + palabra + ")";

            }).join(" ");

    const duracion =
        duraciones[tipo];

    return [

        // 1. Bien valorado, sin música y con las palabras exactas
        [duracion, calidadMinima, palabras, etiquetasExcluidas]
            .join(" "),

        // 2. Bien valorado y sin música, con cualquier coincidencia
        [duracion, calidadMinima, etiquetasExcluidas].join(" "),

        // 3. Solo la duración
        duracion

    ];

}


// Resultados de cada búsqueda ya hecha (clave: tipo + búsqueda).
// Así solo se pide a Freesound la primera vez.
const resultadosGuardados = {};


function pedirAFreesound(busqueda, filtro, cantidad) {

    return fetch(
        "https://freesound.org/apiv2/search/?query="
        + encodeURIComponent(busqueda)
        + "&fields=id,name,previews,duration,avg_rating"
        + "&filter="
        + encodeURIComponent(filtro)
        + "&page_size=" + cantidad,
        {
            headers: {
                "Authorization":
                    "Token " + FREESOUND_API_KEY
            }
        }
    )

    .then(function(respuesta) {

        // ok es false si Freesound responde con error
        // (clave mal, cuota agotada, servidor caído...)
        if (!respuesta.ok) {

            throw new Error(
                "Freesound respondió con el error " +
                respuesta.status
            );

        }

        return respuesta.json();

    })

    .then(function(datos) {

        return datos.results;

    });

}


// Prueba cada filtro en orden hasta que uno dé resultados
function buscarConRespaldo(busqueda, tipo, cantidad) {

    const filtros =
        filtrosPara(busqueda, tipo);

    function probar(posicion) {

        return pedirAFreesound(
            busqueda,
            filtros[posicion],
            cantidad
        )

        .then(function(resultados) {

            if (
                resultados.length > 0 ||
                posicion === filtros.length - 1
            ) {
                return resultados;
            }

            return probar(posicion + 1);

        });

    }

    return probar(0);

}


function buscarEnFreesound(busqueda, tipo) {

    const clave =
        tipo + ":" + busqueda;


    // Ya buscado antes: se devuelve lo guardado sin pedir nada.
    // Promise.resolve crea una promesa ya cumplida, para que
    // quien llame pueda usar .then() igual que con fetch.
    if (resultadosGuardados[clave]) {

        return Promise.resolve(
            resultadosGuardados[clave]
        );

    }


    // Sin config.js la clave no existe
    if (typeof FREESOUND_API_KEY === "undefined") {

        return Promise.reject(
            new Error("falta config.js con la clave")
        );

    }


    return buscarConRespaldo(busqueda, tipo, 10)

    .then(function(resultados) {

        resultadosGuardados[clave] =
            resultados;

        return resultados;

    });

}


// Un sonido subido por el usuario o fijado en el selector se usa
// tal cual, con la misma forma que devuelve Freesound.
// Si no, se busca en Freesound.
function obtenerResultados(opcion, tipo) {

    // Subido por el usuario ("url") o fijado en el selector ("elegido")
    const fijado =
        opcion.url
            ? { nombre: opcion.nombre, url: opcion.url }
            : opcion.elegido;

    if (fijado) {

        return Promise.resolve([{
            name: fijado.nombre,
            previews: { "preview-hq-mp3": fijado.url }
        }]);

    }

    return buscarEnFreesound(opcion.busqueda, tipo);

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


    console.log(
        "Buscando en Freesound:",
        opcion.busqueda
    );


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
                "No se encontraron sonidos para " +
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
            "Error al consultar Freesound:",
            error
        );

        mostrarAviso(
            "No se pudo conectar con Freesound (" +
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
                "No se encontraron sonidos para " +
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
            "Error al consultar Freesound:",
            error
        );

        mostrarAviso(
            "No se pudo conectar con Freesound (" +
            error.message + ")"
        );

    });

}


// ==========================================
// REPRODUCTOR DE MÚSICA
// ==========================================

const playlists = {

    exploracion: {
        nombre: "Exploración",
        canciones: [
            { titulo: "Bosque", ruta: "sounds/bosque.mp3" }
        ]
    },

    combate:   { nombre: "Combate",   canciones: [] },
    mazmorras: { nombre: "Mazmorras", canciones: [] },

    tabernas: {
        nombre: "Tabernas",
        canciones: [
            { titulo: "Taberna 1", ruta: "sounds/taberna/taberna-01.mp3" },
            { titulo: "Taberna 2", ruta: "sounds/taberna/taberna-02.mp3" },
            { titulo: "Taberna 3", ruta: "sounds/taberna/taberna-03.mp3" }
        ]
    },

    terror:   { nombre: "Terror",   canciones: [] },
    fantasia: { nombre: "Fantasía", canciones: [] },
    jefes:    { nombre: "Jefes",    canciones: [] }

};

const musica = new Audio();

let playlistActual = null;
let indiceActual = -1;

const tituloCancion =
    document.getElementById("cancion-actual");

const barraProgreso =
    document.getElementById("progreso-musica");

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


function actualizarBotonPlay() {

    botonPlay.textContent =
        musica.paused ? "Reproducir" : "Pausar";

    botonPlay.setAttribute(
        "aria-label",
        musica.paused ? "Reproducir" : "Pausar"
    );

}


function reproducirCancion(indice) {

    if (!playlistActual) {
        return;
    }

    const canciones =
        playlists[playlistActual].canciones;

    if (canciones.length === 0) {
        return;
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

    if (playlist.canciones.length === 0) {

        const aviso = document.createElement("p");

        aviso.textContent =
            "Esta playlist aún no tiene canciones";

        listaPlaylist.appendChild(aviso);

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

        });

    });


botonPlay.addEventListener("click", function() {

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

    reproducirCancion(indiceActual - 1);

});

botonSiguiente.addEventListener("click", function() {

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

    }

});

barraProgreso.addEventListener("input", function() {

    if (musica.duration) {

        musica.currentTime =
            (barraProgreso.value / 100) * musica.duration;

    }

});

sliderMusica.addEventListener("input", function() {

    musica.volume = sliderMusica.value / 100;

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


    // 4. Música
    musica.pause();


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
// SELECTOR DE SONIDO (elegir el sonido de un botón)
// ==========================================
// Cada botón de capa o efecto busca en Freesound y elige uno al
// azar. Con "Cambiar" se ven los resultados, se escuchan y se
// fija el que se quiera: ese botón sonará siempre igual.
// La elección se guarda en este navegador (localStorage).

const CLAVE_ELECCIONES = "dnd-soundboard-elecciones";

const selector =
    document.getElementById("selector-sonido");

const selectorTitulo =
    document.getElementById("selector-titulo");

const selectorForm =
    document.getElementById("selector-form");

const selectorBusqueda =
    document.getElementById("selector-busqueda");

const selectorEstado =
    document.getElementById("selector-estado");

const selectorLista =
    document.getElementById("selector-lista");

const selectorAleatorio =
    document.getElementById("selector-aleatorio");

const selectorCerrar =
    document.getElementById("selector-cerrar");

// Audio de la vista previa (uno solo: al escuchar otro, se corta)
const vistaPrevia = new Audio();

vistaPrevia.volume = 0.7;

// Botón de capa o efecto que se está editando
let selectorActual = null;

// Para ignorar búsquedas antiguas si se lanza otra enseguida
let numeroBusquedaSelector = 0;


// ==========================================
// ELECCIONES GUARDADAS
// ==========================================

function leerElecciones() {

    try {

        return JSON.parse(
            localStorage.getItem(CLAVE_ELECCIONES)
        ) || {};

    } catch (error) {

        return {};

    }

}


function guardarElecciones(elecciones) {

    try {

        localStorage.setItem(
            CLAVE_ELECCIONES,
            JSON.stringify(elecciones)
        );

    } catch (error) {

        mostrarAviso(
            "No se pudo guardar la elección en el navegador"
        );

    }

}


// Marca (o desmarca) el botón según tenga un sonido fijado
function marcarFijado(boton, opcion) {

    boton.classList.toggle("fijado", !!opcion.elegido);

    boton.title =
        opcion.elegido
            ? "Sonido fijado: " + opcion.elegido.nombre
            : "";

}


function fijarSonido(selectorInfo, resultado) {

    const opcion = selectorInfo.opcion;

    opcion.elegido = {
        nombre: resultado.name,
        url: resultado.previews["preview-hq-mp3"]
    };

    const elecciones = leerElecciones();

    elecciones[selectorInfo.ruta] = opcion.elegido;

    guardarElecciones(elecciones);

    marcarFijado(selectorInfo.boton, opcion);

}


function quitarFijado(selectorInfo) {

    delete selectorInfo.opcion.elegido;

    const elecciones = leerElecciones();

    delete elecciones[selectorInfo.ruta];

    guardarElecciones(elecciones);

    marcarFijado(selectorInfo.boton, selectorInfo.opcion);

}


// Al cargar la página: devolver cada elección a su botón
function aplicarEleccionesGuardadas() {

    const elecciones = leerElecciones();

    Object.keys(elecciones).forEach(function(ruta) {

        const partes = ruta.split("/");

        try {

            const opcion =
                obtenerNivel(datosDe(partes[0]), partes.slice(1));

            if (opcion && !opcion.opciones) {

                opcion.elegido = elecciones[ruta];

            }

        } catch (error) {

            // El botón ya no existe: se ignora esa elección
            console.log("Elección ignorada:", ruta);

        }

    });

}


// ==========================================
// BOTÓN "CAMBIAR" JUNTO A CADA SONIDO
// ==========================================

function crearCeldaConSelector(tipo, rutaOpcion, opcion, boton) {

    const celda = document.createElement("div");

    celda.className = "celda";

    const cambiar = document.createElement("button");

    cambiar.type = "button";

    cambiar.className = "boton-cambiar";

    cambiar.textContent = "Cambiar";

    cambiar.title = "Elegir qué sonido usa este botón";

    cambiar.addEventListener("click", function() {

        abrirSelector({
            tipo: tipo,
            ruta: tipo + "/" + rutaOpcion.join("/"),
            opcion: opcion,
            boton: boton
        });

    });

    marcarFijado(boton, opcion);

    celda.appendChild(boton);

    celda.appendChild(cambiar);

    return celda;

}


// ==========================================
// VENTANA DEL SELECTOR
// ==========================================

function abrirSelector(info) {

    selectorActual = info;

    selectorTitulo.textContent = info.opcion.nombre;

    selectorBusqueda.value = info.opcion.busqueda;

    selectorAleatorio.hidden = !info.opcion.elegido;

    selector.showModal();

    buscarEnSelector();

}


function buscarEnSelector() {

    const texto = selectorBusqueda.value.trim();

    if (!texto || !selectorActual) {
        return;
    }

    const numero = ++numeroBusquedaSelector;

    selectorLista.innerHTML = "";

    selectorEstado.textContent = "Buscando...";

    if (typeof FREESOUND_API_KEY === "undefined") {

        selectorEstado.textContent =
            "Falta config.js con la clave de Freesound";

        return;
    }


    buscarConRespaldo(texto, selectorActual.tipo, 15)

    .then(function(resultados) {

        // Se lanzó otra búsqueda o se cerró la ventana
        if (numero !== numeroBusquedaSelector) {
            return;
        }

        if (resultados.length === 0) {

            selectorEstado.textContent =
                "No hay resultados. Prueba con otras palabras (en inglés)";

            return;
        }

        selectorEstado.textContent =
            resultados.length + " resultados";

        resultados.forEach(mostrarResultadoSelector);

    })

    .catch(function(error) {

        if (numero !== numeroBusquedaSelector) {
            return;
        }

        selectorEstado.textContent =
            "No se pudo conectar con Freesound (" +
            error.message + ")";

    });

}


function mostrarResultadoSelector(resultado) {

    const url = resultado.previews["preview-hq-mp3"];

    const elegido =
        selectorActual.opcion.elegido &&
        selectorActual.opcion.elegido.url === url;


    const fila = document.createElement("li");

    fila.className = "fila-resultado";


    const texto = document.createElement("span");

    const nombre = document.createElement("strong");

    nombre.textContent = resultado.name;

    const datos = document.createElement("small");

    datos.textContent =
        Math.round(resultado.duration) + " s" +
        " · valoración " +
        (resultado.avg_rating || 0).toFixed(1);

    texto.appendChild(nombre);

    texto.appendChild(datos);


    const escuchar = document.createElement("button");

    escuchar.type = "button";

    escuchar.className = "boton-escuchar";

    escuchar.textContent = "Escuchar";

    escuchar.addEventListener("click", function() {

        escucharVistaPrevia(url, escuchar);

    });


    const usar = document.createElement("button");

    usar.type = "button";

    usar.className = "boton-usar";

    usar.textContent = elegido ? "Elegido" : "Usar este";

    usar.disabled = elegido;

    usar.addEventListener("click", function() {

        fijarSonido(selectorActual, resultado);

        mostrarAviso(
            "Sonido fijado en " + selectorActual.opcion.nombre
        );

        selector.close();

    });


    fila.appendChild(texto);

    fila.appendChild(escuchar);

    fila.appendChild(usar);

    selectorLista.appendChild(fila);

}


// Escuchar / parar la vista previa de un resultado
function escucharVistaPrevia(url, boton) {

    const sonabaEste =
        !vistaPrevia.paused && vistaPrevia.src === url;

    restablecerBotonesEscuchar();

    if (sonabaEste) {

        vistaPrevia.pause();

        return;
    }

    vistaPrevia.src = url;

    vistaPrevia.play().then(function() {

        boton.textContent = "Parar";

    }).catch(function(error) {

        if (error.name !== "AbortError") {

            mostrarAviso("No se pudo reproducir la vista previa");

        }

    });

}


function restablecerBotonesEscuchar() {

    selectorLista
        .querySelectorAll(".boton-escuchar")
        .forEach(function(boton) {

            boton.textContent = "Escuchar";

        });

}


vistaPrevia.addEventListener("ended", restablecerBotonesEscuchar);


selectorForm.addEventListener("submit", function(evento) {

    evento.preventDefault();

    buscarEnSelector();

});


selectorAleatorio.addEventListener("click", function() {

    quitarFijado(selectorActual);

    mostrarAviso(
        selectorActual.opcion.nombre + ": vuelve a elegir al azar"
    );

    selector.close();

});


selectorCerrar.addEventListener("click", function() {

    selector.close();

});


// Se cierra con el botón, con Escape o al elegir:
// siempre se corta la vista previa
selector.addEventListener("close", function() {

    vistaPrevia.pause();

    numeroBusquedaSelector++;

    selectorActual = null;

});


// "Parar todo" también corta la vista previa
botonPararTodo.addEventListener("click", function() {

    vistaPrevia.pause();

    restablecerBotonesEscuchar();

});


aplicarEleccionesGuardadas();


// ==========================================
// FIN DEL SCRIPT
// ==========================================

console.log(
    "Soundboard cargado correctamente."
);
