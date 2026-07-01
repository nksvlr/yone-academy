/* ========== HEADER: sombra ao rolar ========== */
const header = document.getElementById('header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}


/* ========== MENU MOBILE: abrir e fechar ========== */
const menuBtn = document.getElementById('menuBtn');
const headerNav = document.getElementById('headerNav');

if (menuBtn && headerNav) {
    menuBtn.addEventListener('click', () => {
        headerNav.classList.toggle('open');
        menuBtn.classList.toggle('active');
    });

    // Fecha o menu quando clicar em qualquer link dentro dele
    headerNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            headerNav.classList.remove('open');
            menuBtn.classList.remove('active');
        });
    });
}


/* ========== ANIMAÇÃO FADE-IN ao rolar ========== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Anima tudo que tiver a classe .fade-in
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));