import { useTranslation } from 'react-i18next'
import React from 'react'

const ChangeLanguage = () => {
  const { ready, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
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
              <a href={'/' + lng} onClick={() => changeLanguage(lng)}>
                {lng}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ChangeLanguage
