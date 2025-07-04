// Abre el menú lateral
function abrirMenu() {
  document.getElementById("sidebar").style.width = "250px";
}

function cerrarMenu() {
  document.getElementById("sidebar").style.width = "0";
}


// Animación al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.animacion-container');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  elementos.forEach(el => observer.observe(el));

  // Cerrar menú al hacer clic en cualquier link
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => cerrarMenu());
  });
});
