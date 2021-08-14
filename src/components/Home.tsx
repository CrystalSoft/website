import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import { Link } from 'react-router-i18n'

import MyLoader from './Utils/Loader'
import Waves from './Utils/Waves'

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
                <Link to={'/products/posso-partire'} className={'button light'}>
                  {t('label.discover_more')} <i className='bx-fw bx bxs-right-arrow-square' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={'inner padded'}>
          <div id={'home-intro'}>
            <h4>{t('home.label.intro')}</h4>
            <div className={'box'}>
              <div className={'icon'}>
                <i className='bx bx-cloud-download' />
              </div>
              <div className={'description'}>
                <strong>{t('home.label.freeware')}</strong>
                <span>{t('home.label.freeware_description')}</span>
              </div>
            </div>
            <div className={'box'}>
              <div className={'icon'}>
                <i className='bx bxl-html5' />
              </div>
              <div className={'description'}>
                <strong>{t('home.label.web')}</strong>
                <span>{t('home.label.web_description')}</span>
              </div>
            </div>
            <div className={'box'}>
              <div className={'icon'}>
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
            <p>
              Aenean gravida tortor eros, at condimentum velit viverra eu. Nunc et justo accumsan, feugiat enim a, eleifend sapien. Cras ut
              laoreet tellus. Integer mi ligula, fringilla quis placerat sed, fringilla quis justo. Nulla facilisi. Donec blandit vulputate
              nulla, et egestas nulla lacinia vitae. Curabitur et neque lorem. Pellentesque porttitor eros consequat, sagittis enim vitae,
              aliquet elit. Donec vitae condimentum sapien, laoreet ullamcorper justo. In sit amet dui mollis, elementum mauris ac,
              hendrerit tellus. Proin in orci sed magna sodales porttitor scelerisque nec turpis. Phasellus molestie felis consequat,
              hendrerit felis et, pharetra urna. Donec bibendum erat vitae mi ullamcorper, eu consectetur lectus cursus. Fusce a leo
              gravida, laoreet risus vitae, feugiat turpis. Donec luctus gravida nisi.
            </p>
            <Link to={'/about'} className={'button'}>
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
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam accumsan elit et tellus consequat
              vehicula vel ac libero. Maecenas tortor diam, egestas vitae lorem ac, tempor sodales urna. Suspendisse lectus nulla, viverra
              eu ipsum vitae, iaculis rutrum dolor. Donec faucibus consequat purus eu ornare. Ut velit augue, pulvinar nec risus laoreet,
              lobortis dictum sapien. Pellentesque rhoncus sollicitudin augue, non molestie nulla. Aenean suscipit nisi quis leo viverra
              blandit. Pellentesque erat nisi, semper et purus id, molestie feugiat tellus. Fusce sed facilisis nunc. Mauris sagittis, mi
              non porta pretium, massa tortor ultricies ex, faucibus pulvinar mi massa sit amet turpis. Nam condimentum vitae urna eget
              semper. Donec posuere lectus neque, sollicitudin varius ante finibus vel.
            </p>
            <Link to={'/about'} className={'button'}>
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
