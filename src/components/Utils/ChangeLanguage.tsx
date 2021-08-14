import { useTranslation } from 'react-i18next'
import React, { UIEvent } from 'react'

const ChangeLanguage = () => {
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
              <a href={'/' + lng + '/'} onClick={(e) => changeLanguage(e, lng)}>
                {lng}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ChangeLanguage
