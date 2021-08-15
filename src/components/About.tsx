import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from './utils/Loader'
import Waves from './utils/Waves'
import Breadcrumb from './utils/Breadcrumb'

const About = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    const description =
      t('about.label.promo') +
      ' ' +
      t('about.label.promo_long')
        .replace(/<[^>]+>/g, '')
        .trim()

    return (
      <>
        <Helmet>
          <title>{t('menu.about') + t('site.separator') + t('site.title')}</title>
          <meta property='og:title' content={t('menu.about') + t('site.separator') + t('site.title')} />
          <meta content={description} name='description' />
          <meta property='og:description' content={description} />
        </Helmet>
        <Breadcrumb values={new Map([['about', t('menu.about')]])} />
        <div id={'about'}>
          <div id={'promo'}>
            <Waves />
            <div className={'inner padded'}>
              <div id={'promo-left'}>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: t('about.label.promo')
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('about.label.promo_long')
                  }}
                />
              </div>
            </div>
          </div>
          <div id={'about-main'}>
            <div className={'inner padded big-content'}>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('about.label.description')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('about.label.description_2')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('about.label.description_3')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('about.label.description_4')
                }}
              />
            </div>
          </div>
          <div id={'about-technologies'}>
            <div className={'inner padded big-content'}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: t('technologies.label.main')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('technologies.label.description')
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('technologies.label.description_2')
                }}
              />
            </div>
          </div>
          <div className={'inner padded big-content'}>
            <div id={'about-what-we-do'}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: t('about.label.what_we_do')
                }}
              />
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('about.label.description_5')
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('about.label.description_6')
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('about.label.description_7')
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('about.label.description_8')
                  }}
                />
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-2 darker'}>
                  <i className='bx bx-mobile-alt' />
                </div>
                <div className={'description'}>
                  <strong
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.apps')
                    }}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.apps_description')
                    }}
                  />
                </div>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-9 darker'}>
                  <i className='bx bx-cog' />
                </div>
                <div className={'description'}>
                  <strong
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.web_services')
                    }}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.web_services_description')
                    }}
                  />
                </div>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-1 darker'}>
                  <i className='bx bxl-chrome' />
                </div>
                <div className={'description'}>
                  <strong
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.web_sites')
                    }}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.web_sites_description')
                    }}
                  />
                </div>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-4 darker'}>
                  <i className='bx bxl-docker' />
                </div>
                <div className={'description'}>
                  <strong
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.docker')
                    }}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.docker_description')
                    }}
                  />
                </div>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-5 darker'}>
                  <i className='bx bxl-telegram' />
                </div>
                <div className={'description'}>
                  <strong
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.telegram')
                    }}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.telegram_description')
                    }}
                  />
                </div>
              </div>
              <div className={'box hoverable light'}>
                <div className={'icon main-color-6 darker'}>
                  <i className='bx bx-joystick' />
                </div>
                <div className={'description'}>
                  <strong
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.games')
                    }}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('about.label.games_description')
                    }}
                  />
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
