// Inicializa ScrollReveal com reset desativado
window.sr = ScrollReveal({ reset: false });

// Configuração padrão para slide down
const slideDown = {
    distance: '10%',
    origin: 'top',
    opacity: 0,
};

// Cria uma instância do ScrollReveal
const sr = ScrollReveal();

// Configurações de revelação com delays
const revealWithDelay = [
    { element: '.area-1' },
    { element: '.nome', delay: 150 },
    { element: '.sobrenome', delay: 200 },
    { element: '.role', delay: 300 },
    { element: '.social-1', delay: 400, rotate: { x: 0, y: -100, z: 0 } },
    { element: '.social-2', delay: 450, rotate: { x: 0, y: -100, z: 0 } },
    { element: '.social-3', delay: 500, rotate: { x: 0, y: -100, z: 0 } },
];

// Aplica as configurações de revelação
revealWithDelay.forEach(({ element, delay, rotate }) => {
    sr.reveal(element, { delay, rotate });
});

// Usando a configuração slideDown para áreas
const areasToReveal = ['.area-2', '.area-3', '.area-4'];
areasToReveal.forEach(area => {
    sr.reveal(area, slideDown);
});
