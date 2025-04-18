import {soundsData} from './data';
import './styles/styles.scss'

const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons__container');
const controlContainer = document.querySelector('.control');

const volumeControl = document.createElement('input');
volumeControl.type = 'range';
volumeControl.min = '0';
volumeControl.max = '1';
volumeControl.step = '0.1';
volumeControl.value = '1';
volumeControl.classList.add('volume-control');
controlContainer.appendChild(volumeControl);

let currentAudio = null

soundsData.forEach((item) => {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.dataset.background = item.background; // Сохраняем путь в dataset
    buttonContainer.style.backgroundImage = `url(${item.background})`;

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('button');
    buttonElement.style.backgroundImage = `url(${item.icon})`;

    const audioElement = document.createElement('audio');
    audioElement.src = item.audio;
    buttonElement.appendChild(audioElement);

    buttonContainer.appendChild(buttonElement);
    buttonsContainer.appendChild(buttonContainer);
});

buttonsContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.button');
    if (!button) return;

    const audio = button.querySelector('audio');
    if (!audio) return;

    document.querySelectorAll('audio').forEach(a => {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0;
        }
    });

    if (audio.paused) {
        audio.volume = volumeControl.value; // Устанавливаем громкость из регулятора
        audio.play();
        currentAudio = audio; // Сохраняем текущее аудио
    } else {
        audio.pause();
        audio.currentTime = 0;
        currentAudio = null;
    }

    const buttonContainer = button.closest('.button-container');
    if (buttonContainer) {
        const bg = buttonContainer.dataset.background;
        container.style.backgroundImage = `url(${bg})`;
    }
});

volumeControl.addEventListener('input', (e) => {
    if (currentAudio) {
        currentAudio.volume = e.target.value;
    }
});

