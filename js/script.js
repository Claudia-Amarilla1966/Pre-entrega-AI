

document.addEventListener("DOMContentLoaded", function() {
    const audioIcon = document.querySelector('.audio-icon');
    const audioPlayer = document.getElementById('audioPlayer');

    if (audioIcon && audioPlayer) {
        audioIcon.addEventListener('click', function() {
            if (audioPlayer.paused) {
                audioPlayer.play(); // Reproduce el audio si está pausado
            } else {
                audioPlayer.pause(); // Pausa el audio si está reproduciéndose
            }
        });
    }
});


