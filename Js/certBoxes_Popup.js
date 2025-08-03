const certBoxes = document.querySelectorAll('.cert-box');
const scrollTrack = document.querySelector('.scroll-track');
const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const popupText = document.getElementById('popup-text');
const closeBtn = document.querySelector('.close-btn');

certBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        // Pause scroll
        scrollTrack.classList.add('paused');

        // Get image URL from data attribute
        const imgSrc = box.getAttribute('data-img');
        const textContent = box.getAttribute('data-text');

        popupImg.src = imgSrc;
          popupText.textContent = textContent;

        // Show popup
        popup.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    scrollTrack.classList.remove('paused');
});
