import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import { Link } from 'react-router-i18n'

import MyLoader from './Utils/Loader'
import Waves from './Waves'

import logo from '../images/promo.png'

const Home = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{t('site.title')}</title>
        </Helmet>
        <div id={'promo'}>
          <Waves />
          <div className={'inner'}>
            <div id={'promo-left'}>
              <h2>{t('home.label.promo')}</h2>
              <p>{t('home.label.promo_long')}</p>
              <Link to={'/about'} className={'button'}>
                {t('label.discover_more')}
              </Link>
            </div>
            <div id={'promo-right'}>
              <div id={'promo-box'}>
                <img src={logo} />
                <h3>{t('home.promo.posso_partire_title')}</h3>
                <p>{t('home.promo.posso_partire_description')}</p>
                <Link to={'/products/posso-partire'} className={'button light'}>
                  {t('label.discover_more')} <i className='bx-fw bx bxs-right-arrow-square' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={'inner'}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor augue in eleifend consectetur. Aliquam consectetur felis
            vitae iaculis lacinia. Duis ex augue, maximus non fermentum non, lobortis at ipsum. Proin auctor, tortor vitae vehicula viverra,
            ex tellus condimentum ex, fermentum volutpat lectus justo in libero. Phasellus sed augue mattis, imperdiet nisi eget,
            scelerisque odio. Maecenas aliquet magna ac tellus elementum pulvinar. Vestibulum aliquam porta feugiat. Morbi vel congue dolor,
            maximus ornare sem. Nunc convallis ligula ac mi rutrum ullamcorper. Fusce sed mauris magna. Sed in fringilla turpis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis feugiat tortor id euismod.
          </p>

          <p>
            Aenean gravida tortor eros, at condimentum velit viverra eu. Nunc et justo accumsan, feugiat enim a, eleifend sapien. Cras ut
            laoreet tellus. Integer mi ligula, fringilla quis placerat sed, fringilla quis justo. Nulla facilisi. Donec blandit vulputate
            nulla, et egestas nulla lacinia vitae. Curabitur et neque lorem. Pellentesque porttitor eros consequat, sagittis enim vitae,
            aliquet elit. Donec vitae condimentum sapien, laoreet ullamcorper justo. In sit amet dui mollis, elementum mauris ac, hendrerit
            tellus. Proin in orci sed magna sodales porttitor scelerisque nec turpis. Phasellus molestie felis consequat, hendrerit felis
            et, pharetra urna. Donec bibendum erat vitae mi ullamcorper, eu consectetur lectus cursus. Fusce a leo gravida, laoreet risus
            vitae, feugiat turpis. Donec luctus gravida nisi.
          </p>

          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam accumsan elit et tellus consequat
            vehicula vel ac libero. Maecenas tortor diam, egestas vitae lorem ac, tempor sodales urna. Suspendisse lectus nulla, viverra eu
            ipsum vitae, iaculis rutrum dolor. Donec faucibus consequat purus eu ornare. Ut velit augue, pulvinar nec risus laoreet,
            lobortis dictum sapien. Pellentesque rhoncus sollicitudin augue, non molestie nulla. Aenean suscipit nisi quis leo viverra
            blandit. Pellentesque erat nisi, semper et purus id, molestie feugiat tellus. Fusce sed facilisis nunc. Mauris sagittis, mi non
            porta pretium, massa tortor ultricies ex, faucibus pulvinar mi massa sit amet turpis. Nam condimentum vitae urna eget semper.
            Donec posuere lectus neque, sollicitudin varius ante finibus vel.
          </p>

          <p>
            Cras viverra neque non arcu pulvinar cursus. Quisque eu enim sed urna molestie vulputate. Morbi metus mauris, semper vitae nibh
            auctor, efficitur iaculis dolor. Morbi volutpat metus et fringilla tincidunt. Vivamus vitae urna quis justo porta porttitor nec
            non mauris. Sed porttitor massa nisi, ac consequat mauris interdum viverra. Quisque tempus facilisis purus ac hendrerit.
            Phasellus dictum tristique enim, nec dictum ante. Suspendisse ac vehicula dolor. Integer aliquam rhoncus quam, in maximus odio
            condimentum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas et mattis nulla. Vestibulum ante lacus,
            tincidunt non ornare non, euismod nec erat.
          </p>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default Home
