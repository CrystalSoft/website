import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import MyLoader from './utils/Loader'
// import PossoPartire from './products/PossoPartire'
import PossoPartire from './news/PossoPartire'
// import CompactWebDocument from './products/CompactWebDocument'
import CompactWebDocument from './news/CompactWebDocument'
// import CrazyCricket from './products/CrazyCricket'
// import RispostaSbagliata from './products/RispostaSbagliata'
// import WinRefine from './products/WinRefine'
// import WPCCC from './products/WPCCC'
import Breadcrumb from './utils/Breadcrumb'

const Products = () => {
  const { t, ready } = useTranslation()
  const { productName } = useParams<{ productName: string }>()

  if (ready) {
    const products = new Map([
      ['posso-partire', <PossoPartire key={0} />],
      ['compact-web-document', <CompactWebDocument key={1} />]
      // ['crazy-cricket', <CrazyCricket key={2} />],
      // ['risposta-sbagliata', <RispostaSbagliata key={3} />]
      // ['win-refine', <WinRefine key={4} />]
      // ['wpcc-winmx-professional-chat-client', <WPCCC key={4} />]
    ])

    const product = productName !== undefined ? (products.has(productName) ? products.get(productName) : null) : null

    return (
      <>
        <Helmet>
          <title>{t('menu.products') + t('site.separator') + t('site.title')}</title>
          <meta property='og:title' content={t('menu.about') + t('site.separator') + t('site.title')} />
          <meta content={t('home.label.promo') + ' ' + t('home.label.promo_long')} name='description' />
          <meta property='og:description' content={t('home.label.promo') + ' ' + t('home.label.promo_long')} />
        </Helmet>
        {product === null && <Breadcrumb values={new Map([['products', t('menu.products')]])} />}
        <div id={'product-list'}>
          {product === null && (
            <div className={'inner'}>
              <i className='bx bxs-error' /> {t('label.working')}
            </div>
          )}
          {product !== null && product}
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default Products
