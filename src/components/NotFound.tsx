import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import React from 'react'
import MyLoader from './Utils/Loader'

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
            <i className='bx bxs-error' /> Pagina in costruzione.
          </div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default NotFound
