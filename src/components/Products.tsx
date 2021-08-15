import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import MyLoader from './utils/Loader'

// import PossoPartire from './products/PossoPartire'
import PossoPartire from './news/PossoPartire'
import CompactWebDocument from './news/CompactWebDocument'
import Breadcrumb from './utils/Breadcrumb'

const Products = () => {
  const { t, ready } = useTranslation()
  const { productName } = useParams<{ productName: string }>()

  if (ready) {
    let product: any = null
    if (productName !== undefined) {
      switch (productName) {
        // case 'posso-partire':
        //   product = <PossoPartire />
        //   break
        // case 'compact-web-document':
        //   product = <PossoPartire />
        //   break
        // case 'crazy-cricket':
        //   product = <PossoPartire />
        //   break
        // case 'risposta-sbagliata':
        //   product = <PossoPartire />
        //   break
        // case 'win-refine':
        //   product = <PossoPartire />
        //   break
        // case 'wpcc-winmx-professional-chat-client':
        //   product = <PossoPartire />
        //   break
        case 'posso-partire':
          product = <PossoPartire />
          break
        case 'compact-web-document':
          product = <CompactWebDocument />
          break
        default:
          product = null
      }
    }

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
