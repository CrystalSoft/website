import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from './utils/Loader'

const NotFound = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{t('site.title')}</title>
        </Helmet>
        <div id={'not-found'} className={'container'}>
          <div className={'inner'}>
            <i className='bx bxs-error' /> {t('label.not_found')}
          </div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default NotFound
