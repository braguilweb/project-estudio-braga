document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento de clique ao link "Contato" no menu
    document.querySelector('nav.menu__cabecalho a[href="#texto-2"]').addEventListener('click', function(e) {
        e.preventDefault(); //previne o comportamento padrão do link

        //Obtém a posição da seção" texto-2"
        const texto2Section = document.getElementById('texto-2');
        const texto2SectionTop = texto2Section.offsetTop - document.querySelector('header').offsetHeight;

        // Rola suavemente até a posição da seção "Texto-2"
        window.scrollTo({
            top: texto2SectionTop,
            behavior: 'smooth'
        })

    })
})