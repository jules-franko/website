
/*
const audioFiles = [
    { url: 'https://files.catbox.moe/3tuswj.mp3', name: 'Track 1' },
    { url: 'https://files.catbox.moe/e9khlj.webm', name: 'Track 2' },
    { url: 'https://files.catbox.moe/g6xxou.mp3', name: 'Track 3' }
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
const marquee = document.getElementById('marquee');

function updateMarquee() {
    marquee.textContent = `Now Playing: ${audioFiles[currentTrack].name}`;
}

function playPause() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
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
    audio.pause();
    audio = new Audio(audioFiles[currentTrack].url);
    updateMarquee();
    if (isPlaying) {
        audio.play();
    }
}

playPauseBtn.addEventListener('click', playPause);
backBtn.addEventListener('click', backTrack);
skipBtn.addEventListener('click', skipTrack);

updateMarquee();
*/

const audioFiles = [
    { url: 'https://files.catbox.moe/3tuswj.mp3', name: 'Eternal Rest - Akira Yamaoka' },
    { url: 'https://files.catbox.moe/g6xxou.mp3', name: 'Cybernetic Fashion 0.1' },
    { url: 'https://files.catbox.moe/s86n3g.mp3', name: 'Driftveil City (Pokemon Black/White)' },
    { url: 'https://files.catbox.moe/y1as5w.mp3', name: 'Cult - Drackfreeee' },
    { url: 'https://files.catbox.moe/h8xcrl.mp3', name: 'Beautiful - Round Table' },
    { url: 'https://files.catbox.moe/186eq5.mp3', name: 'Screenshot - dotnds'}
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
const marquee = document.getElementById('marquee');
const progressBar = document.getElementById('progressBar');

function updateMarquee() {
    marquee.textContent = `Now Playing: ${audioFiles[currentTrack].name}`;
}

function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
}

function playPause() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
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