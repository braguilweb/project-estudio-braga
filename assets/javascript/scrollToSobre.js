document.addEventListener('DOMContentLoaded', function() {
    //Adiciona um evento de clique ao link "Sobre" no menu
    document.querySelector('nav.menu__cabecalho a[href="#sobre-nos"]').addEventListener('click', function(e){
        e.preventDefault();//previne comportamento padrão do link

        //Obtém a posição da seção 'Sobre nós
        const sobreNosSection = document.getElementById('sobre-nos');
        const sobreNosSectionTop = sobreNosSection.offsetTop - document.querySelector('header').offsetHeight;

        //Rola suavemente até a posição da seção Sobre nós
        window.scrollTo({
            top: sobreNosSectionTop,
            behavior: 'smooth'
        })
    })
})