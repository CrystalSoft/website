import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from './utils/Loader'

const Contacts = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{t('site.title')}</title>
        </Helmet>
        <div id={'contacts'} className={'container'}>
          <div className={'inner'}>
            <i className='bx bxs-error' /> {t('label.working')}
          </div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default Contacts