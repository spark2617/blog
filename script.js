// Função para aplicar o efeito fade-in quando os tópicos aparecerem na tela
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(function (element) {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('show');
        }
    });
});