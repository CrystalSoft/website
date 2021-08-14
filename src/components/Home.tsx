import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import MyLoader from './Utils/Loader'
import Waves from './Waves'

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
              <Link to={'/'} className={'button'}>
                Discover more
              </Link>
            </div>
            <div id={'promo-right'}>
              <div id={'promo-box'}></div>
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
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas a urna lectus. Integer
            enim sapien, scelerisque in ultricies sed, maximus nec erat. Pellentesque nec purus ut purus auctor aliquet. Nulla tempor sapien
            eu leo sagittis, posuere laoreet mi feugiat. Donec non augue at nisi pretium ullamcorper faucibus at leo. Nullam ornare libero
            porttitor, maximus nunc facilisis, semper velit. Ut id tellus varius, pulvinar orci sit amet, malesuada nulla. Mauris ultrices
            tellus sapien, non faucibus erat fringilla at.
          </p>

          <p>
            Maecenas vestibulum tincidunt risus quis tincidunt. Morbi volutpat justo mauris, vehicula mollis quam ultricies a. Curabitur
            lacinia hendrerit metus id placerat. Aenean ornare risus quis mi tristique faucibus. Nam volutpat auctor ligula, ut consectetur
            justo sagittis non. Nulla elementum volutpat porttitor. Nulla pretium urna eget orci molestie, ut iaculis urna ornare. Aenean
            sit amet malesuada ipsum, ut gravida eros. Cras sit amet justo nunc.
          </p>

          <p>
            Suspendisse varius pulvinar euismod. Morbi turpis erat, placerat at felis quis, interdum rutrum justo. Morbi vitae orci in erat
            tempor egestas. Fusce dui erat, dictum a cursus id, ullamcorper sed leo. Aenean quis mattis velit, ullamcorper mattis lorem.
            Aliquam nisl nunc, semper at leo id, tincidunt euismod lorem. Suspendisse potenti. Fusce dolor libero, laoreet et sodales sed,
            lobortis sit amet tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam
            dapibus interdum diam vulputate molestie. In dui enim, luctus in faucibus at, bibendum quis risus. Duis ac lorem nisl. Sed et
            urna sit amet nibh gravida elementum at id velit.
          </p>

          <p>
            Sed sagittis, odio ut vulputate placerat, enim tortor blandit mi, ac varius leo ante vehicula lorem. Mauris vel nunc tincidunt,
            accumsan metus ut, dictum nisl. Sed eget metus eu turpis fringilla cursus nec at dolor. In sed egestas lectus. Donec fringilla,
            lacus eu sagittis blandit, turpis ante dapibus eros, at vehicula mi dolor sit amet erat. Nulla vehicula neque eget elit commodo
            tristique. Nunc diam nisi, iaculis at erat a, posuere viverra sem. Nullam efficitur enim a nibh cursus tempor. Phasellus
            ullamcorper scelerisque placerat. Aenean et rutrum nisl. Morbi eget est elit. Fusce dolor nisl, efficitur ut eros sed, tempor
            porttitor libero.
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
            Aliquam erat volutpat. Praesent venenatis, ante quis malesuada aliquet, tortor nunc fringilla lacus, nec lacinia tortor turpis
            id purus. Praesent erat mauris, accumsan mollis ligula id, vehicula lobortis felis. Cras rhoncus rhoncus lectus, id eleifend
            nunc feugiat vitae. Sed rhoncus nisi in sapien tempus aliquam. Aliquam vestibulum sagittis dui, ac tincidunt mauris euismod sit
            amet. Vestibulum aliquet dapibus odio, non malesuada urna pulvinar eu. In in tincidunt felis. Sed quis dolor pretium, feugiat
            quam quis, mattis ligula. Mauris pulvinar est vel nibh aliquam, ac convallis magna condimentum. Fusce pretium bibendum magna, ut
            sodales lectus sodales at. Maecenas tincidunt ultrices feugiat. Mauris pellentesque urna ut semper facilisis. Mauris accumsan
            mauris ante, tristique cursus nisl sodales vitae.
          </p>

          <p>
            Morbi sed auctor nisl, nec volutpat tortor. Duis non purus quis velit condimentum placerat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id pharetra nisi, dignissim
            hendrerit nulla. Nullam imperdiet nulla erat, eget dictum felis congue sit amet. Vestibulum viverra risus in lectus facilisis
            luctus a et arcu. Sed ipsum justo, aliquet nec lacinia sit amet, placerat sed risus. Aliquam vitae diam metus. Nulla facilisi.
            Vivamus commodo mi felis, vel ultricies elit tempor non. Etiam eget ultrices nunc.
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
