// Función para obtener el nombre de usuario de la URL
function getParametroURL(nombre) {
    var parametros = new URLSearchParams(window.location.search);
    return parametros.get(nombre);
}

// Obtener el nombre de usuario de la URL
var nombreUsuario = getParametroURL('nombre');
console.log(nombreUsuario); // Agrega esta línea para verificar el nombre de usuario


var playButton = document.getElementById('playPauseButton');
        var playing = false;
        var currentSongIndex = -1;

        function togglePlayPause() {
            var reproductor = document.getElementById('reproductor');
            if (reproductor.paused || reproductor.ended) {
                reproductor.play();
                playButton.textContent = 'Pause';
                playing = true;
            } else {
                reproductor.pause();
                playButton.textContent = 'Play';
                playing = false;
            }
        }

        function playMusic(ruta, nombre, autor) {
            var reproductor = document.getElementById('reproductor');
            var nuevaCancionIndex = canciones.findIndex(function(element) {
                return element.startsWith(nombre);
            });
            if (currentSongIndex === nuevaCancionIndex) {
                // Si la canción actual es la misma que la que se está reproduciendo, pausarla
                togglePlayPause();
            } else {
                reproductor.src = 'canciones/' + ruta;
                reproductor.play();
                playButton.textContent = 'Pause';
                playing = true;
                currentSongIndex = nuevaCancionIndex;
                updateFooterInfo(nombre, autor);
            }
        }

        function nextSong() {
            var reproductor = document.getElementById('reproductor');
            currentSongIndex = (currentSongIndex + 1) % canciones.length;
            var info = canciones[currentSongIndex].split(' - ');
            reproductor.src = 'canciones/' + info[0];
            reproductor.play();
            playButton.textContent = 'Pause';
            playing = true;
            updateFooterInfo(info[1], info[2]);
        }

        function previousSong() {
            var reproductor = document.getElementById('reproductor');
            currentSongIndex = (currentSongIndex - 1 + canciones.length) % canciones.length;
            var info = canciones[currentSongIndex].split(' - ');
            reproductor.src = 'canciones/' + info[0];
            reproductor.play();
            playButton.textContent = 'Pause';
            playing = true;
            updateFooterInfo(info[1], info[2]);
        }

        function updateFooterInfo(nombre, autor) {
            var nombreCancion = document.getElementById('nombre-cancion');
            var autorCancion = document.getElementById('autor-cancion');

            nombreCancion.textContent = nombre;
            autorCancion.textContent = autor;
        }

        var canciones = [
            'XCLUSIVO REMIX.mp3 - XCLUSIVO REMIX - Gonzy, Saiko y Arcangel',
            'VVS SWITCH Remix.mp3 - VVS SWITCH Remix - Pressure9x19, AnuelAA, YovngChimi y Hades66',
            'Lollipop.mp3 - Lollipop - Darell',
            'LO QUE TIENE.mp3 - LO QUE TIENE - Beny Jr, Morad y Rafael Ruiz Amador',
            'JAPONI.mp3 - JAPONI - Omar Montes, Oscar el Ruso, Samuel G, Camin, Moncho Chavea, Jthyago y Samueliyo Baby',
            'GATA ONLY.mp3 - GATA ONLY - Cris MJ y FloyyMenor',
            'A 300.mp3 - A 300 - JC Reyes y Pedro Calderón',
            '105F RMX.mp3 - 105F RMX - Chencho Corleone, Farruko y Kevvo'
        ];


        document.addEventListener("DOMContentLoaded", function() {
            if (nombreUsuario) {
                var mensajeBienvenida = document.createElement('h1');
                mensajeBienvenida.textContent = "Bienvenido " + nombreUsuario;
                document.getElementById('mensaje-bienvenida').appendChild(mensajeBienvenida); // Agrega el mensaje de bienvenida al contenedor
            }
        });