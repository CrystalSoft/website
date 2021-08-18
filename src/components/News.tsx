import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import MyLoader from './utils/Loader'
import PossoPartire from './news/PossoPartire'
import CompactWebDocument from './news/CompactWebDocument'
import Breadcrumb from './utils/Breadcrumb'
import List from './news/List'
import CrazyCricket from './news/CrazyCricket'
import RispostaSbagliata from './news/RispostaSbagliata'

const News = () => {
  const { t, ready } = useTranslation()
  const { newsSlug } = useParams<{ newsSlug: string }>()

  if (ready) {
    const news = new Map([
      ['posso-partire', <PossoPartire key={0} />],
      ['compact-web-document', <CompactWebDocument key={1} />],
      ['crazy-cricket', <CrazyCricket key={2} />],
      ['risposta-sbagliata', <RispostaSbagliata key={3} />]
    ])

    const newsItem = newsSlug !== undefined ? (news.has(newsSlug) ? news.get(newsSlug) : null) : null

    return (
      <>
        <Helmet>
          <title>{t('menu.news') + t('site.separator') + t('site.title')}</title>
          <meta property='og:title' content={t('menu.contacts') + t('site.separator') + t('site.title')} />
          <meta content={t('home.label.promo') + ' ' + t('home.label.promo_long')} name='description' />
          <meta property='og:description' content={t('home.label.promo') + ' ' + t('home.label.promo_long')} />
        </Helmet>
        {newsItem === null && <Breadcrumb values={new Map([['news', t('menu.news')]])} />}
        <div id={'news-list'}>
          {newsItem === null && (
            <div className={'inner padded big-content'}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: t('news.label.main')
                }}
              />
              <div id={'news-container'}>
                <List />
              </div>
            </div>
          )}
          {newsItem !== null && newsItem}
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default News
