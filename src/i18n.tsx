import i18n from 'i18next'
import backend from 'i18next-http-backend'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.on('languageChanged', function (lng) {
  if (!window.location.pathname.includes('/' + lng)) {
    window.location.replace(lng + window.location.pathname)
  }
})

import translationEN from './locales/en/translation.json'
import translationIT from './locales/it/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  it: {
    translation: translationIT
  }
}

i18n
  .use(backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    whitelist: ['en', 'it'],
    fallbackLng: ['en'],
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      lookupQuerystring: 'lng'
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    initImmediate: false
  })

i18n.languages = ['it', 'en']

export default i18n
