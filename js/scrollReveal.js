window.sr = ScrollReveal({ reset: false });

let slideDown = {
    distance: '10%',
    origin: 'top',
    opacity: 0
};
ScrollReveal().reveal('.area-1')
ScrollReveal().reveal('.nome', { delay: 150 })
ScrollReveal().reveal('.sobrenome', { delay: 200 })
ScrollReveal().reveal('.role', { delay: 300 })
ScrollReveal().reveal('.social-1', {
    delay: 400,
    rotate: {
        x: 0,
        y: -100,
        z: 0
    }
})
ScrollReveal().reveal('.social-2', {
    delay: 450,
    rotate: {
        x: 0,
        y: -100,
        z: 0
    }
})
ScrollReveal().reveal('.social-3', {
    delay: 500,
    rotate: {
        x: 0,
        y: -100,
        z: 0
    }
})
ScrollReveal().reveal('.area-2', slideDown)
ScrollReveal().reveal('.area-3', slideDown)
ScrollReveal().reveal('.area-4', slideDown)