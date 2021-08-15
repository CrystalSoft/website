import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import { Link } from 'react-router-i18n'

import MyLoader from './utils/Loader'
import Waves from './utils/Waves'

import logo from '../images/promo.png'
import Breadcrumb from './utils/Breadcrumb'

const Home = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    const description =
      t('home.label.promo') +
      ' ' +
      t('home.label.promo_long')
        .replace(/<[^>]+>/g, '')
        .trim()

    return (
      <div id={'home'}>
        <Helmet>
          <title>{t('home.site.title')}</title>
          <meta property='og:title' content={t('home.site.title')} />
          <meta content={description} name='description' />
          <meta property='og:description' content={description} />
        </Helmet>
        <Breadcrumb values={new Map([['', t('menu.home')]])} />
        <div id={'sub-header'}>
          <div className={'inner'}>
            <h2>
              <i className='bx-fw bx bxs-city' /> {t('label.header')}
            </h2>
          </div>
        </div>
        <div id={'promo'}>
          <Waves />
          <div className={'inner padded'}>
            <div id={'promo-left'}>
              <h2
                dangerouslySetInnerHTML={{
                  __html: t('home.label.promo')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('home.label.promo_long')
                }}
              />
              <Link to={'/about'} className={'button'}>
                {t('label.discover_more')}
              </Link>
            </div>
            <div id={'promo-right'}>
              <div id={'promo-box'}>
                <img alt='Posso partire?' src={logo} />
                <h3
                  dangerouslySetInnerHTML={{
                    __html: t('home.promo.posso_partire_title')
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('home.promo.posso_partire_description')
                  }}
                />
                <Link to={'/news/posso-partire'} className={'button light'}>
                  {t('label.discover_more')} <i className='bx-fw bx bxs-right-arrow-square' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={'inner big-content padded'}>
          <div id={'home-intro'}>
            <h4
              dangerouslySetInnerHTML={{
                __html: t('home.label.intro')
              }}
            />
            <div className={'box hoverable light'}>
              <div className={'icon main-color-2 darker'}>
                <i className='bx bx-cloud-download' />
              </div>
              <div className={'description'}>
                <strong
                  dangerouslySetInnerHTML={{
                    __html: t('home.label.freeware')
                  }}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('home.label.freeware_description')
                  }}
                />
              </div>
            </div>
            <div className={'box hoverable light'}>
              <div className={'icon main-color-1 darker'}>
                <i className='bx bxl-html5' />
              </div>
              <div className={'description'}>
                <strong
                  dangerouslySetInnerHTML={{
                    __html: t('home.label.web')
                  }}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('home.label.web_description')
                  }}
                />
              </div>
            </div>
            <div className={'box hoverable light'}>
              <div className={'icon main-color-9 darker'}>
                <i className='bx bx-mobile' />
              </div>
              <div className={'description'}>
                <strong
                  dangerouslySetInnerHTML={{
                    __html: t('home.label.mobile')
                  }}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('home.label.mobile_description')
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id={'home-show-case'}>
          <div className={'inner padded big-content'}>
            <h4
              dangerouslySetInnerHTML={{
                __html: t('home.label.explore_products')
              }}
            />
            <div id={'home-products'}>
              <div className={'product hoverable'}>
                <Link to={'/products/posso-partire'} className={'button light'} />
                <div className={'image posso-partire'} />
                <div className={'description'}>
                  <h5>Posso partire?</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t('home.products.posso_partire.description')
                    }}
                  />
                </div>
              </div>
              <div className={'product hoverable'}>
                <Link to={'/products/compact-web-document'} className={'button light'} />
                <div className={'image compact-web-document'} />
                <div className={'description'}>
                  <h5>Compact Web Document</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t('home.products.compact_web_document.description')
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={'/products'} className={'button'}>
              {t('label.explore')}
            </Link>
          </div>
        </div>
        <div id={'home-main'}>
          <div className={'inner padded'}>
            <p
              dangerouslySetInnerHTML={{
                __html: t('home.label.main')
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t('home.label.main_2')
              }}
            />
          </div>
        </div>
        <div id={'home-news'}>
          <div className={'inner padded big-content'}>
            <h4
              dangerouslySetInnerHTML={{
                __html: t('home.label.news')
              }}
            />
            <div id={'home-news'}>
              <div className={'news hoverable'}>
                <Link to={'/news/posso-partire'} className={'button light'} />
                <div className={'image posso-partire'} />
                <div className={'description'}>
                  <h5>Posso partire?</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t('home.news.posso_partire.description')
                    }}
                  />
                </div>
              </div>
              <div className={'news hoverable'}>
                <Link to={'/news/compact-web-document'} className={'button light'} />
                <div className={'image compact-web-document'} />
                <div className={'description'}>
                  <h5>Compact Web Document</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t('home.news.compact_web_document.description')
                    }}
                  />
                </div>
              </div>
            </div>
            <div id={'home-news'}>
              <div className={'news hoverable'}>
                <Link to={'/news/crazy-cricket'} className={'button light'} />
                <div className={'image crazy-cricket'} />
                <div className={'description'}>
                  <h5>Crazy Cricket</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t('home.news.crazy_cricket.description')
                    }}
                  />
                </div>
              </div>
              <div className={'news hoverable'}>
                <Link to={'/news/risposta-sbagliata'} className={'button light'} />
                <div className={'image risposta-sbagliata'} />
                <div className={'description'}>
                  <h5>Risposta Sbagliata!</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t('home.news.risposta_sbagliata.description')
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={'/news'} className={'button'}>
              {t('label.news')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return <MyLoader />
}

export default Home
