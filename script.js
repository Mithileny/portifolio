console.log("Portfólio carregado com sucesso 🚀");
const elementos = document.querySelectorAll('.fade');

function mostrar() {
  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;
    const tela = window.innerHeight;

    if (topo < tela - 50) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', mostrar);
window.addEventListener('load', mostrar);