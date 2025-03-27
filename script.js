document.querySelector('.botao').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contato').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.contact-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.querySelector('.contact-icon').style.animation = 'pulse 0.5s ease-in-out';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.querySelector('.contact-icon').style.animation = '';
    });
});