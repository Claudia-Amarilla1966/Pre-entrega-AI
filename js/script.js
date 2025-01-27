
// Script para el desplazamiento suave al hacer clic en la flecha
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
});