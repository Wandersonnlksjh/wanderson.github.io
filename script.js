// Espera o conteúdo da página ser carregado
document.addEventListener('DOMContentLoaded', function () {

    // Efeito de rolagem suave para os links de navegação
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino (sem o '#')
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajusta a posição para que o topo fique visível
                    behavior: 'smooth' // Faz a rolagem de forma suave
                });
            }
        });
    });

    // Adiciona um efeito de aparecer/desaparecer no banner principal
    const banner = document.querySelector('.banner');
    window.addEventListener('scroll', function () {
        if (window.scrollY > banner.offsetTop - window.innerHeight) {
            banner.style.opacity = 1;
            banner.style.transition = 'opacity 1s ease-in-out';
        } else {
            banner.style.opacity = 0.5;
        }
    });
});
