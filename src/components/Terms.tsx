import React from 'react'
// @ts-ignore
import { Link } from 'react-router-i18n'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from './utils/Loader'

const Terms = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{t('menu.terms') + t('site.separator') + t('site.title')}</title>
        </Helmet>
        <div id={'terms'} className={'container'}>
          <div className={'inner'}>
            <p>
              <h1>{t('menu.terms')}</h1>
              Le presenti Condizioni si applicano ai servizi disponibili su www.crystalsoft.it <br /> Utilizzando i nostri servizi
              disponibili sul sito, accetti le seguenti Condizioni d&apos;uso, che regolano i servizi offerti da CrystalSoft
              (&quot;noi&quot; o &quot;CrystalSoft&quot;).
            </p>
            <p>
              <h4>Software e Sito CrystalSoft</h4>
              Il Software &egrave; stato sviluppato da CrystalSoft. Pu&ograve; essere distribuito e utilizzato liberamente, purch&eacute;
              siano rispettate le seguenti Condizioni: <br />
              <ul>
                <li>È severamente vietata la vendita.</li>
                <li>Nessuna parte del Software pu&ograve; essere decompilata e/o usata come parte di un altro Software.</li>
                <li>Deve essere in OGNI caso, citata la Fonte e l&apos;Autore del nostro Software.</li>
                <li>È severamente vietata la divulgazione per mezzo di Servizi quali Aste Pubbliche, Giochi Online, di qualunque tipo.</li>
              </ul>
              <br /> In caso si trattasse di un Codice Sorgente o parte di esso, i seguenti Termini si aggiungono e/o modificano: <br />
              <ul>
                <li>
                  Puoi modificarlo e/o ridistribuirlo, a patto che venga mantenuto il nome dell&apos;Autore, e i relativi ringraziamenti.
                </li>
                <li>Puoi usare parte di questo Codice Sorgente come parte di un altro Software, sempre rispettando il punto 1.</li>
                <li>Puoi contribuire nella Segnalazione di Bug e/o Problemi, mandando i dettagli, nell&apos;indirizzo trovato in ABOUT.</li>
              </ul>
              <br /> Il Software &egrave; fornito &quot;cosi com&apos;&egrave;&quot; e senza alcuna Garanzia. <br /> Si declina quindi
              qualsiasi danno morale o immorale, danno diretto e/o indiretto, provocato dal nostro Software. <br /> <br /> Il Software
              &egrave; da considerarsi Freeware, senza fini di lucro. Vietata la Vendita da parte di Terzi.
            </p>
            <p>
              <h4>Note Legali</h4>
              Se l&apos;Utilizzatore, non ha intenzione di rispettare tali Termini di Utilizzo, &egrave; pregato di cancellare
              immediatamente il nostro Software. <br /> l&apos;Utilizzatore, si assume tutte le Responsabilit&agrave; legali, in caso di
              infrazione di tali Termini di Utilizzo. <br /> Tali Termini di Utilizzo, comprendono tutto il Software CrystalSoft, incluso il
              Sito Web, salvo diversa segnalazione. <br /> <br /> CrystalSoft pu&ograve; senza alcun avviso, modificare e/o inserire Termini
              di Utilizzo.{' '}
            </p>
            <p>
              <h4>Emulator</h4>
              Il nome &quot;Emulator&quot; o &quot;Emulator &reg;&quot; va inteso come Autore e/o come Persona fisica, e non come un
              Software o un Marchio Registrato.
            </p>
            <p>
              <h4>Abusi</h4>
              Se hai notificato un abuso nel sito da parte di un utente, ti invitiamo a{' '}
              <a href='http://www.crystalsoft.it/contacts'>contattarci</a> al fine di poterci aiutare a mantenere il sito in regola con le
              nostre norme. <br /> In ogni caso, CrystalSoft &egrave; un fornitore di servizi e non potr&agrave; essere ritenuta
              responsabile per un uso non autorizzato o illecito dei propri servizi da parte degli utenti del sito.
            </p>
            <p>
              <h4>Contenuti</h4>
              Il sito &egrave; tutelato dalle leggi e dalle convenzioni internazionali sul diritto d&apos;autore. Il contenuto visualizzato
              su o attraverso il sito &egrave; protetto come un&quot;opera collettiva e/o una raccolta di opere ai sensi delle leggi e delle
              convenzioni internazionali sul diritto d&apos;autore. Acconsenti a non copiare, divulgare o modificare i contenuti del sito
              soggetti a diritti d&rsquo;autore, marchi registrati o altri diritti di propriet&agrave; intellettuale. Acconsenti a non
              copiare, divulgare o modificare i contenuti del sito senza il nostro espresso consenso scritto. Non potrai disassemblare o
              decompilare, estrarre il codice sorgente o in altro modo tentare di ottenere il codice sorgente del sito. Fatto salvo quanto
              sopra, acconsenti a non riprodurre, copiare, vendere, rivendere o sfruttare qualsiasi contenuto del sito (fatti salvi i tuoi
              contenuti). Fornendoci i tuoi contenuti, concedi, e garantisci di averne i relativi diritti, una licenza non esclusiva, valida
              in tutto il mondo, a tempo indeterminato, irrevocabile, a titolo gratuito, sub-licenziabile e trasferibile, all&apos;utilizzo
              (incluso, a mero titolo esemplificativo, il diritto di esercitare i diritti d&apos;autore, i diritti pubblicitari e i diritti
              sulla bancadati) di tali contenuti (inclusi, a mero titolo esemplificativo, il diritto di riprodurre, distribuire, comunicare
              al pubblico, trasformare e &quot;rendere accessibile al pubblico&quot; tali contenuti) attraverso qualsisi mezzo e
              modalit&agrave; di sfruttamento. Ci riserviamo il diritto di rimuovere i contenuti nel caso in cui avessimo motivo di ritenere
              che essi violino le presenti condizioni o i diritti di terzi.
            </p>
            <p>
              <h4>Tariffe</h4>
              l&apos;utilizzo del sito &egrave; completamente gratuito. Determinati servizi potranno per&ograve; essere soggetti ad un
              pagamento. Se si tratta di un servizio soggetto a pagamento, potrai essere libero di visionare e accettare le condizioni che
              ti saranno mostrate all&apos;atto di conferma del servizio. Le nostre tariffe vengono espresse in Euro e potranno subire
              modifiche nel corso del tempo. Le eventuali modifiche delle regole relative alle nostre tariffe verranno comunicate mediante
              il nostro sito. In caso di promozioni o nuovi servizi, potremmo modificare temporaneamente le nostre tariffe; queste modifiche
              avranno efficacia dal momento in cui la promozione o il nuovo servizio verr&agrave; comunicato.
            </p>
            <p>
              <h4 id='disclaimer'>Limitazioni di responsabilit&agrave;</h4>
              CrystalSoft non garantisce l&apos;accesso continuo e ininterrotto al sito e ai suoi servizi, che pu&ograve; essere
              condizionato da fattori al di fuori del proprio controllo. Nei limiti previsti dalla legge, CrystalSoft non &egrave; in alcun
              modo responsabile delle perdite economiche, dei danni diretti e indiretti, anche all&apos;immagine, eventualmente subiti dagli
              utenti o da terzi in conseguenza dell&apos;utilizzo del sito o dei propri servizi. In ogni caso l&apos;eventuale risarcimento
              dovuto da CrystalSoft e dai suoi fornitori &egrave; limitato all&apos;importo delle tariffe da te pagate nei 6 mesi precedenti
              e comunque fino alla concorrenza dell&apos;importo massimo di &euro; 50 (cinquanta euro). Le leggi di alcuni Paesi non
              consentono la limitazione di garanzie o l&apos;esonero di responsabilit&agrave;, pertanto le limitazioni di garanzie e le
              esclusioni di responsabilit&agrave; sopra menzionate potrebbero non essere pienamente efficaci.
            </p>
            <p>
              {' '}
              <h4>Dati personali</h4>
              Utilizzando il sito, accetti che CrystalSoft (il &quot;titolare del trattamento&quot;) raccolga, tratti, trasferisca e
              conservi i tuoi dati personali sui nostri server situati nel territorio Europeo, come descritto nelle nostra{' '}
              <Link exact to={'/privacy-policy'}>
                {t('menu.privacy')}
              </Link>
              .
            </p>
          </div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default Terms
