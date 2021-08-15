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
          <title>{t('menu.contacts') + t('site.separator') + t('site.title')}</title>
        </Helmet>
        <div id={'contacts'}>
          <div className={'inner'}>
            <i className='bx bxs-error' /> {t('label.working')}
            <br />
            <br />
            <p>{t('contacts.label.email')}</p>
          </div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default Contacts
