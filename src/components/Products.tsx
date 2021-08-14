import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import MyLoader from './utils/Loader'
import PossoPartire from './products/PossoPartire'

const Products = () => {
  const { t, ready } = useTranslation()
  const { productName } = useParams<{ productName: string }>()

  if (ready) {
    let product: any = null
    if (productName !== undefined) {
      switch (productName) {
        case 'posso-partire':
          product = <PossoPartire />
          break
        case 'compact-web-document':
          product = <PossoPartire />
          break
        case 'crazy-cricket':
          product = <PossoPartire />
          break
        case 'risposta-sbagliata':
          product = <PossoPartire />
          break
        case 'win-refine':
          product = <PossoPartire />
          break
        case 'wpcc-winmx-professional-chat-client':
          product = <PossoPartire />
          break
        default:
          product = null
      }
    }

    return (
      <>
        <Helmet>
          <title>{t('menu.products') + t('site.separator') + t('site.title')}</title>
        </Helmet>
        <div id={'product-list'} className={'container'}>
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
