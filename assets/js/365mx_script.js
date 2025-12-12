// Puedes agregar aquí cualquier funcionalidad JavaScript adicional que necesites
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: Cambiar navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Ejemplo: Validación simple del formulario de newsletter
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            const emailInput = this.querySelector('input[type="email"]');
            if (!emailInput.value || !emailInput.value.includes('@')) {
                e.preventDefault();
                alert('Por favor ingresa un email válido');
                emailInput.focus();
            }
        });
    }
    
    // Añadir clase active a los elementos del navbar según la sección visible
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id