document.addEventListener('DOMContentLoaded', function() {
    const languageButtons = document.querySelectorAll('.language-btn');
    
    // Charger la langue sauvegardée ou utiliser le français par défaut
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    setLanguage(savedLang);
    
    // Activer le bon bouton
    languageButtons.forEach(btn => {
        if (btn.dataset.lang === savedLang) {
            btn.classList.add('active');
        }
    });
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setLanguage(lang);
            
            // Sauvegarder la préférence de langue
            localStorage.setItem('preferred-language', lang);
            
            // Mettre à jour l'apparence des boutons
            languageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

function setLanguage(lang) {
    // Mettre à jour les attributs de la page
    document.documentElement.lang = lang;
    
    // Mettre à jour tous les éléments avec des attributs data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
} 