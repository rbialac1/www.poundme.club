
var audio = new Audio();
var i = 0;
var playlist = new Array("static/matrix_audio_1.mp3", "static/matrix_red_pill.mp3", "static/matrix_what_is_real.mp3");

audio.addEventListener('ended', function () {
    i = ++i < playlist.length ? i : 0;
    console.log(i)
    audio.src = playlist[i];
    audio.play();
}, true);

audio.volume = 1;
audio.loop = false;
audio.src = playlist[0];
audio.play();