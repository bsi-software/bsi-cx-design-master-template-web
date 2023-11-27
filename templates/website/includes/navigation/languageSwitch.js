import Alpine from 'alpinejs';

Alpine.data('languageSwitch', () => ({
    format(language) {
        return language.slice(0,2).toUpperCase();
    },
    init() {
        let activeLanguage = this.$root.querySelector('.active-language');
        let languages = this.$root.querySelectorAll('.select-language');
        if (!activeLanguage || languages.length <= 1) {
            this.$root.classList.add('d-none'); // hide language panel
        } else {
            activeLanguage.innerText = this.format(activeLanguage.innerText);
            languages.forEach(lang => {
                lang.innerText = this.format(lang.innerText);
                if (lang.innerText == activeLanguage.innerText) {
                    lang.classList.add('current-active');
                }
            });
        }

    }
}));