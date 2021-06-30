$("#arquivo").on("change", function (e) {       
    $("#audio").attr("src", URL.createObjectURL(e.target.files[0]));
    $("#btn-play").toggleClass("enabled");
    document.getElementById('txt-songtitle').innerHTML = "Song: " + (e.target.files[0].name).replace(/\.[^/.]+$/, "");
});

function _upload_song(){
    document.getElementById('arquivo').click();
}

function _play_song(){
    document.getElementById('audio').play();
}