import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_source from './locale/en_source';
import de_source from './locale/de_source';
import fr_source from './locale/fr_source';

if (!localStorage.getItem('selectedLangCode')) {
	localStorage.setItem('selectedLangCode', 'en')
}
const defaultLanguage = localStorage.getItem('selectedLangCode') || 'en';

const resources = {
	en: {
		translation: en_source
	},
	fr: {
		translation: fr_source
	},
	de: {
		translation: de_source
	}
};

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: 'en',
	lng: defaultLanguage,
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
