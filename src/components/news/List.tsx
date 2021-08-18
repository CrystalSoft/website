import React from 'react'

import { useTranslation } from 'react-i18next'
// @ts-ignore
import { Link } from 'react-router-i18n'

const List = ({ limit = 4 }: { limit?: number }) => {
  const { t, ready } = useTranslation()

  const news = [
    <div key={0} className={'news hoverable'}>
      <Link to={'/news/posso-partire'} className={'button light'} />
      <div className={'image posso-partire'} />
      <div className={'description'}>
        <h5>
          <span className={'news-date'}>07/08/2021</span> Posso partire?
        </h5>
        <p
          dangerouslySetInnerHTML={{
            __html: t('home.news.posso_partire.description')
          }}
        />
      </div>
    </div>,
    <div key={1} className={'news hoverable'}>
      <Link to={'/news/compact-web-document'} className={'button light'} />
      <div className={'image compact-web-document'} />
      <div className={'description'}>
        <h5>
          <span className={'news-date'}>03/11/2020</span> Compact Web Document
        </h5>
        <p
          dangerouslySetInnerHTML={{
            __html: t('home.news.compact_web_document.description')
          }}
        />
      </div>
    </div>,
    <div key={2} className={'news hoverable'}>
      <Link to={'/news/crazy-cricket'} className={'button light'} />
      <div className={'image crazy-cricket'} />
      <div className={'description'}>
        <h5>
          <span className={'news-date'}>12/06/2014</span> Crazy Cricket
        </h5>
        <p
          dangerouslySetInnerHTML={{
            __html: t('home.news.crazy_cricket.description')
          }}
        />
      </div>
    </div>,
    <div key={3} className={'news hoverable'}>
      <Link to={'/news/risposta-sbagliata'} className={'button light'} />
      <div className={'image risposta-sbagliata'} />
      <div className={'description'}>
        <h5>
          <span className={'news-date'}>22/07/2013</span> Risposta Sbagliata!
        </h5>
        <p
          dangerouslySetInnerHTML={{
            __html: t('home.news.risposta_sbagliata.description')
          }}
        />
      </div>
    </div>
  ]

  if (ready) {
    return <>{news.slice(0, limit)}</>
  }

  return <></>
}

export default List
