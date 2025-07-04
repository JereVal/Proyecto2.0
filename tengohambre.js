window.onload = () => {
  let currentIndex = 0;
  const track = document.querySelector('.papas'); 
  const totalItems = document.querySelectorAll('.queso').length;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlide();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlide();
  });

  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      } else {
        currentIndex = (currentIndex + 1) % totalItems;
      }
      updateSlide();
      isDragging = false;
    }
  });

  track.addEventListener('touchend', () => {
    isDragging = false;
  });
};
