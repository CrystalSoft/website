import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import React from 'react'
import MyLoader from './Utils/Loader'

const Products = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{t('site.title')}</title>
        </Helmet>
      </>
    )
  }

  return <MyLoader />
}

export default Products
