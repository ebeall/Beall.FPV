document.addEventListener('DOMContentLoaded', function () {
    // Evento para tornar a navbar visível quando a página rolar 20 pixels para baixo
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 20) {
            navbar.style.opacity = '1'; // Mostra a navbar
        } else {
            navbar.style.opacity = '0'; // Esconde a navbar
        }

        // Animação slideInFromLeft ao entrar na tela
        const slideInElements = document.querySelectorAll('.text-overlay');
        slideInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop <= windowHeight) {
                element.style.animation = 'slideInFromLeft 2s forwards';
                element.style.animationIterationCount = '1'; // A animação deve rodar apenas uma vez
            }
        });

        // Animação para a logo animada na seção Contate-nos
        const animatedLogo = document.querySelector('.animated-logo');
        if (animatedLogo) {
            const logoTop = animatedLogo.getBoundingClientRect().top;
            if (logoTop <= window.innerHeight) {
                const videoElement = document.createElement('video');
                videoElement.setAttribute('autoplay', '');
                videoElement.setAttribute('muted', '');
                videoElement.setAttribute('playsinline', '');
                videoElement.style.width = 'var(--logo-image-width)';
                videoElement.innerHTML = '<source src="../images/videos/logo_animation.mp4" type="video/mp4">Seu navegador não suporta o elemento de vídeo.';
                animatedLogo.replaceWith(videoElement);
            }
        }
    });

    // Mostrar o dropdown ao clicar no ícone do menu
    const menuIcon = document.querySelector('.menu-icon');
    const navbarUl = document.querySelector('.navbar ul');
    menuIcon.addEventListener('click', function () {
        navbarUl.classList.toggle('show');
    });

    const section = document.querySelector('#contate-nos');
    const video = document.querySelector('#contate-nos-video');
    let hasPlayed = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasPlayed) {
                video.play();
                hasPlayed = true;
            }
        });
    }, { threshold: 1.0 });

    observer.observe(section);

    // Eventos para mostrar/ocultar o menu ao passar o mouse
    menuIcon.addEventListener('mouseenter', function () {
        navbarUl.classList.add('show');
    });

    navbarUl.addEventListener('mouseenter', function () {
        navbarUl.classList.add('show');
    });

    navbarUl.addEventListener('mouseleave', function () {
        navbarUl.classList.remove('show');
    });

    menuIcon.addEventListener('mouseleave', function () {
        setTimeout(function() {
            if (!navbarUl.matches(':hover')) {
                navbarUl.classList.remove('show');
            }
        }, 100); // Pequeno atraso para garantir que o evento 'mouseenter' do menu seja detectado
    });
});