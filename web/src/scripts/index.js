const inputSongFile = document.getElementById("input-songfile");
const audioSong = document.getElementById("audio-song");
const btnPlay = document.getElementById("btn-play");
const txtSongTitle = document.getElementById("txt-songtitle");

function onChangeArquivo(){
    audioSong.setAttribute("src", URL.createObjectURL(inputSongFile.files[0]));
    btnPlay.toggleAttribute("enabled", true);
    txtSongTitle.innerHTML = "Song: " + (inputSongFile.files[0].name).replace(/\.[^/.]+$/, "");
}

function onClickUpload(){
    inputSongFile.click();
}

function onClickPlay(){
    audioSong.play();
}