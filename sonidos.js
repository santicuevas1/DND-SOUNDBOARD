// ==========================================
// SONIDOS INTEGRADOS
// ==========================================
// Aquí se asigna un sonido de YouTube a un botón. Solo suena el
// audio; no se ve ningún vídeo ni sale ningún enlace.
//
// Cada entrada es un botón y una lista de enlaces entre corchetes.
// Si hay varios, suena uno al azar; si está vacía ([]), el botón
// avisa de que aún no tiene sonido.
//   "efecto|combate|espadas|espadazo": ["https://youtu.be/xxxxxxxxxxx"]
// También valen archivos propios: ["sounds/efectos/espadas/golpe1.mp3"]

const sonidosIntegrados = {
    // ---------- AMBIENTES ----------

    // Bosque
    "ambiente|bosque|Tranquilo": [
        "https://www.youtube.com/watch?v=6Em9tLXbhfo"
    ],   // Tranquilo
    "ambiente|bosque|Misterioso": [
        "https://www.youtube.com/watch?v=5Jzp5H4mQVE"
    ],   // Misterioso
    "ambiente|bosque|Oscuro": [
        "https://www.youtube.com/watch?v=7ElGv7zMqeY"
    ],   // Oscuro
    "ambiente|bosque|Peligroso": [
        "https://www.youtube.com/watch?v=LEs2J01gZX8"
    ],   // Peligroso

    // Taberna
    "ambiente|taberna|Alegre": [
        "https://www.youtube.com/watch?v=FM3Ep3yka44"
    ],   // Alegre
    "ambiente|taberna|Animada": [
        "https://www.youtube.com/watch?v=_P2O9ZXpKD8"
    ],   // Animada
    "ambiente|taberna|Triste": [
        "https://www.youtube.com/watch?v=9ZY6DymwsW8"
    ],   // Triste
    "ambiente|taberna|Pelea": [
        "https://www.youtube.com/watch?v=c45PSh6NeI4"
    ],   // Pelea

    // Mazmorra
    "ambiente|mazmorra|Oscura": [
        "https://www.youtube.com/watch?v=tzh8jTkL_To"
    ],   // Oscura
    "ambiente|mazmorra|Misteriosa": [
        "https://www.youtube.com/watch?v=VE-sz2EdeCA"
    ],   // Misteriosa
    "ambiente|mazmorra|Peligrosa": [
        "https://www.youtube.com/watch?v=morqY2DkGuk"
    ],   // Peligrosa
    "ambiente|mazmorra|Terrorífica": [
        "https://www.youtube.com/watch?v=CDWtH8eHeEU"
    ],   // Terrorífica

    // Ciudad
    "ambiente|ciudad|Día": [
        "https://www.youtube.com/watch?v=WJrqwa6tMQY"
    ],   // Día
    "ambiente|ciudad|Noche": [
        "https://www.youtube.com/watch?v=bSbYpFMNxLI"
    ],   // Noche
    "ambiente|ciudad|Mercado": [
        "https://www.youtube.com/watch?v=_52K0E_gNY0"
    ],   // Mercado
    "ambiente|ciudad|Palacio": [
        "https://www.youtube.com/watch?v=v5VYRKkNtzs"
    ],   // Palacio

    // Costa
    "ambiente|costa|Tranquila": [
        "https://www.youtube.com/watch?v=4W2EfqdOmiI"
    ],   // Tranquila
    "ambiente|costa|Oleaje": [
        "https://www.youtube.com/watch?v=ST_cPtDe3-c"
    ],   // Oleaje
    "ambiente|costa|Tormenta": [
        "https://www.youtube.com/watch?v=MG1E6sVbNYE"
    ],   // Tormenta
    "ambiente|costa|Puerto": [
        "https://www.youtube.com/watch?v=CY97XoaEjFg"
    ],   // Puerto

    // Montaña
    "ambiente|montaña|Tranquila": [
        "https://www.youtube.com/watch?v=up4WbNSyusg"
    ],   // Tranquila
    "ambiente|montaña|Ventosa": [
        "https://www.youtube.com/watch?v=3mNs2IdWuZY"
    ],   // Ventosa
    "ambiente|montaña|Nevada": [
        "https://www.youtube.com/watch?v=cpGgQHAublY"
    ],   // Nevada
    "ambiente|montaña|Peligrosa": [
        "https://www.youtube.com/watch?v=yAtcEYoMii4"
    ],   // Peligrosa

    // Campo de batalla
    "ambiente|batalla|Batalla": [
        "https://www.youtube.com/watch?v=VaKVLWZrG-4"
    ],   // Batalla
    "ambiente|batalla|Batalla intensa": [
        "https://www.youtube.com/watch?v=0rl7AatkjfA"
    ],   // Batalla intensa
    "ambiente|batalla|Asedio": [
        "https://www.youtube.com/watch?v=whtz44p9oII"
    ],   // Asedio

    // ---------- CAPAS: CLIMA ----------

    // Lluvia
    "capa|clima|lluvia|ligera": [],   // Lluvia ligera
    "capa|clima|lluvia|normal": [],   // Lluvia normal
    "capa|clima|lluvia|intensa": [],   // Lluvia intensa

    // Tormenta
    "capa|clima|tormenta|truenos": [],   // Truenos
    "capa|clima|tormenta|intensa": [],   // Tormenta intensa

    // Viento
    "capa|clima|viento|brisa": [],   // Brisa
    "capa|clima|viento|fuerte": [],   // Viento fuerte

    // Nieve
    "capa|clima|nieve|ligera": [],   // Nevada ligera
    "capa|clima|nieve|ventisca": [],   // Ventisca

    // ---------- CAPAS: NATURALEZA ----------

    // Bosque
    "capa|naturaleza|bosque|hojas": [],   // Hojas y vegetación
    "capa|naturaleza|bosque|vientoArboles": [],   // Viento entre árboles
    "capa|naturaleza|bosque|naturaleza": [],   // Naturaleza

    // Agua
    "capa|naturaleza|agua|goteo": [],   // Goteo
    "capa|naturaleza|agua|rio": [],   // Río
    "capa|naturaleza|agua|cascada": [],   // Cascada
    "capa|naturaleza|agua|mar": [],   // Mar

    // Rocas
    "capa|naturaleza|rocas|piedras": [],   // Piedras
    "capa|naturaleza|rocas|derrumbe": [],   // Derrumbe
    "capa|naturaleza|rocas|rocasCayendo": [],   // Rocas cayendo

    // ---------- CAPAS: ANIMALES ----------

    // Lobos
    "capa|animales|lobos|lobo": [],   // Lobo
    "capa|animales|lobos|manada": [],   // Manada

    // Aves
    "capa|animales|aves|pajaros": [],   // Pájaros
    "capa|animales|aves|aveRapaz": [],   // Ave rapaz

    // Caballos
    "capa|animales|caballos|caballo": [],   // Caballo
    "capa|animales|caballos|caballos": [],   // Caballos

    // Animales salvajes
    "capa|animales|animalesSalvajes|oso": [],   // Oso
    "capa|animales|animalesSalvajes|jabali": [],   // Jabalí
    "capa|animales|animalesSalvajes|ciervo": [],   // Ciervo

    // ---------- CAPAS: ENTORNO ----------

    // Fuego
    "capa|entorno|fuego|hoguera": [
        "https://www.youtube.com/watch?v=mSX3OyW9Rao"
    ],   // Hoguera
    "capa|entorno|fuego|fuegoGrande": [
        "https://www.youtube.com/watch?v=2ya2drfb4rA"
    ],   // Fuego grande

    // Puertas
    "capa|entorno|puertas|madera": [
        "https://www.youtube.com/watch?v=0Gd6PJw3Yh0"
    ],   // Puerta de madera
    "capa|entorno|puertas|pesada": [
        "https://www.youtube.com/watch?v=R8f18JFWDv4"
    ],   // Puerta pesada

    // Campanas
    "capa|entorno|campanas|pequena": [
        "https://www.youtube.com/watch?v=oLWSvP1SN0Y"
    ],   // Campana pequeña
    "capa|entorno|campanas|grande": [
        "https://www.youtube.com/watch?v=WwVSYVUOQ5Y"
    ],   // Campana grande

    // Cadenas
    "capa|entorno|cadenas|moviendose": [
        "https://www.youtube.com/watch?v=EJCbzWGYEK8"
    ],   // Cadenas moviéndose
    "capa|entorno|cadenas|pesadas": [
        "https://www.youtube.com/watch?v=TQmI6M1AIws"
    ],   // Cadenas pesadas

    // ---------- EFECTOS: COMBATE ----------

    // Espadas
    "efecto|combate|espadas|golpeo": [
        "sounds/efectos/combate/espadas/golpeo.mp3"
    ],   // Golpeo
    "efecto|combate|espadas|fallo": [
        "sounds/efectos/combate/espadas/fallo.mp3"
    ],   // Fallo
    "efecto|combate|espadas|bloqueo": [
        "sounds/efectos/combate/espadas/bloqueo.mp3"
    ],   // Bloqueo

    // Mazas y martillos
    "efecto|combate|mazas|golpeo": [
        "sounds/efectos/combate/mazas/golpeo.mp3"
    ],   // Golpeo
    "efecto|combate|mazas|fallo": [
        "sounds/efectos/combate/mazas/fallo.mp3"
    ],   // Fallo
    "efecto|combate|mazas|bloqueo": [
        "sounds/efectos/combate/mazas/bloqueo.mp3"
    ],   // Bloqueo

    // Escudos
    "efecto|combate|escudos|golpe_escudo": [
        "sounds/efectos/combate/escudos/golpe_escudo.mp3"
    ],   // Golpe al escudo
    "efecto|combate|escudos|bloqueo": [
        "sounds/efectos/combate/escudos/bloqueo.mp3"
    ],   // Bloqueo

    // Arcos y ballestas
    "efecto|combate|arcos|flechazo": [
        "sounds/efectos/combate/arcos/flechazo.mp3"
    ],   // Flechazo
    "efecto|combate|arcos|disparo_arco": [
        "sounds/efectos/combate/arcos/disparo_arco.mp3"
    ],   // Disparo de arco
    "efecto|combate|arcos|ballesta": [
        "sounds/efectos/combate/arcos/ballesta.mp3"
    ],   // Disparo de ballesta
    "efecto|combate|arcos|cuerda": [
        "sounds/efectos/combate/arcos/cuerda.mp3"
    ],   // Tensar arco

    // Otras armas
    "efecto|combate|otras_armas|hachazo": [
        "sounds/efectos/combate/otras_armas/hachazo.mp3"
    ],   // Hachazo
    "efecto|combate|otras_armas|daga": [
        "sounds/efectos/combate/otras_armas/daga.mp3"
    ],   // Golpe de daga

    // ---------- EFECTOS: MAGIA ----------

    // Fuego
    "efecto|magia|fuego|fuego_grande": [],   // Fuego intenso
    "efecto|magia|fuego|explosion": [],   // Explosión

    // Hielo
    "efecto|magia|hielo|hielo": [],   // Hielo
    "efecto|magia|hielo|congelacion": [],   // Congelación

    // Electricidad
    "efecto|magia|electricidad|rayo": [],   // Rayo
    "efecto|magia|electricidad|trueno_magico": [],   // Trueno mágico

    // Aire
    "efecto|magia|aire|viento_magico": [],   // Viento mágico

    // Agua
    "efecto|magia|agua|agua": [],   // Agua mágica

    // Magia oscura
    "efecto|magia|oscura|energia_oscura": [],   // Energía oscura
    "efecto|magia|oscura|maldicion": []   // Maldición

};

// Direcciones listas para reproducir de un botón: "youtube:ID" para
// enlaces de YouTube y la ruta tal cual para archivos mp3 propios
function sonidosIntegradosDe(clave) {

    return (sonidosIntegrados[clave] || [])

        .map(function(enlace) {

            if (/\.(mp3|ogg|wav|m4a)$/i.test(enlace.trim())) {

                return enlace.trim();

            }

            const id = idDeYouTube(enlace);

            return id ? PREFIJO_YOUTUBE + id : null;

        })

        .filter(Boolean);

}
