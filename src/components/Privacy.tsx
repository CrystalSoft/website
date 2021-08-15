import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import MyLoader from './utils/Loader'
import Breadcrumb from './utils/Breadcrumb'

const Privacy = () => {
  const { t, ready } = useTranslation()

  if (ready) {
    return (
      <>
        <Helmet>
          <title>{t('menu.privacy') + t('site.separator') + t('site.title')}</title>
          <meta property='og:title' content={t('menu.privacy') + t('site.separator') + t('site.title')} />
          <meta content={t('home.label.promo') + ' ' + t('home.label.promo_long')} name='description' />
          <meta property='og:description' content={t('home.label.promo') + ' ' + t('home.label.promo_long')} />
        </Helmet>
        <Breadcrumb values={new Map([['privacy-policy', t('menu.privacy')]])} />
        <div id={'privacy'}>
          <div className={'inner'}>
            <h1>{t('menu.privacy')}</h1>
            <p>
              <h2>I – INFORMAZIONI RELATIVE ALLA PRIVACY POLICY DEL SITO</h2>
              In questa sezione sono contenute le informazioni relative alle modalità di gestione di &quot;CrystalSoft&quot; in riferimento
              alle trattamento dei dati degli utenti di www.crystalsoft.it. La presente informativa ha valore anche ai fini dell’art. 13 del
              D.lgs. n. 196/2003, Codice in materia di protezione dei dati personali, e ai fini dell’art. 13 del Regolamento UE n. 2016/679,
              relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali nonché alla libera circolazione
              di tali dati, per i soggetti che interagiscono con www.crystalsoft.it ed è raggiungibile all’indirizzo corrispondente alla
              pagina iniziale: https://www.crystalsoft.it/
            </p>
            <p>
              L’informativa è reale solo per www.crystalsoft.it e non anche per altri siti web eventualmente consultati dall’utente tramite
              link in esso contenuti. Scopo del presente documento è fornire indicazioni circa le modalità, i tempi e la natura delle
              informazioni che i titolari del trattamento devono fornire agli utenti al momento della connessione alle pagine web di
              www.crystalsoft.it, indipendentemente degli scopi del collegamento stesso, secondo la legislazione Italiana ed Europea.
              L’informativa può subire modifiche a causa dell’introduzione di nuove norme al riguardo, si invita, pertanto, l’utente a
              controllare periodicamente la presente pagina. Se l’utente ha meno di sedici anni, ai sensi dell’art. 8, c. 1 regolamento UE
              2016/679, dovrà legittimare il suo consenso attraverso l’autorizzazione dei genitori o di chi ne fa le veci.{' '}
            </p>
            <p>
              <h2>II - TRATTAMENTO DEI DATI</h2>
              <strong>Titolare dei dati</strong>
              <br />
              Il titolare del trattamento è la persona fisica o giuridica, l’autorità pubblica, il servizio o altro organismo che,
              singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali. Si occupa anche dei
              profili sulla sicurezza. Relativamente al presente sito web il titolare del trattamento è CrystalSoft e per ogni chiarimento o
              esercizio dei diritti dell’utente potrà contattarlo al seguente indirizzo mail: info@crystalsoft.it{' '}
            </p>
            <p>
              <strong>Responsabile del trattamento dei dati</strong>
              <br />
              Il responsabile del trattamento è la persona fisica o giuridica, l’autorità pubblica, il servizio o altro organismo che tratta
              dati personali per conto del titolare del trattamento. Ai sensi dell’articolo 28 del Regolamento UE n. 2016/679, su nomina del
              titolare dei dati, il responsabile del trattamento dei dati del sito www.crystalsoft.it è: CrystalSoft
            </p>
            <p>
              <strong>Luogo trattamento dati</strong>
              <br />
              Il trattamento dei dati generato dall’utilizzo di www.crystalsoft.it avviene presso Milano
              <br />
              In caso di necessità, i dati connessi al servizio newsletter possono essere trattati dal responsabile del trattamento o
              soggetti dati esso incaricati a tal fine presso la relativa sede.{' '}
            </p>
            <p>
              <h2>III – COOKIES Tipo di cookies</h2>
              Il sito www.crystalsoft.it utilizza cookies per rendere l’esperienza di navigazione dell’utente più facile ed intuitiva: i
              cookies sono piccole stringhe di testo utilizzate per memorizzare alcune informazioni che possono riguardare l’utente, le sue
              preferenze o il dispositivo di accesso ad internet (computer, tablet o cellulare) e vengono usate principalmente per adeguare
              il funzionamento del sito alle aspettative dell’utente, offrendo un’esperienza di navigazione più personalizzata e
              memorizzando le scelte effettuate in precedenza. Un cookies consiste in un ridotto insieme di dati trasferiti al browser
              dell’utente da un server web e può essere letto unicamente dal server che ha effettuato il trasferimento. Non si tratta di
              codice eseguibile e non trasmette virus. I cookies non registrano alcuna informazione personale e gli eventuali dati
              identificabili non verranno memorizzati. Se si desidera, è possibile impedire il salvataggio di alcuni o tutti i cookies.
              Tuttavia, in questo caso l’utilizzo del sito e dei servizi offerti potrebbe risultarne compromesso. Per procedere senza
              modificare le opzioni relative ai cookies è sufficiente continuare con la navigazione.{' '}
            </p>
            <p>
              Di seguito le tipologie di cookies di cui il sito fa uso.
              <br />
              <br />
              <strong>Cookies tecnici</strong>
              <br />
              Ci sono numerose tecnologie usate per conservare informazioni nel computer dell’utente, che poi vengono raccolte da altri
              siti. Tra queste la più conosciuta ed utilizzata è HTML. Essi servono per la navigazione e per facilitare l’accesso e la
              fruizione del sito da parte dell’utente. Sono necessari alla trasmissione di comunicazioni su rete elettronica ovvero al
              fornitore per erogare il servizio richiesto dal cliente. Le impostazioni per gestire o disattivare i COOKIES possono variare a
              seconda del browser internet utilizzato. Ad ogni modo, l’utente può gestire o richiedere la disattivazione generale o la
              cancellazione dei cookies, modificando le impostazioni del proprio browser internet. Tale disattivazione può rallentare o
              impedire l’accesso ad alcune parti del sito. L’uso dei cookies tecnici consente la fruizione sicura ed efficiente del sito. I
              COOKIES che vengono inseriti nel browser e ritrasmessi mediante Google Analytics o tramite il servizio statistiche di blogger
              o similari sono tecnici solo se utilizzati ai fini di ottimizzazione del sito direttamente dal titolare del sito stesso, che
              potrà raccogliere informazioni in forma aggregata soul numero degli utenti e su come questi visitano il sito. A queste
              condizioni, per i COOKIES Analytics valgono le stesso regole, in tema di informativa e consenso, previste per i cookies
              tecnici. Dal punto di vista della durata si possono distinguere cookies temporanei di sessione che si cancellano
              automaticamente al termine della sessione di navigazione e servono per identificare l’utente e quindi evitare il login ad ogni
              pagina visitata e quelli permanenti che restano attivi nel pc fino a scadenza o cancellazione da parte dell’utente. Potranno
              essere installati cookies di sessione al fine di consentire l’accesso e la permanenza nell’area riservata del portale come
              utente autenticato. Essi non vengono memorizzati in modo persistente ma esclusivamente per la durata della navigazione fino
              alla chiusura del browser e svaniscono con la chiusura dello stesso. Il loro uso è strettamente limitato alla trasmissione di
              identificativi di sessione costituiti da numeri casuali generati dal server necessari per consentire l’esplorazione sicura ed
              efficiente del sito.{' '}
            </p>
            <p>
              <strong>Cookies di terze parti</strong>
              <br />
              In relazione alla provenienza si distinguono i cookies inviati al browser direttamente dal sito che si sta visitando e quelli
              di terze parti inviati al computer dati altri siti e non da quello che si sta visitando. I cookies permanenti sono spesso
              cookies di terze parti. La maggior parte dei cookies di terse parti è costituita da cookies di tracciamento usati per
              individuare il comportamento online, capire gli interessi e quindi personalizzare le proposte pubblicitarie per gli utenti.
              Potranno essere installati cookies di terze parti analitici. Essi sono inviati da domini di predette terze parti esterni al
              sito. I cookies analitici di terze parti sono impiegati per rilevare informazioni soul comportamento degli utenti su
              www.crystalsoft.it. La rilevazione avviene in forma anonima, al fine di monitorare le prestazioni e migliorare l’usabilità del
              sito. I cookies di profilazione di terze parti sono utilizzati per creare profili relativi agli utenti su www.crystalsoft.it,
              al fine di proporre messaggi pubblicitari in linea con le scelte manifestate degli utenti medesimi. L’utilizzo di questi
              cookies è disciplinato dalle regole predisposte dalle terze parti medesime. Pertanto, si invitano gli utenti a prendere
              visione delle informative privacy e delle indicazioni per gestire o disabilitare i cookies pubblicate nelle relative pagine
              web.{' '}
            </p>
            <p>
              <strong>Cookies di profilazione</strong>
              <br />
              Sono cookies di profilazione quello a creare profili all’utente e vengono utilizzati al fine di inviare messaggi pubblicitari
              in linea con le preferenze manifestate dallo stesso nell’ambito della navigazione in rete. Quando si utilizzeranno questi tipi
              di COOKIES l’utente dovrà dare un consenso esplicito. Si applicherà l’articolo 22 del Regolamento UE 2016/679 e l’articolo 122
              del Codice in materia di protezione dei dati.{' '}
            </p>
            <p>
              <h2>IV - DATI TRATTATI</h2>
              <strong>1. Modalità trattamento dati</strong>
              <br />
              Come tutti i siti web anche il presente sito fa uso di log files nei quali vengono conservate informazioni raccolte in maniera
              automatizzata durante le visite degli utenti. Le informazioni raccolte potrebbero essere le seguenti: Indirizzo internet
              protocol (IP);
            </p>
            <p>
              – Tipo di browser e parametri del dispositivo usato per connettersi al sito;
              <br />– Nome dell’internet service provider (ISP);
              <br />– Data e orario di visita;
              <br />– Pagina web di provenienza del visitatore (referal) e di uscita;
              <br />– Eventualmente il numero di click.
            </p>
            <p>
              Le suddette informazioni sono test rate in forma automatizzata e raccolte in forma esclusivamente aggregata al fine di
              verificare il corretto funzionamento del sito e per motivi di sicurezza. Tali informazioni saranno test rate in base ai
              legittimi interessi del titolare. Ai fini di sicurezza (filtri anti-spam, firewall, rilevazione virus) i dati registrati
              automaticamente possono eventualmente comprendere anche dati personali come l’indirizzo IP, che potrebbe essere utilizzato,
              conformemente alle leggi vigenti in materia, a fine di bloccare tentativi di danneggiamento al sito medesimo o di recare danno
              ad altri utenti o attività dannose o costituenti reato. Tali dati non sono mai utilizzati per l’identificazione o la
              profilazione dell’utente, ma solo ai fini di tutela del sito e dei suoi utenti, tali informazioni saranno usate in base ai
              legittimi interessi del titolare. Qualora il sito consenta l’inserimento di commenti, oppure in caso di specifici servizi
              richiesti dall’utente, ivi compresi la possibilità di inviare il Curriculum Vitae per un eventuale rapporto lavorativo, il
              sito rileva automaticamente e registra alcuni dati identificativi dell’utente, compreso l’indirizzo mail. Tali dati si
              intendono volontariamente forniti dall’utente al momento della richiesta di erogazione del servizio. Inserendo un commento o
              altra informazione l’utente accetta espressamente l’informativa privacy e, in particolare, acconsente che i contenuti inseriti
              siano liberamente diffusi anche a terzi. I dati ricevuti verranno utilizzati esclusivamente per l’erogazione del servizio
              richiesto e per il solo tempo necessario per la fornitura del servizio. Le informazioni che gli utenti del sito riterranno di
              rendere pubbliche tramite i servizi e gli strumenti messi a disposizione degli stessi, sono fornite dall’utente
              consapevolmente e volontariamente, esentando il presente sito da qualsiasi responsabilità in merito ad eventuali violazioni
              delle leggi. Spetta all’utente verificare di avere i permessi per l’immissione di dati personali di terzi o di contenuti
              tutelati dalle norme nazionali ed internazionali.
            </p>
            <p>
              <strong>2. Finalità del trattamento dati</strong>
              <br />I dati raccolti dal sito durante il suo funzionamento sono utilizzati esclusivamente per le finalità sopra indicate e
              conservati per il tempo strettamente necessario a svolgere le attività precisate e, comunque, non oltre 2 anni. I dati
              utilizzati ai fini di sicurezza (blocco tentativi di danneggiamento del sito) sono conservati per il tempo strettamente
              necessario al raggiungimento del fine anteriormente indicato.{' '}
            </p>
            <p>
              <strong>3. Dati forniti dall’utente</strong>
              <br />
              Come sopra indicato, l’invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicate su questo sito
              comporta la successive acquisizione dell’indirizzo del mittente, necessario per rispondere alle richieste, nonché degli
              eventuali altri dati personali inseriti nella missiva. Specifiche informative di sintesi verranno progressivamente riportate o
              visualizzate nelle pagine del sito predisposte per particolari servizi a richiesta.
            </p>
            <p>
              <strong>4. Supporto nella configurazione del proprio browser</strong>
              <br />
              L’utente può gestire i cookies anche attraverso le impostazioni del suo browser. Tuttavia, cancellando i cookies dal browser
              potrebbe rimuovere le preferenze che ha impostato per il sito. Per ulteriori informazioni e supporto è possible anche visitare
              la pagina di aiuto specifica del web browser che si sta utilizzando: Internet explorer Firefox Safari Chrome Opera
            </p>
            <p>
              <strong>5.Plugin Social Network</strong>
              <br />
              Il presente sito incorpora anche plugin e/o bottoni per i social network, al fine di consentire una facile condivisione dei
              contenuti sui vostri social network preferiti. Tali plugin sono programmati in modo da non impostare alcun cookie all’accesso
              della pagina per salvaguardare la privacy degli utenti. Eventualmente i cookies vengono impostati, se così previsto dai social
              network solo quando l’utente fa effettivo e volontario uso del plugin. Si tenga presente che se l’utente naviga essendo
              loggato nel social network allora ha già acconsentito all’uso dei cookies veicolati tramite questo sito al momento
              dell’iscrizione al social network. La raccolta e l’uso delle informazioni ottenute a mezzo del plugin sono regolati dalle
              rispettive informative privacy dei social network, alle quali si prega di fare riferimento: <br />
              Facebook: https://www.facebook.com/help/cookies
              <br />
              Twitter: https://support.twitter.com/articles/20170519-uso-dei-cookie-e-d-altre-tecnologie-simili-da-parte-di-twitter
              <br />
              Pinterest: https://about.pinterest.com/it/privacy-policy
              <br />
              AddThis: http://www.addthis.com/privacy/privacy-policy
              <br />
              Linkedin: https://www.linkedin.com/legal/cookie/policy
            </p>
            <p>
              <h2>V - DIRITTI DELL’UTENTE L’art.</h2>
              13 co. 2 del Regolamento UE del 2016/679 elenca i diritti dell’utente. Il presente sito www.crystalsoft.it intende, pertanto,
              informare l’utente sull’esistenza:
              <br />
              – del diritto dell’interessato di chiedere al titolare l’accesso ai dati personali (art. 15 Regolamento UE), il loro
              aggiornamento (art. 7, co. 3, lett. a del D.lgs 196/2003), la rettifica (art. 16 Regolamento UE), l’integrazione (art. 7, co.
              3 lett. a D.lgs 196/2003), la limitazione del trattamento che lo riguardino (art. 18 Regolamento UE) o di opporsi, per motivi
              legittimi, al loro trattamento (art. 21 Regolamento UE), oltre al diritto alla portabilità dei dati (art. 20 Regolamento UE);
              <br />
              – del diritto di chiedere la cancellazione (art. 17 Regolamento UE), la trasformazione in forma anonima o il blocco dei dati
              trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali
              i dati sono stati raccolti o successivamente trattati (art. 7 co. 3, lett. b del D.lgs. 196/2003);
              <br />
              – del diritto di ottenere l’attestazione che le operazioni di aggiornamento, rettificazione, integrazione dei dati,
              cancellazione, blocco dei dati, trasformazione, sono state portate a conoscenza, anche per quanto riguarda il loro contenuto,
              di coloro ai quali i dati sono stati comunicati o diffusi, eccettuato il caso in cui tale adempimento si rivela impossibile o
              comporta un impiego di mezzi manifestamente sproporzionato rispetto al diritto tutelato (art. 7 co. 3, lett. c del D.lgs
              196/2003).
              <br />
              Le richieste possono essere indirizzate al titolare del trattamento al suo indirizzo email summenzionato (senza formalità)
              oppure utilizzando il modello previsto dal Garante per la protezione dei dati personali. Qualora il trattamento sia basato
              sull’art. 6 paragrafo 1 lettera a – consenso espresso all’utilizzo – oppure sull’art. 9 paragrafo 2 lettera a – consenso
              espresso all’utilizzo di dati genetici, biometrici, relativi alla salute, che rivelino convinzioni religiose, filosofiche o
              appartenenza sindacale, che rivelino l’origine razziale o etnica, le opinioni politiche – l’utente ha il diritto di revocare
              il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della
              revoca. Parimenti, in caso di violazione della normativa, l’utente ha il diritto di proporre reclamo presso il Garante per la
              Protezione dei Dati Personali, quale autorità preposta al controllo sul trattamento nello Stato italiano. Per una disamina più
              approfondita dei diritti che Le competono, si vedano gli artt. 15 e ss. Del Regolamento UE 2016/679 e l’art. 7 del D.lgs.
              196/2003.{' '}
            </p>
            <p>
              <h2>VI – ADEMPIMENTI</h2>
              Il titolare notifica al Garante il trattamento di dati personali cui intende procedere, solo se il trattamento riguarda:
            </p>
            <p>
              – dati genetici, biometrici o dati che indicano la posizione geografica di persone od oggetti mediante una rete di
              comunicazione elettronica;
              <br />– dati idonei a rivelare lo stato di salute e la vita sessuale, trattati ai fini di procreazione assistita, prestazione
              di servizi sanitari per via telematica relativi a banche di dati o alla fornitura di beni, indagini epidemiologiche,
              rilevazione di malattie mentali, infettive e diffusive, sieropositività, trapianto di organi e tessuti e monitoraggio della
              spesa sanitaria;
              <br />
              – dati idonei a rivelare la vita sessuale o la sfera psichica, trattati da associazioni, enti ed organismi senza scopo di
              lucro, anche non riconosciuti, a carattere politico, filosofico, religioso o sindacale;
              <br />
              – dati trattati con l’ausilio di strumenti elettronici volti a definire il profilo o la personalità dell’interessato o ad
              analizzare abitudini e scelte di consumo ovvero a monitorare l’utilizzo di servizi di comunicazione elettronica con esclusione
              dei trattamenti tecnicamente indispensabili per fornire i servizi medesimi agli utenti;
              <br />
              – dati sensibili registrati in banche di dati a fini di selezione del personale per conto terzi nonché dati sensibili
              utilizzati per sondaggi di opinione, ricerche di mercato ed altre ricerche campionarie;
              <br />– dati registrati in apposite banche dati gestite con strumenti elettronici e relative al rischio sulla solvibilità
              economica, alla situazione patrimoniale, al corretto adempimento di obbligazioni, a comportamenti illeciti o fraudolenti.
            </p>
            <p>
              <h2>VI – SICUREZZA DEI DATI FORNITI</h2>
              Il presente sito tratta i dati degli utenti in maniera lecita e corretta, adottando le opportune misure di sicurezza volte ad
              impedire accessi non autorizzati, divulgazione, modifica o distruzione non autorizzata dei dati. Il trattamento viene
              effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle
              finalità indicate. Oltre al titolare, in alcuni casi, potrebbero avere accesso ai dati categorie di incaricati coinvolti
              nell’organizzazione del sito (personale amministrativo, marketing, commerciale, legali, amministratori di sistema) ovvero
              soggetti esterni come (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche,
              agenzie di comunicazione).{' '}
            </p>
            <p>
              <h2>VIII – MODIFICHE AL PRESENTE DOCUMENTO</h2>
              Il presente documento, pubblicato all’indirizzo: https://www.crystalsoft.it/privacy costituisce la privacy policy di questo
              sito.
            </p>
            <p>
              Esso può essere soggetto a modifiche o aggiornamenti. Qualora si tratti di modifiche e aggiornamenti rilevanti questi saranno
              segnalati con apposite notifiche agli utenti. Le versioni precedenti del documento saranno consultabili, comunque, a questa
              pagina. Il documento è stato aggiornato in data 06/08/2021 per essere conforme alle disposizioni normative in materia ed in
              particolare al Regolamento UE 2016/679.
            </p>
          </div>
        </div>
      </>
    )
  }

  return <MyLoader />
}

export default Privacy
