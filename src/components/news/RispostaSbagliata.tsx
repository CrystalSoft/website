import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from '../utils/Loader'

import rispostaSbagliata from '../../images/products/risposta-sbagliata.webp'
import Breadcrumb from '../utils/Breadcrumb'

const RipostaSbagliata = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    const description =
      t('news.risposta_sbagliata.label.promo') +
      ' ' +
      t('news.risposta_sbagliata.label.promo_long')
        .replace(/<[^>]+>/g, '')
        .trim()

    return (
      <>
        <Helmet>
          <title>{'Risposta Sbagliata!' + t('site.separator') + t('site.title')}</title>
          <meta property='og:title' content={'Risposta Sbagliata!' + t('site.separator') + t('site.title')} />
          <meta content={description} name='description' />
          <meta property='og:description' content={description} />
        </Helmet>
        <Breadcrumb
          values={
            new Map([
              ['news', t('menu.news')],
              ['risposta-sbagliata', 'Risposta Sbagliata!']
            ])
          }
        />
        <div id={'news'}>
          <div id={'promo'}>
            <div className={'inner padded'}>
              <div id={'promo-left'}>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: t('news.risposta_sbagliata.label.promo')
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('news.risposta_sbagliata.label.promo_long')
                  }}
                />
                <a
                  href={'https://play.google.com/store/apps/details?id=it.crystalsoft.rispostasbagliatafree'}
                  target={'_blank'}
                  className={'button'}
                  rel='noreferrer'
                >
                  {t('news.label.play_store')}
                </a>
              </div>
              <div id={'promo-right'} className={'centered'}>
                <div id={'promo-box'} className={'centered'}>
                  <img src={rispostaSbagliata} />
                </div>
              </div>
            </div>
          </div>
          <div id={'news-main'}>
            <div className={'inner padded big-content'}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: t('news.risposta_sbagliata.label.title')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.risposta_sbagliata.label.description')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.risposta_sbagliata.label.description_2')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.risposta_sbagliata.label.description_3')
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

export default RipostaSbagliata
