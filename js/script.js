// SimplyCountdown
simplyCountdown('.simply-countdown', {
    year: 2025, // required
    month: 11, // required
    day: 14, // required
    hours: 9, // Default is 0 [0-23] integer
    words: { //words displayed into the countdown
        days: { singular: 'hari', plural: 'Hari' },
        hours: { singular: 'jam', plural: 'Jam' },
        minutes: { singular: 'menit', plural: 'Menit' },
        seconds: { singular: 'detik', plural: 'Detik' }
    },
});

// Hamburger Menu
const stickyTop = document.querySelector('.sticky-top');
const offCanvas = document.querySelector('.offcanvas');
offCanvas.addEventListener('show.bs.offcanvas', function() {
    stickyTop.style.overflow = 'visible'
});

offCanvas.addEventListener('hidden.bs.offcanvas', function() {
    stickyTop.style.overflow = 'hidden'
});

// Disable Scroll
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i')
const song = document.querySelector('#song');
let isPlaying = false;

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(scrollTop, scrollLeft);
    }

    rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
    window.onscroll = function () {}
    rootElement.style.scrollBehavior = 'smooth';
    // localStorage.setItem('opened', 'true');
    playAudio();
    isPlaying = true;
}

function playAudio() {
    audioIconWrapper.style.display = 'flex';
    song.play();
}

audioIconWrapper.onclick = function() {
    if (isPlaying) {
        song.pause();
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
    } else {
        song.play();
        audioIcon.classList.add('bi-disc');
        audioIcon.classList.remove('bi-pause-circle');
    }

    isPlaying = !isPlaying;
}

// if(!localStorage.getItem('opened')) {
    disableScroll();
// }

// Google Form
window.addEventListener("load", function() {
    const form = document.getElementById('guest-form');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
        .then(() => {
            alert("Terimakasih Sudah Melakukan Konfirmasi Kehadiran Anda!");
            form.reset();
        })
    });
});

// Get Name By URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
const namaContainer = document.querySelector('.hero h4 span');
namaContainer.innerText = `${pronoun} ${nama},` .replace(/ ,$/, ',');
document.querySelector('#nama').value = nama;