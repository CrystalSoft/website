import React from 'react'
import { useTranslation } from 'react-i18next'

import logo from './images/logo.svg'
import './style/App.scss'
import MyLoader from './components/Utils/Loader'

function App() {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        {t('label.test')}

        <img src={logo} alt='logo' />
        <header id={'header'}></header>
        <footer id={'footer'}></footer>
      </>
    )
  }

  return <MyLoader />
}

export default App
