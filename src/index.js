import {soundsData} from './data';
import './styles/styles.scss'

const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons__container');

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

    // Остановка всех аудио, кроме текущего
    document.querySelectorAll('audio').forEach(a => {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0;
        }
    });

    // Управление воспроизведением
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }

    // Изменение фона контейнера
    const buttonContainer = button.closest('.button-container');
    if (buttonContainer) {
        const bg = buttonContainer.dataset.background;
        container.style.backgroundImage = `url(${bg})`;
    }
});
