import React from 'react'
import { useTranslation } from 'react-i18next'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

import logo from './images/logo.png'
import './style/App.scss'
import MyLoader from './components/Utils/Loader'
import Home from './components/Home'

function App() {
  // eslint-disable-next-line no-unused-vars
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <header id={'header'} className={'container'}>
          <div className={'inner'}>
            <div id={'logo'}>
              <Link to={'/'}>
                <img src={logo} alt={'CrystalSoft'} />
              </Link>
            </div>
            <div id={'menu'}>
              <ul>
                <li>
                  <NavLink exact to={'/'} activeClassName='active'>
                    Prodotti
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={'/'}>
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={'/'}>
                    Lorem
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={'/'}>
                    Ipsum
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to={'/'}>
                    Dolorem
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div id={'sub-header'} className={'container'}>
          <div className={'inner'}>
            <h1>
              {t('We are more than a software house company')} <i className='bx bxs-right-arrow' />
            </h1>
          </div>
        </div>
        <div id={'body'} className={'container'}>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
        <footer id={'footer'} className={'container'}></footer>
      </>
    )
  }

  return <MyLoader />
}

export default App
