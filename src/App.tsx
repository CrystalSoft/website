import React from 'react'
import { useTranslation } from 'react-i18next'
import { Switch, Route } from 'react-router-dom'
// @ts-ignore
import { Link, NavLink } from 'react-router-i18n'

import logo from './images/logo.png'
import logoAlternative from './images/logo-alternative.png'
import './style/App.scss'

import MyLoader from './components/Utils/Loader'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Products from './components/Products'
import ChangeLanguage from './components/Utils/ChangeLanguage'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import CookieConsent from 'react-cookie-consent'

const base = '/:locale(en|it)?'

function App() {
  const { t, ready } = useTranslation()

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
              <div id={'menu'}>
                <ul>
                  <li>
                    <Route
                      path={base}
                      render={() => (
                        <NavLink exact to={'/products'} activeClassName='active'>
                          {t('menu.products')}
                        </NavLink>
                      )}
                    />
                  </li>
                  <li>
                    <Route
                      path={base}
                      render={() => (
                        <NavLink exact to={'/tecnologies'}>
                          {t('menu.tecnologies')}
                        </NavLink>
                      )}
                    />
                  </li>
                  <li>
                    <Route
                      path={base}
                      render={() => (
                        <NavLink exact to={'/open-source'}>
                          {t('menu.open_source')}
                        </NavLink>
                      )}
                    />
                  </li>
                  <li>
                    <Route
                      path={base}
                      render={() => (
                        <NavLink exact to={'/news'}>
                          {t('menu.news')}
                        </NavLink>
                      )}
                    />
                  </li>
                  <li>
                    <Route
                      path={base}
                      render={() => (
                        <NavLink exact to={'/about'}>
                          {t('menu.about')}
                        </NavLink>
                      )}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
        <div id={'sub-header'} className={'container'}>
          <div className={'inner'}>
            <h1>
              <i className='bx-fw bx bxs-city' /> {t('label.header')}
            </h1>
          </div>
        </div>
        <div id={'body'} className={'container'}>
          <Switch>
            <Route exact path={base} component={Home} />
            <Route exact path={`${base}/products`} component={Products} />
            <Route exact path={`${base}/products/:productName`} component={Products} />
            <Route exact path={`${base}/terms`} component={Terms} />
            <Route exact path={`${base}/privacy-policy`} component={Privacy} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </div>
        <div id={'pre-footer'} className={'container'}>
          <div className={'inner'}>
            <h3>{t('label.more_info')}</h3>
            <Route
              path={base}
              render={() => (
                <Link to={'/contacts'} className={'button bordered'}>
                  {t('label.more_info_contact')}
                </Link>
              )}
            />
          </div>
        </div>
        <footer id={'footer'} className={'container'}>
          <div className={'inner'}>
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
                      <Link exact to={'/about'}>
                        {t('menu.about')}
                      </Link>
                    )}
                  />
                </li>
                <li>
                  <Route
                    path={base}
                    render={() => (
                      <Link exact to={'/contacts'}>
                        {t('menu.contacts')}
                      </Link>
                    )}
                  />
                </li>
              </ul>
              <ul className={'column'}>
                <li>
                  <Route
                    path={base}
                    render={() => (
                      <Link exact to={'/terms'}>
                        {t('menu.terms')}
                      </Link>
                    )}
                  />
                </li>
                <li>
                  <Route
                    path={base}
                    render={() => (
                      <Link exact to={'/privacy-policy'}>
                        {t('menu.privacy')}
                      </Link>
                    )}
                  />
                </li>
              </ul>
            </div>
            <div id={'footer-social'}>
              <ul>
                <li>
                  <a href={'https://github.com/CrystalSoft'} target={'_blank'} rel='noreferrer'>
                    <i className='bx-fw bx bxl-github' /> GitHub
                  </a>
                </li>
                <li>
                  <a href={'http://www.linkedin.com/profile/view?id=154451211'} target={'_blank'} rel='noreferrer'>
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
              </ul>
            </div>
            <div id={'footer-note'}>
              <span className={'copyright'}>&copy; 2021 CrystalSoft</span>
              <span>{t('label.disclaimer')}</span>
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
