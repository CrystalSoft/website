import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import React from 'react'
import MyLoader from '../Utils/Loader'

const PossoPartire = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{'Posso partire?' + t('site.separator') + t('site.title')}</title>
        </Helmet>
        <div id={'product'} className={'container'}>
          <div className={'inner'}></div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default PossoPartire
