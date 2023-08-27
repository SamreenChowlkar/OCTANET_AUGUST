// Scroll smoothly when clicking the Learn More button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    const aboutSection = document.querySelector('.about');
    window.scrollTo({
      top: aboutSection.offsetTop,
      behavior: 'smooth'
    });
  });
  