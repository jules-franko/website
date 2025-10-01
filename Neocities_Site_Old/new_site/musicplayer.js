var boombox = document.getElementById('musicplayer');

function playMusic() {
    boombox.play();
}

function pauseMusic() {
    boombox.pause();
}

function stopMusic() {
    boombox.pause();
    boombox.currentTime = 0;
}

const songs = {

    s1: {
        title: 'butterfly-s - 11vx',
        url: 'https://files.catbox.moe/s7wwgf.mp3'
    },
    s2: {
        title: 'green2 - ThorHighHeels',
        url: 'https://files.catbox.moe/jqvwrs.mp3'
    },
    s3: {
        title: 'discovery - Lxchee',
        url: 'https://files.catbox.moe/7cuh9e.mp3'
    },
    s4: {
        title: 'Goldmund - Dancing Fantasy',
        url: 'https://files.catbox.moe/bodupe.mp3'
    }
};

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
let randomSong = getRandom(Object.values(songs));

document.getElementById('titlescroll').innerHTML = `${randomSong.title}`;
document.getElementById('musicplayer').src = `${randomSong.url}`;
console.log("Now Playing: " + ` ${randomSong.title}` + ` ${randomSong.url}`);

pauseMusic();