import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from './utils/Loader'
import Waves from './utils/Waves'

const About = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{t('menu.about') + t('site.separator') + t('site.title')}</title>
        </Helmet>
        <div id={'about'}>
          <div id={'promo'}>
            <Waves />
            <div className={'inner padded'}>
              <div id={'promo-left'}>
                <h2>{t('about.label.promo')}</h2>
                <p>{t('about.label.promo_long')}</p>
              </div>
            </div>
          </div>
          <div id={'about-main'}>
            <div className={'inner padded big-content'}>
              <p>{t('about.label.description')}</p>
              <p>{t('about.label.description_2')}</p>
              <p>{t('about.label.description_3')}</p>
              <p>{t('about.label.description_4')}</p>
            </div>
          </div>
          <div id={'about-technologies'}>
            <div className={'inner padded big-content'}>
              <h4>{t('technologies.label.main')}</h4>
              <p>{t('technologies.label.description')}</p>
              <p>{t('technologies.label.description_2')}</p>
            </div>
          </div>
          <div className={'inner padded big-content'}>
            <div id={'about-what-we-do'}>
              <h4>{t('about.label.what_we_do')}</h4>
              <div>
                <p>{t('about.label.description_5')}</p>
                <p>{t('about.label.description_6')}</p>
                <p>{t('about.label.description_7')}</p>
                <p>{t('about.label.description_8')}</p>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-2 darker'}>
                  <i className='bx bx-mobile-alt' />
                </div>
                <div className={'description'}>
                  <strong>{t('about.label.apps')}</strong>
                  <span>{t('about.label.apps_description')}</span>
                </div>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-9 darker'}>
                  <i className='bx bx-cog' />
                </div>
                <div className={'description'}>
                  <strong>{t('about.label.web_services')}</strong>
                  <span>{t('about.label.web_services_description')}</span>
                </div>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-1 darker'}>
                  <i className='bx bxl-chrome' />
                </div>
                <div className={'description'}>
                  <strong>{t('about.label.web_sites')}</strong>
                  <span>{t('about.label.web_sites_description')}</span>
                </div>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-4 darker'}>
                  <i className='bx bxl-docker' />
                </div>
                <div className={'description'}>
                  <strong>{t('about.label.docker')}</strong>
                  <span>{t('about.label.docker_description')}</span>
                </div>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-5 darker'}>
                  <i className='bx bxl-react' />
                </div>
                <div className={'description'}>
                  <strong>{t('about.label.frontend')}</strong>
                  <span>{t('about.label.frontend_description')}</span>
                </div>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-6 darker'}>
                  <i className='bx bx-joystick' />
                </div>
                <div className={'description'}>
                  <strong>{t('about.label.games')}</strong>
                  <span>{t('about.label.games_description')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default About
