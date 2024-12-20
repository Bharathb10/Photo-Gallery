const galleryItems = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const imageInfoElements = document.querySelectorAll('.image-info');

galleryItems.forEach((item, index) => {
    // Display file size and type
    const size = item.getAttribute('data-size');
    const type = item.getAttribute('data-type');
    imageInfoElements[index].textContent = `Size: ${size}, Type: ${type}`;

    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});