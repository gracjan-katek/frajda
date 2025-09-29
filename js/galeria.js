document.addEventListener('DOMContentLoaded', () => {
    const galleryPhotos = document.querySelectorAll('.gallery-photo');
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentIndex = 0;
    const images = Array.from(galleryPhotos).map(photo => photo.href);

    function showLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.classList.remove('hidden');
    }

    function hideLightbox() {
        lightbox.classList.add('hidden');
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    }

    galleryPhotos.forEach((photo, index) => {
        photo.addEventListener('click', (e) => {
            e.preventDefault();
            showLightbox(index);
        });
    });

    closeBtn.addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', (e) => {
        // Zamknij, jeśli kliknięto tło, a nie obrazek
        if (e.target === lightbox) {
            hideLightbox();
        }
    });

    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    // Nawigacja klawiaturą
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('hidden')) {
            if (e.key === 'Escape') hideLightbox();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
        }
    });
});
