import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from '../utils/Loader'

import crazyCricket from '../../images/products/crazy-cricket.webp'
import Breadcrumb from '../utils/Breadcrumb'

const CrazyCricket = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    const description =
      t('news.crazy_cricket.label.promo') +
      ' ' +
      t('news.crazy_cricket.label.promo_long')
        .replace(/<[^>]+>/g, '')
        .trim()

    return (
      <>
        <Helmet>
          <title>{'Crazy Cricket' + t('site.separator') + t('site.title')}</title>
          <meta property='og:title' content={'Crazy Cricket' + t('site.separator') + t('site.title')} />
          <meta content={description} name='description' />
          <meta property='og:description' content={description} />
        </Helmet>
        <Breadcrumb
          values={
            new Map([
              ['news', t('menu.news')],
              ['crazy-cricket', 'Crazy Cricket']
            ])
          }
        />
        <div id={'news'}>
          <div id={'promo'}>
            <div className={'inner padded'}>
              <div id={'promo-left'}>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: t('news.crazy_cricket.label.promo')
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('news.crazy_cricket.label.promo_long')
                  }}
                />
                <a
                  href={'https://play.google.com/store/apps/details?id=it.crystalsoft.crazycricket'}
                  target={'_blank'}
                  className={'button'}
                  rel='noreferrer'
                >
                  {t('news.label.play_store')}
                </a>
              </div>
              <div id={'promo-right'} className={'centered'}>
                <div id={'promo-box'} className={'centered'}>
                  <img src={crazyCricket} />
                </div>
              </div>
            </div>
          </div>
          <div id={'news-main'}>
            <div className={'inner padded big-content'}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: t('news.crazy_cricket.label.title')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.crazy_cricket.label.description')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.crazy_cricket.label.description_2')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.crazy_cricket.label.description_3')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.crazy_cricket.label.description_4')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('news.crazy_cricket.label.description_5')
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

export default CrazyCricket
