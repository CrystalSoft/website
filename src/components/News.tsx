import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import MyLoader from './utils/Loader'
import PossoPartire from './products/PossoPartire'

const News = () => {
  const { t, ready } = useTranslation()
  const { newsSlug } = useParams<{ newsSlug: string }>()

  if (ready) {
    let news: any = null
    if (newsSlug !== undefined) {
      switch (newsSlug) {
        case 'posso-partire':
          news = <PossoPartire />
          break
        default:
          news = null
      }
    }

    return (
      <>
        <Helmet>
          <title>{t('menu.products') + t('site.separator') + t('site.title')}</title>
        </Helmet>
        <div id={'news-list'} className={'container'}>
          {news === null && (
            <div className={'inner'}>
              <i className='bx bxs-error' /> {t('label.working')}
            </div>
          )}
          {news !== null && news}
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default News
