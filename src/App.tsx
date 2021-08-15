import React, { UIEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Switch, Route } from 'react-router-dom'
// @ts-ignore
import { Link, NavLink, Redirect } from 'react-router-i18n'

import logo from './images/logo.png'
import logoAlternative from './images/logo-alternative.png'
import './style/App.scss'

import MyLoader from './components/utils/Loader'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Products from './components/Products'
import ChangeLanguage from './components/utils/ChangeLanguage'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import CookieConsent from 'react-cookie-consent'
import News from './components/News'
import About from './components/About'
import Contacts from './components/Contacts'

const base = '/:locale(en|it)?'

function App() {
  const { t, ready } = useTranslation()

  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  const onMenuChildClick = (event: UIEvent) => {
    event.preventDefault()
    event.stopPropagation()

    if ((event.target as HTMLElement).tagName === 'A') {
      setShowMobileMenu(false)
    }
  }
  const onMenuClick = (event: UIEvent) => {
    event.preventDefault()
    event.stopPropagation()

    setShowMobileMenu(!showMobileMenu)
  }

  if (showMobileMenu) {
    document.body.classList.add('mobile-menu')
  } else {
    document.body.classList.remove('mobile-menu')
  }

  if (ready) {
    return (
      <>
        <div className={'fixable'}>
          <div id={'pre-header'} className={'container'}>
            <div className={'inner'}>
              <ChangeLanguage />
            </div>
          </div>
          <header id={'header'} className={'container'}>
            <div className={'inner'}>
              <div id={'logo'}>
                <Route
                  path={base}
                  render={() => (
                    <Link exact to={'/'}>
                      <img src={logo} alt={'CrystalSoft'} />
                    </Link>
                  )}
                />
              </div>
              <div id={'menu'} onClick={(e) => onMenuClick(e)} className={showMobileMenu ? 'showed' : ''}>
                <ul onClick={(e) => onMenuChildClick(e)}>
                  <li>
                    <Route
                      path={base}
                      render={() => (
                        <NavLink
                          exact
                          to={'/products'}
                          activeClassName='active'
                          dangerouslySetInnerHTML={{
                            __html: t('menu.products')
                          }}
                        />
                      )}
                    />
                  </li>
                  <li>
                    <Route
                      path={base}
                      render={() => (
                        <NavLink
                          exact
                          to={'/news'}
                          dangerouslySetInnerHTML={{
                            __html: t('menu.news')
                          }}
                        />
                      )}
                    />
                  </li>
                  <li>
                    <Route
                      path={base}
                      render={() => (
                        <NavLink
                          exact
                          to={'/about'}
                          dangerouslySetInnerHTML={{
                            __html: t('menu.about')
                          }}
                        />
                      )}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
        <div id={'body'} className={'container'}>
          <Switch>
            <Route exact path={base} component={Home} />
            <Route exact path={`${base}/products`} component={Products} />
            <Route exact path={`${base}/products/:productName`} component={Products} />
            <Route exact path={`${base}/news`} component={News} />
            <Route exact path={`${base}/News/:newsSlug`} component={News} />
            <Route exact path={`${base}/about`} component={About} />
            <Route exact path={`${base}/contacts`} component={Contacts} />
            <Route exact path={`${base}/terms`} component={Terms} />
            <Route exact path={`${base}/privacy-policy`} component={Privacy} />
            <Route exact path={`${base}/404`} component={NotFound} />
            <Route path={base} render={() => <Redirect to='/404' />} />
          </Switch>
        </div>
        <div id={'pre-footer'} className={'container'}>
          <div className={'inner padded big-content'}>
            <h4
              dangerouslySetInnerHTML={{
                __html: t('label.more_info')
              }}
            />
            <Route
              path={base}
              render={() => (
                <Link
                  to={'/contacts'}
                  className={'button bordered'}
                  dangerouslySetInnerHTML={{
                    __html: t('label.more_info_contact')
                  }}
                />
              )}
            />
          </div>
        </div>
        <footer id={'footer'} className={'container'}>
          <div className={'inner padded'}>
            <div id={'footer-logo'}>
              <Route
                path={base}
                render={() => (
                  <Link exact to={'/'}>
                    <img src={logoAlternative} alt={'CrystalSoft'} />
                  </Link>
                )}
              />
            </div>
            <div id={'footer-menu'}>
              <ul className={'column'}>
                <li>
                  <Route
                    path={base}
                    render={() => (
                      <Link
                        exact
                        to={'/about'}
                        dangerouslySetInnerHTML={{
                          __html: t('menu.about')
                        }}
                      />
                    )}
                  />
                </li>
                <li>
                  <Route
                    path={base}
                    render={() => (
                      <Link
                        exact
                        to={'/contacts'}
                        dangerouslySetInnerHTML={{
                          __html: t('menu.contacts')
                        }}
                      />
                    )}
                  />
                </li>
              </ul>
              <ul className={'column'}>
                <li>
                  <Route
                    path={base}
                    render={() => (
                      <Link
                        exact
                        to={'/terms'}
                        dangerouslySetInnerHTML={{
                          __html: t('menu.terms')
                        }}
                      />
                    )}
                  />
                </li>
                <li>
                  <Route
                    path={base}
                    render={() => (
                      <Link
                        exact
                        to={'/privacy-policy'}
                        dangerouslySetInnerHTML={{
                          __html: t('menu.privacy')
                        }}
                      />
                    )}
                  />
                </li>
              </ul>
            </div>
            <div id={'footer-social'}>
              <ul>
                <li>
                  <a href={'https://t.me/CrystalSoft_it'} target={'_blank'} rel='noreferrer'>
                    <i className='bx-fw bx bxl-telegram' /> Telegram
                  </a>
                </li>
                <li>
                  <a href={'https://github.com/CrystalSoft'} target={'_blank'} rel='noreferrer'>
                    <i className='bx-fw bx bxl-github' /> GitHub
                  </a>
                </li>
                <li>
                  <a href={'https://www.linkedin.com/company/crystalsoft-italia'} target={'_blank'} rel='noreferrer'>
                    <i className='bx-fw bx bxl-facebook-square' /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={'https://www.facebook.com/CrystalSoft'} target={'_blank'} rel='noreferrer'>
                    <i className='bx-fw bx bxl-linkedin-square' /> Facebook
                  </a>
                </li>
                <li>
                  <a href={'https://play.google.com/store/apps/dev?id=8818986490284631607'} target={'_blank'} rel='noreferrer'>
                    <i className='bx-fw bx bxl-google' /> Play Store
                  </a>
                </li>
                <li>
                  <a href={'https://www.youtube.com/channel/UCmS14OSzr_mtNMP03hFi2Ig'} target={'_blank'} rel='noreferrer'>
                    <i className='bx-fw bx bxl-youtube' /> YouTube
                  </a>
                </li>
                <li>
                  <a href={'https://www.instagram.com/crystalsoft_it/'} target={'_blank'} rel='noreferrer'>
                    <i className='bx-fw bx bxl-instagram' /> Instagram
                  </a>
                </li>
                <li>
                  <a href={'https://twitter.com/CrystalSoftIT'} target={'_blank'} rel='noreferrer'>
                    <i className='bx-fw bx bxl-twitter' /> Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div id={'footer-note'}>
              <span className={'copyright'}>&copy; 2021 CrystalSoft</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: t('label.disclaimer')
                }}
              />
            </div>
          </div>
        </footer>
        <CookieConsent
          location='bottom'
          buttonText={t('site.cookie_accept')}
          cookieName='crystalsoft-cookie'
          style={{ fontSize: '1em', color: '#000', background: '#afafee' }}
          buttonStyle={{ background: '#042833', color: '#FFF', fontSize: '1em' }}
          expires={150}
        >
          {t('site.cookie_policy')}
        </CookieConsent>
      </>
    )
  }

  return <MyLoader />
}

export default App
