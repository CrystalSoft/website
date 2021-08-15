import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from './utils/Loader'
import Breadcrumb from './utils/Breadcrumb'

const Contacts = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{t('menu.contacts') + t('site.separator') + t('site.title')}</title>
          <meta property='og:title' content={t('menu.contacts') + t('site.separator') + t('site.title')} />
          <meta content={t('home.label.promo') + ' ' + t('home.label.promo_long')} name='description' />
          <meta property='og:description' content={t('home.label.promo') + ' ' + t('home.label.promo_long')} />
        </Helmet>
        <Breadcrumb values={new Map([['contacts', t('menu.contacts')]])} />
        <div id={'contacts'}>
          <div className={'inner'}>
            <i className='bx bxs-error' /> {t('label.working')}
            <br />
            <br />
            <p
              dangerouslySetInnerHTML={{
                __html: t('contacts.label.email')
              }}
            />
          </div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default Contacts
