
const audioFiles = [
    // url: 'https://files.catbox.moe/14t8ki.mp3', name: 'shop - nicopatty'}
    { url: 'https://files.catbox.moe/g0m0a2.mp3', name: 'yacht - dotnds'}
];

// Shuffle the audioFiles array to play in a random order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

shuffleArray(audioFiles);

let currentTrack = 0;
let audio = new Audio(audioFiles[currentTrack].url);
let isPlaying = false;

const playPauseBtn = document.getElementById('playPause');
const backBtn = document.getElementById('back');
const skipBtn = document.getElementById('skip');
const marquee = document.getElementById('song-name');
const progressBar = document.getElementById('progressBar');

function updateMarquee() {
    marquee.textContent = `now playing: ${audioFiles[currentTrack].name}`;
}

function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
}

function playPause() {
    if (isPlaying) {
        audio.pause();
        document.getElementById('playbutton').innerText = ">";
    } else {
        audio.play();
        updateMarquee();
        document.getElementById('playbutton').innerText = "| |";
    }
    isPlaying = !isPlaying;
}

function skipTrack() {
    currentTrack = (currentTrack + 1) % audioFiles.length;
    changeTrack();
}

function backTrack() {
    currentTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
    changeTrack();
}

function changeTrack() {
    // Pause and clear previous audio
    audio.pause();

    // Create a new audio object for the new track
    audio = new Audio(audioFiles[currentTrack].url);

    // Re-attach the event listener to the new audio element
    audio.addEventListener('timeupdate', updateProgressBar);

    updateMarquee();
    if (isPlaying) {
        audio.play();
    }
}

// Update the progress bar as the song plays
audio.addEventListener('timeupdate', updateProgressBar);

playPauseBtn.addEventListener('click', playPause);
backBtn.addEventListener('click', backTrack);
skipBtn.addEventListener('click', skipTrack);

updateMarquee();
changeTrack();