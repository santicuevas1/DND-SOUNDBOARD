# DND-SOUNDBOARD
Soundboard para partidas de DND

## Música con Spotify

La música se reproduce con el Web Playback SDK de Spotify (hace falta Premium).

1. Crea una app en https://developer.spotify.com/dashboard
2. En la app, añade como *Redirect URI* la dirección desde la que abres la web,
   por ejemplo `http://127.0.0.1:5500/` (no vale `localhost` ni abrir el archivo con doble clic).
3. Copia el *Client ID* en `config.js`.
4. Sirve la carpeta en esa dirección, por ejemplo con `python -m http.server 5500 --bind 127.0.0.1`.
5. En la web, abre una playlist de la sección Música, pulsa "Conectar con Spotify"
   y pega el enlace de la playlist de Spotify que quieras en ese botón.
