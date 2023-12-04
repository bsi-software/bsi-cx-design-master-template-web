document.addEventListener('alpine:init', () => {
    window.Alpine.data('languageSwitch', () => ({
        rootEl: null,
        activeLanguageElement: null,
        availableLanguageElements: null,
        availableLanguages: null,

        init() {
            this.rootEl = this.$root;
            this.activeLanguageElement = this.$root.querySelector('.active-language');
            this.availableLanguageElements = this.$root.querySelectorAll('.available-language');

            if (!this.activeLanguageElement || this.availableLanguageElements.length <= 1) {
                this.rootEl.classList.add('d-none'); // hide language panel
            } else {
                this.availableLanguages = {};
                this.availableLanguageElements.forEach(el => {
                    let key = this._formatLanguage(el.innerText);

                    // check if language already exists (e.g. 'de' in case the two locales de-CH and de-DE exist), if so change key to locale
                    if (this.availableLanguages[key]) {
                        this.availableLanguages[el.innerText] = el.innerText;
                        let locale = this.availableLanguages[key];
                        this.availableLanguages[locale] = locale;
                        delete this.availableLanguages[key];
                    } else {
                        this.availableLanguages[key] = el.innerText;
                    }
                });

                this.availableLanguageElements.forEach(el => {
                    let language = null;
                    for (let key in this.availableLanguages) {
                        if (el.innerText === this.availableLanguages[key]) {
                            el.innerText = key;
                            language = this.availableLanguages[key];
                        }
                    }
                    el.setAttribute('aria-label', "Switch to language " + el.innerText);
                    if (language === this.activeLanguageElement.innerText) {
                        el.classList.add('current-active');
                        this.activeLanguageElement.innerText = el.innerText;
                    }
                });
            }
        },

        _formatLanguage(language) {
            return language.slice(0,2).toUpperCase();
        }
    }))
})