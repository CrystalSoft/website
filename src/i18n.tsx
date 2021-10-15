import i18n from 'i18next'
import backend from 'i18next-http-backend'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const languages = ['en', 'it']

i18n.on('languageChanged', function (lng) {
  i18n.languages = languages

  if (window.location.pathname == '/') {
    let url = lng + window.location.pathname
    window.history.pushState({ path: url }, '', url)
  }

  if (window.location.pathname.substring(0, 3) !== '/' + lng) {
    let pathname = window.location.pathname
    languages.forEach(function (language: string) {
      pathname = pathname.replace('/' + language, '')
    })

    let url = '/' + lng + pathname + window.location.search
    window.history.pushState({ path: url }, '', url)
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
    whitelist: languages,
    fallbackLng: ['en'],
    detection: {
      order: ['path', 'cookie', 'navigator', 'header'],
      lookupFromPathIndex: 0,
      caches: ['cookie']
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
