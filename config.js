// Client ID de tu app de Spotify (no es secreto).
// Se crea en https://developer.spotify.com/dashboard
// En la app hay que añadir como "Redirect URI" la dirección
// desde la que abres la web, por ejemplo: http://127.0.0.1:5500/
const SPOTIFY_CLIENT_ID = "9650725121724b008eabcae0555def78";

// Playlist de Spotify de cada botón de música. Son las mismas
// para todo el que abra la web. Pega el enlace de la playlist
// (en Spotify: Compartir > Copiar enlace). Vacío = sin playlist.
const SPOTIFY_PLAYLISTS = {
    exploracion: "https://open.spotify.com/playlist/5cd3b99ylJiVxYgKUY9PPB",
    combate: "https://open.spotify.com/playlist/5yCFWKFhsM14j4gIzY5svs",
    mazmorras: "https://open.spotify.com/playlist/3uU3E2wKBio3jSqG39z5uW",
    tabernas: "https://open.spotify.com/playlist/5vGv7TQ2YhoR9Ls813OxJn",
    terror: "https://open.spotify.com/playlist/2dlPSUcLTOwINghMz5qBoB",
    fantasia: "https://open.spotify.com/playlist/6lXk2zYGMTqltpq40ZPpg9",
    jefes: "https://open.spotify.com/playlist/75bnX09C4mZMDyJu9QRIFK"
};
