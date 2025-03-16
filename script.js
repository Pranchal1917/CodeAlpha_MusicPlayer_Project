const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");

const songs = ["song1.mp3", "song2.mp3", "song3.mp3"];  
let currentSongIndex = 0; 

function playMusic() {
    audio.play();
}
function pauseMusic() {
    audio.pause();
};

function stopMusic() {
    audio.pause();
    audio.currentTime = 0; 
}

function nextMusic() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; 
    changeSong();
}

function prevMusic() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSong();
}
function changeSong() {
    audioSource.src = songs[currentSongIndex]; 
    audio.load(); 
    audio.play(); 
}