import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from '../utils/Loader'

import compactWebDocument from '../../images/products/compact-web-document.png'
import Breadcrumb from '../utils/Breadcrumb'

const CompactWebDocument = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{'Compact Web Document' + t('site.separator') + t('site.title')}</title>
          <meta property='og:title' content={'Compact Web Document' + t('site.separator') + t('site.title')} />
          <meta
            content={t('news.compact_web_document.label.promo') + ' ' + t('news.compact_web_document.label.promo_long')}
            name='description'
          />
          <meta
            property='og:description'
            content={t('news.compact_web_document.label.promo') + ' ' + t('news.compact_web_document.label.promo_long')}
          />
        </Helmet>
        <Breadcrumb
          values={
            new Map([
              ['news', t('menu.news')],
              ['compact-web-document', 'Compact Web Document']
            ])
          }
        />
        <div id={'news'}>
          <div id={'promo'}>
            <div className={'inner padded'}>
              <div id={'promo-left'}>
                <h2>{t('news.compact_web_document.label.promo')}</h2>
                <p>{t('news.compact_web_document.label.promo_long')}</p>
                <a href={'https://www.compactwebdocument.com/'} target={'_blank'} className={'button'} rel='noreferrer'>
                  {t('news.label.link')}
                </a>
              </div>
              <div id={'promo-right'} className={'centered'}>
                <div id={'promo-box'} className={'centered'}>
                  <img src={compactWebDocument} />
                </div>
              </div>
            </div>
          </div>
          <div id={'news-main'}>
            <div className={'inner padded big-content'}>
              <p>{t('news.compact_web_document.label.description')}</p>
              <p>{t('news.compact_web_document.label.description_2')}</p>
              <p>{t('news.compact_web_document.label.description_3')}</p>
              <p>{t('news.compact_web_document.label.description_4')}</p>
              <p>{t('news.compact_web_document.label.description_5')}</p>
              <p>{t('news.compact_web_document.label.description_6')}</p>
              <p>{t('news.compact_web_document.label.description_7')}</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default CompactWebDocument
