'use strict';
/*У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg 
Вивести зображення з цієї папки, отримане випадковим чином (Math.random)*/

let images = document.querySelectorAll('.randomImage')
let imgFolder = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

images.forEach(image => {
    let randomIndex = Math.floor(Math.random() * imgFolder.length);
    let randomImagejpg = imgFolder[randomIndex];
    image.src = 'img/' + randomImagejpg;
})

