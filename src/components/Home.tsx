import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from './Utils/Loader'

const Home = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{t('CrystalSoft')}</title>
        </Helmet>
      </>
    )
  }

  return <MyLoader />
}

export default Home
