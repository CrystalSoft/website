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

const base = '/:locale(en|it)?'

function App() {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
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
          </div>
        </footer>
      </>
    )
  }

  return <MyLoader />
}

export default App
