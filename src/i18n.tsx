import i18n from 'i18next'
import backend from 'i18next-http-backend'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.on('languageChanged', function (lng) {
  i18n.languages = ['it', 'en']

  if (window.location.pathname == '/') {
    window.location.replace(lng + window.location.pathname)
  }

  if (window.location.pathname.substring(0, 3) !== '/' + lng) {
    window.location.replace('/' + lng + window.location.pathname.slice(3))
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

export default i18n
