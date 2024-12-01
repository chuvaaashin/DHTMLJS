const images = ['image1.jpg', 'image2.jpg'];
let currentImageIndex = 0;
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('image').src = images[currentImageIndex];
    const randomInterval = Math.floor(Math.random() * 5000) + 1000; // случайное время от 1 до 6 секунд
    setTimeout(changeImage, randomInterval);
}
window.onload = function() {
    changeImage();
};
