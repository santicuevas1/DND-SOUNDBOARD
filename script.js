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
                        busqueda: "breeze"
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
                        busqueda: "hawk"
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
                        busqueda: "bear growl"
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
                        busqueda: "campfire"
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
                        busqueda: "heavy chains"
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
                        busqueda: "magic crystal"
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
                        busqueda: "lightning strike"
                    },

                    trueno_magico: {
                        nombre: "Trueno mágico",
                        busqueda: "thunder spell"
                    }

                }
            },

            aire: {
                nombre: "Aire",

                opciones: {

                    viento_magico: {
                        nombre: "Viento mágico",
                        busqueda: "magic wind"
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
                        busqueda: "water magic"
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


// ==========================================
// BUSCAR EN FREESOUND (con resultados guardados)
// ==========================================

// Para cada tipo hay dos filtros: primero se prueba el estricto
// (valoración 4 o más y licencia CC0) y, si no hay nada,
// el relajado (solo la duración).
const filtrosFreesound = {

    // Capas: sonidos largos para poner en bucle
    capa: [
        encodeURIComponent(
            "duration:[30 TO 600] avg_rating:[4 TO *] license:\"Creative Commons 0\""
        ),
        encodeURIComponent(
            "duration:[30 TO 600]"
        )
    ],

    // Efectos: sonidos cortos que suenan una vez
    efecto: [
        encodeURIComponent(
            "duration:[0 TO 10] avg_rating:[4 TO *] license:\"Creative Commons 0\""
        ),
        encodeURIComponent(
            "duration:[0 TO 10]"
        )
    ]

};


// Resultados de cada búsqueda ya hecha (clave: tipo + búsqueda).
// Así solo se pide a Freesound la primera vez.
const resultadosGuardados = {};


function pedirAFreesound(busqueda, filtro) {

    return fetch(
        "https://freesound.org/apiv2/search/?query="
        + encodeURIComponent(busqueda)
        + "&fields=id,name,previews"
        + "&filter="
        + filtro
        + "&page_size=5",
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


    const filtros =
        filtrosFreesound[tipo];

    return pedirAFreesound(busqueda, filtros[0])

    .then(function(resultados) {

        if (resultados.length > 0) {
            return resultados;
        }

        // Nada con el filtro estricto: probar el relajado
        return pedirAFreesound(busqueda, filtros[1]);

    })

    .then(function(resultados) {

        resultadosGuardados[clave] =
            resultados;

        return resultados;

    });

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


    buscarEnFreesound(opcion.busqueda, "capa")

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


    buscarEnFreesound(opcion.busqueda, "efecto")

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
// FIN DEL SCRIPT
// ==========================================

console.log(
    "Soundboard cargado correctamente."
);
