document.addEventListener('DOMContentLoaded', function() {
    //Adiciona um evento ao clicar no link Home do Cabeçalho
    document.querySelector('nav.menu__cabecalho a[href="#home"]').addEventListener('click', function(e) {
        e.preventDefault(); //previne o comportamento padrão do link

        //Obtem a posição da secction home
        const homeSection = document.getElementById('home');
        const homeSectionTop = homeSection.offsetTop - document.querySelector('header').offsetHeight;

        // Rolagem suave até a posição do secction home
        window.scrollTo({
            top: homeSectionTop,
            behavior: 'smooth'
        })
    })
})

