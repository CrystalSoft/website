import React, { ReactElement } from 'react'

import { useTranslation } from 'react-i18next'
// @ts-ignore
import { Link } from 'react-router-i18n'

const Breadcrumb = ({ values = new Map() }: { values?: Map<string, string> }) => {
  const { t, ready } = useTranslation()

  if (ready) {
    let index: number = 0
    let url: string = '/'
    let elements: ReactElement[] = []

    const newValues = new Map([...new Map([['', t('site.title')]]).entries(), ...values.entries()])
    newValues.forEach((value: string, key: string) => {
      if (key.length > 0) {
        url += key + '/'
      }

      elements.push(
        <li key={key} property='itemListElement' typeof='ListItem'>
          <Link property='item' typeof='WebPage' to={url}>
            <span property='name'>{value}</span>
          </Link>
          <meta property='position' content={(index++ + 1).toString()} />
        </li>
      )
    })

    return (
      <div id={'breadcrumb'}>
        <ol vocab='https://schema.org/' typeof='BreadcrumbList'>
          {elements.length > 0 && elements}
        </ol>
      </div>
    )
  }

  return <></>
}

export default Breadcrumb
