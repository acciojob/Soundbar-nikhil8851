function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
}

function stopSound() {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => audio.pause());
}
