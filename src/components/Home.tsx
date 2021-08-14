import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import { Link } from 'react-router-i18n'

import MyLoader from './utils/Loader'
import Waves from './utils/Waves'

import logo from '../images/promo.png'

const Home = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <div id={'home'}>
        <Helmet>
          <title>{t('home.site.title')}</title>
        </Helmet>
        <div id={'sub-header'} className={'container'}>
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
              <h2>{t('home.label.promo')}</h2>
              <p>{t('home.label.promo_long')}</p>
              <Link to={'/about'} className={'button'}>
                {t('label.discover_more')}
              </Link>
            </div>
            <div id={'promo-right'}>
              <div id={'promo-box'}>
                <img src={logo} />
                <h3>{t('home.promo.posso_partire_title')}</h3>
                <p>{t('home.promo.posso_partire_description')}</p>
                <Link to={'/news/posso-partire'} className={'button light'}>
                  {t('label.discover_more')} <i className='bx-fw bx bxs-right-arrow-square' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={'inner padded'}>
          <div id={'home-intro'}>
            <h4>{t('home.label.intro')}</h4>
            <div className={'box hoverable light'}>
              <div className={'icon main-color-2 darker'}>
                <i className='bx bx-cloud-download' />
              </div>
              <div className={'description'}>
                <strong>{t('home.label.freeware')}</strong>
                <span>{t('home.label.freeware_description')}</span>
              </div>
            </div>
            <div className={'box hoverable light'}>
              <div className={'icon main-color-1 darker'}>
                <i className='bx bxl-html5' />
              </div>
              <div className={'description'}>
                <strong>{t('home.label.web')}</strong>
                <span>{t('home.label.web_description')}</span>
              </div>
            </div>
            <div className={'box hoverable light'}>
              <div className={'icon main-color-9 darker'}>
                <i className='bx bx-mobile' />
              </div>
              <div className={'description'}>
                <strong>{t('home.label.mobile')}</strong>
                <span>{t('home.label.mobile_description')}</span>
              </div>
            </div>
          </div>
        </div>
        <div id={'home-show-case'}>
          <div className={'inner padded'}>
            <h4>{t('home.label.explore_products')}</h4>
            <div id={'home-products'}>
              <div className={'product hoverable'}>
                <Link to={'/products/posso-partire'} className={'button light'} />
                <div className={'image posso-partire'} />
                <div className={'description'}>
                  <h5>Posso partire?</h5>
                  <p>{t('home.products.posso_partire.description')}</p>
                </div>
              </div>
              <div className={'product hoverable'}>
                <Link to={'/products/compact-web-document'} className={'button light'} />
                <div className={'image compact-web-document'} />
                <div className={'description'}>
                  <h5>Compact Web Document</h5>
                  <p>{t('home.products.compact_web_document.description')}</p>
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
            <p>{t('home.label.main')}</p>
            <p>{t('home.label.main_2')}</p>
          </div>
        </div>
        <div id={'home-news'}>
          <div className={'inner padded'}>
            <h4>{t('home.label.news')}</h4>
            <div id={'home-news'}>
              <div className={'news hoverable'}>
                <Link to={'/news/posso-partire'} className={'button light'} />
                <div className={'image posso-partire'} />
                <div className={'description'}>
                  <h5>Posso partire?</h5>
                  <p>{t('home.news.posso_partire.description')}</p>
                </div>
              </div>
              <div className={'news hoverable'}>
                <Link to={'/news/compact-web-document'} className={'button light'} />
                <div className={'image compact-web-document'} />
                <div className={'description'}>
                  <h5>Compact Web Document</h5>
                  <p>{t('home.news.compact_web_document.description')}</p>
                </div>
              </div>
            </div>
            <div id={'home-news'}>
              <div className={'news hoverable'}>
                <Link to={'/news/crazy-cricket'} className={'button light'} />
                <div className={'image crazy-cricket'} />
                <div className={'description'}>
                  <h5>Crazy Cricket</h5>
                  <p>{t('home.news.crazy_cricket.description')}</p>
                </div>
              </div>
              <div className={'news hoverable'}>
                <Link to={'/news/risposta-sbagliata'} className={'button light'} />
                <div className={'image risposta-sbagliata'} />
                <div className={'description'}>
                  <h5>Risposta Sbagliata!</h5>
                  <p>{t('home.news.risposta_sbagliata.description')}</p>
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
