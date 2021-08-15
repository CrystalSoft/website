import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from '../utils/Loader'

import possoPartire from '../../images/products/posso-partire.png'
import Breadcrumb from '../utils/Breadcrumb'

const PossoPartire = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    const description =
      t('news.posso_partire.label.promo') +
      ' ' +
      t('news.posso_partire.label.promo_long')
        .replace(/<[^>]+>/g, '')
        .trim()

    return (
      <>
        <Helmet>
          <title>{'Posso partire?' + t('site.separator') + t('site.title')}</title>
          <meta property='og:title' content={'Posso partire?' + t('site.separator') + t('site.title')} />
          <meta content={description} name='description' />
          <meta property='og:description' content={description} />
        </Helmet>
        <Breadcrumb
          values={
            new Map([
              ['news', t('menu.news')],
              ['posso-partire', 'Posso partire?']
            ])
          }
        />
        <div id={'news'}>
          <div id={'promo'}>
            <div className={'inner padded'}>
              <div id={'promo-left'}>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: t('news.posso_partire.label.promo')
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('news.posso_partire.label.promo_long')
                  }}
                />
                <a href={'https://www.possopartire.it/'} target={'_blank'} className={'button'} rel='noreferrer'>
                  {t('news.label.link')}
                </a>
              </div>
              <div id={'promo-right'} className={'centered'}>
                <div id={'promo-box'} className={'centered'}>
                  <img src={possoPartire} />
                </div>
              </div>
            </div>
          </div>
          <div id={'news-main'}>
            <div className={'inner padded big-content'}>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.posso_partire.label.description')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.posso_partire.label.description_2')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.posso_partire.label.description_3')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.posso_partire.label.description_4')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.posso_partire.label.description_5')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.posso_partire.label.description_6')
                }}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default PossoPartire
