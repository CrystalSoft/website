import { useTranslation } from 'react-i18next'
import React, { UIEvent } from 'react'

import { useLocation } from 'react-router-dom'

const ChangeLanguage = () => {
  const { pathname } = useLocation()
  const { ready, i18n } = useTranslation()

  const changeLanguage = (e: UIEvent, lng: string) => {
    i18n.changeLanguage(lng)

    e.stopPropagation()
    e.preventDefault()

    console.log(lng)

    return false
  }

  return (
    <div id={'languages'}>
      <ul>
        <li>
          <i className='bx-fw bx bx-globe' />
        </li>
        {ready &&
          i18n.languages.map((lng: string) => (
            <li key={lng}>
              <a href={'/' + lng + pathname.slice(3)} onClick={(e) => changeLanguage(e, lng)}>
                {lng}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ChangeLanguage
