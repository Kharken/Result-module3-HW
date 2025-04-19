interface ISoundsData {
    background: string;
    icon: string;
    audio: string;
}

export const soundsData = [
    {
        background: './assets/summer-bg.jpg',
        icon: './assets/icons/sun.svg',
        audio: './assets/sounds/summer.mp3',
    },
    {
        background: './assets/rainy-bg.jpg',
        icon: './assets/icons/cloud-rain.svg',
        audio: './assets/sounds/rain.mp3',
    },
    {
        background: './assets/winter-bg.jpg',
        icon: './assets/icons/cloud-snow.svg',
        audio: './assets/sounds/winter.mp3',
    },
] as ISoundsData[];
