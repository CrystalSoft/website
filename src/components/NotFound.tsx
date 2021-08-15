import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from './utils/Loader'
import Breadcrumb from './utils/Breadcrumb'

const NotFound = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{t('site.title')}</title>
        </Helmet>
        <Breadcrumb values={new Map([['404', '404 Not Found']])} />
        <div id={'not-found'}>
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
