// ==========================================
// SONIDOS INTEGRADOS
// ==========================================
// Aquí se asigna un sonido de YouTube a un botón. Solo suena el
// audio; no se ve ningún vídeo ni sale ningún enlace.
//
// Cada entrada es "ambiente|<ambiente>|<botón>": una lista de
// enlaces. Si hay varios, suena uno al azar.
//   "ambiente|bosque|Tranquilo": ["https://youtu.be/xxxxxxxxxxx"]

const sonidosIntegrados = {

    "ambiente|bosque|Tranquilo": [
        "https://www.youtube.com/watch?v=6Em9tLXbhfo"
    ]

};


// Direcciones listas para reproducir ("youtube:ID") de un botón
function sonidosIntegradosDe(clave) {

    return (sonidosIntegrados[clave] || [])

        .map(idDeYouTube)

        .filter(Boolean)

        .map(function(id) {

            return PREFIJO_YOUTUBE + id;

        });

}
