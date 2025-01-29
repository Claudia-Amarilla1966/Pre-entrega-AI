


// Selecciona el ícono y el reproductor de audio
const audioIcon = document.querySelector('.audio-icon');
const audioPlayer = document.getElementById('audioPlayer');

// Añade un evento de clic al ícono
audioIcon.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play(); // Reproduce el audio si está pausado
    } else {
        audioPlayer.pause(); // Pausa el audio si está reproduciéndose
    }
});