// Inicializa ScrollReveal com reset desativado
window.sr = ScrollReveal({ reset: false });

// Configuração para slide down
let slideDown = {
    distance: '10%',
    origin: 'top',
    opacity: 0
};

// Cria uma instância do ScrollReveal
let sr = ScrollReveal();

// Configuração para revelações com delays
sr.reveal('.area-1');
sr.reveal('.nome', { delay: 150 });
sr.reveal('.sobrenome', { delay: 200 });
sr.reveal('.role', { delay: 300 });

// Configuração para revelações com rotação
sr.reveal('.social-1', {
    delay: 400,
    rotate: {
        x: 0,
        y: -100,
        z: 0
    }
});
sr.reveal('.social-2', {
    delay: 450,
    rotate: {
        x: 0,
        y: -100,
        z: 0
    }
});
sr.reveal('.social-3', {
    delay: 500,
    rotate: {
        x: 0,
        y: -100,
        z: 0
    }
});

// Usando a configuração slideDown
sr.reveal('.area-2', slideDown);
sr.reveal('.area-3', slideDown);
sr.reveal('.area-4', slideDown);
