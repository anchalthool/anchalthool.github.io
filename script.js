const container = document.querySelector('.sphere-container');
const sphere = document.getElementById('sphere');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  const moveX = (offsetX - rect.width / 2) * 0.2;  // ⬅️ more movement
  const moveY = (offsetY - rect.height / 2) * 0.2;

  sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

container.addEventListener('mouseleave', () => {
  sphere.style.transform = `translate(0, 0)`;
});


  // Smooth scroll override to fix same-anchor click issues
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });