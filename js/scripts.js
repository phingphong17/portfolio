// Gestion du menu burger
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.createElement('div');
    burgerMenu.className = 'burger-menu';
    burgerMenu.innerHTML = `
        <div class="burger-icon">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(burgerMenu, nav);

    // Styles pour le menu burger
    const style = document.createElement('style');
    style.textContent = `
        .burger-menu {
            display: none;
            cursor: pointer;
            padding: 10px;
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1000;
        }

        .burger-icon {
            width: 30px;
            height: 20px;
            position: relative;
        }

        .burger-icon span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: #fff;
            border-radius: 3px;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: .25s ease-in-out;
        }

        .burger-icon span:nth-child(1) {
            top: 0;
        }

        .burger-icon span:nth-child(2) {
            top: 9px;
        }

        .burger-icon span:nth-child(3) {
            top: 18px;
        }

        .burger-icon.active span:nth-child(1) {
            top: 9px;
            transform: rotate(135deg);
        }

        .burger-icon.active span:nth-child(2) {
            opacity: 0;
            left: -60px;
        }

        .burger-icon.active span:nth-child(3) {
            top: 9px;
            transform: rotate(-135deg);
        }

        @media (max-width: 768px) {
            .burger-menu {
                display: block;
            }

            nav {
                position: fixed;
                top: 0;
                left: -100%;
                width: 80%;
                height: 100vh;
                background: rgba(0, 0, 0, 0.9);
                flex-direction: column;
                justify-content: center;
                transition: 0.3s;
                z-index: 999;
            }

            nav.active {
                left: 0;
            }

            nav a {
                margin: 15px 0;
                font-size: 1.2em;
            }
        }
    `;
    document.head.appendChild(style);

    // Gestion des événements
    burgerMenu.addEventListener('click', function() {
        this.querySelector('.burger-icon').classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Fermer le menu lors du clic sur un lien
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.querySelector('.burger-icon').classList.remove('active');
            nav.classList.remove('active');
        });
    });
}); 