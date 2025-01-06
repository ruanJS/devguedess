document.addEventListener('DOMContentLoaded', () => {
    // Forçar rolagem para o topo ao carregar a página
    window.scrollTo(0, 0);

    let menuIcon = document.querySelector('#menuIcon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active'); // Corrigido para 'link' em vez de 'links'
                });
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active'); // Corrigido para adicionar aspas em torno do ID
            }
        });

        let headerElement = document.querySelector('header');
        headerElement.classList.toggle('sticky', window.scrollY > 100);

        if (window.innerWidth <= 768) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    };

    // Inicialização do ScrollReveal
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    // Inicialização do Typed.js
    const typed = new Typed('.multiple-text', {
        strings: ['Fullstack!', 'Web Designer!', 'Frontend', 'Backend', 'Designer UI and UX!'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // const header = document.querySelector('.header');

    // function handleScroll() {
    //     if (window.scrollY > 0) {
    //         header.classList.add('sticky');
    //     } else {
    //         header.classList.remove('sticky');
    //     }
    // }
    
    // window.addEventListener('scroll', handleScroll);
    
});
