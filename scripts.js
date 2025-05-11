const pictures = [
    'us.jpg',
    'us2.jpg',
    'us3.jpg',
    'us4.jpg',
    'us5.jpg',
    'us6.jpg',
    'us7.jpg',
    'us8.jpg',
    'us9.jpg',
];

let index = 0;
let intervalId;

const currentPic = document.getElementById('currentPic');
const nextButton = document.getElementById('next');

function showImage(){
    currentPic.src = pictures[index];
}

function nextImage(){
    index = (index + 1) % pictures.length;
    showImage();
}

window.addEventListener('load', () => {
    showImage();
    intervalId = setInterval(nextImage, 3000);
});

nextButton.addEventListener('click', () => {
    nextImage();
});