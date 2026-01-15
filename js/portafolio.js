// Funcionalidad específica para la página de portafolio

document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover clase active de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Agregar clase active al botón clickeado
                this.classList.add('active');
                
                // Obtener el filtro seleccionado
                const filterValue = this.getAttribute('data-filter');
                
                // Filtrar proyectos
                projectCards.forEach(card => {
                    const cardCategories = card.getAttribute('data-category').split(' ');
                    
                    if (filterValue === 'all' || cardCategories.includes(filterValue)) {
                        card.style.display = 'block';
                        // Añadir clase para animación
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, 100);
                    } else {
                        card.classList.remove('visible');
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Menú móvil toggle (compartido con script-index.js)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // Año actual en el footer
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Efecto de scroll para la navegación
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            }
        }
    });
    
    // Animación de entrada de proyectos
    function animateProjectsOnScroll() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            }
        });
    }
    
    // Establecer estado inicial para animación
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.remove('visible');
    });
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('load', animateProjectsOnScroll);
    window.addEventListener('scroll', animateProjectsOnScroll);
    
    // Función para precargar imágenes importantes
    function preloadImages() {
        const images = [
            'img/icon2.ico'
        ];
        
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Llamar a la función de precarga al cargar la página
    window.addEventListener('load', preloadImages);
    
    // Activar enlace de portafolio en el menú
    function activatePortfolioLink() {
        const portfolioLinks = document.querySelectorAll('.portafolio-link');
        portfolioLinks.forEach(link => {
            if (window.location.pathname.includes('portafolio.html')) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('load', activatePortfolioLink);
});