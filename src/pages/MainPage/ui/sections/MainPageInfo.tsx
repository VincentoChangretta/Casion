const miglioriSiti = [
  {
    name: "PowBet",
    description:
      "Il 74% dei giocatori scommette su 30 discipline sportive cibernetiche.",
  },
  {
    name: "Posido",
    description: "Il 68% degli intervistati ha partecipato a tornei sportivi.",
  },
  {
    name: "FEZbet",
    description: "Il 75% è soddisfatto dell'ampia selezione di eventi live.",
  },
  {
    name: "GREATwin",
    description:
      "Il 70% degli utenti ha approfittato del bonus sul primo deposito.",
  },
  {
    name: "18bet",
    description:
      "Il 65% ha approfittato del cashback settimanale del 20% sullo sport.",
  },
  {
    name: "Wazamba",
    description: "Il 67% ha apprezzato la varietà degli eventi cyber-sportivi.",
  },
  {
    name: "MrPacho",
    description:
      "Il 60% dei giocatori ha apprezzato la velocità dei prelievi e la generosità dei bonus.",
  },
  {
    name: "Wonaco",
    description:
      "Il 58% ha apprezzato le transazioni in criptovaluta e il cashback settimanale fino al 25%.",
  },
  {
    name: "Megapari",
    description:
      "Il 79% ha apprezzato l'ampia selezione di eventi di hockey su base giornaliera.",
  },
  {
    name: "Casinoly",
    description:
      "Il 63% degli scommettitori ha trovato eccellente la selezione di eventi calcistici settimanali.",
  },
];

const miglioriSitiSicuri = [
  {
    name: "Boomerang",
    description:
      "Scommesse su oltre 2.000 eventi sportivi mensili e tornei settimanali.",
  },
  {
    name: "Infinity",
    description:
      "Premi fino a €75.000 per i vincitori dei tornei di scommesse sportive settimanali.",
  },
  {
    name: "Legiano",
    description:
      "Cashback settimanale fino al 25% per gli utenti VIP sulle scommesse sportive.",
  },
  {
    name: "FEZbet",
    description:
      "Oltre 50.000 eventi sportivi live e promozioni su scommesse giornaliere.",
  },
  {
    name: "Casinoly",
    description:
      "Cashback fino al 25% su eventi calcistici settimanali con oltre 1.000 partite.",
  },
  {
    name: "Wonaco",
    description:
      "Supporta 4 criptovalute e offre cashback fino al 25% sulle scommesse sportive.",
  },
  {
    name: "Posido",
    description:
      "Jackpot sportivo settimanale fino a €15.000 e tornei regolari.",
  },
  {
    name: "Megapari",
    description:
      "Più di 30 giochi di eSports e oltre 1.000 eventi sportivi live giornalieri.",
  },
  {
    name: "iWild",
    description: "Tornei settimanali con premi in criptovalute fino a €30.000.",
  },
  {
    name: "Tsars",
    description:
      "Scommesse sportive con prelievi veloci e tornei per utenti VIP.",
  },
];

const bettingFeatures = [
  "I siti di scommesse non AAMS spesso permettono l'uso di criptovalute per depositi e prelievi.",
  "In questi campi offrono mercati su eSports, eventi internazionali e scommesse live.",
  "I tempi di prelievo su questi siti sono fino a 48 ore.",
  "Molti siti di scommesse non AAMS offrono bonus cashback fino al 20% sulle perdite settimanali.",
  "I siti non AAMS non limitano le scommesse minime o massime, dando ai giocatori maggiore libertà di scelta.",
];

const bestFeatures = [
  {
    title: "Come valutiamo:",
    items: [
      "Due esperti valutano ogni sito in modo indipendente l'uno dall'altro.",
      "Testiamo ogni piattaforma per almeno 5 ore.",
      "L'assistenza clienti viene valutata con appositi script.",
      "Verifichiamo che i siti abbiano licenze affidabili.",
    ],
  },
  {
    title: "Cosa apprezziamo nei siti di scommesse?",
    items: [
      "Un'ampia selezione di eventi portati. FEZbet offre più di 50.000 eventi live.",
      "Le promozioni attirano i giocatori. Infinity offre premi fino a €75.000 per i vincitori dei tornei settimanali di scommesse sportive.",
      "Il cashback è un grande incentivo. Legiano offre un cashback settimanale del 25% per i membri VIP.",
      "I tornei settimanali sono un bonus per gli scommettitori. Posido offre un jackpot sportivo settimanale fino a €15.000.",
      "Le scommesse live e le scommesse cyber sportive sono molto popolari. Megapari offre più di 1.000 eventi sportivi live giornalieri e 30 giochi di Cybersport.",
    ],
  },
];

const paymentMethods = [
  {
    method: "Carte di credito (Visa, Mastercard)",
    depositTime: "Istantaneo",
    withdrawalTime: "1-3 giorni lavorativi",
  },
  {
    method: "Criptovalute (BTC, ETH, USDT, LTC, TRX)",
    depositTime: "Istantaneo",
    withdrawalTime: "Istantaneo",
  },
  {
    method: "Skrill",
    depositTime: "Istantaneo",
    withdrawalTime: "Istantaneo",
  },
  {
    method: "Neteller",
    depositTime: "Istantaneo",
    withdrawalTime: "Istantaneo",
  },
  {
    method: "Bonifico bancario",
    depositTime: "2-3 giorni lavorativi",
    withdrawalTime: "3-5 giorni lavorativi",
  },
  {
    method: "MiFinity",
    depositTime: "Istantaneo",
    withdrawalTime: "Istantaneo",
  },
  {
    method: "Jeton",
    depositTime: "Istantaneo",
    withdrawalTime: "Istantaneo",
  },
  {
    method: "MuchBetter",
    depositTime: "Istantaneo",
    withdrawalTime: "Istantaneo",
  },
  {
    method: "ecoPayz",
    depositTime: "Istantaneo",
    withdrawalTime: "Istantaneo",
  },
  {
    method: "Paysafecard",
    depositTime: "Istantaneo",
    withdrawalTime: "Non disponibile per prelievi",
  },
  {
    method: "Flexepin",
    depositTime: "Istantaneo",
    withdrawalTime: "Non disponibile per prelievi",
  },
];

export const MainPageInfo = () => {
  return (
    <>
      <section className="mb-section text-xl">
        <div className="main-container">
          <h2 className="smallTitle mb-[20px] text-text-primary">
            Migliori Siti non AAMS del 2025
          </h2>
          <ul className="flex flex-col gap-[10px] mb-[30px]">
            {miglioriSiti.map((site, index) => (
              <li
                key={index}
                className="p-[5px] bg-white text-color-text-primary rounded-lg  "
              >
                <strong className="text-mainBg-inv">{site.name}</strong> -{" "}
                {site.description}
              </li>
            ))}
          </ul>

          <div className="mb-[30px]">
            <h2 className="smallTitle mb-[20px] text-text-primary">
              Quali sono i Migliori Siti di Scommesse non AAMS?
            </h2>
            <ul className="flex flex-col gap-[5px] mb-[30px]">
              {bettingFeatures.map((feature, index) => (
                <li
                  className="p-[5px] bg-white text-color-text-primary rounded-lg  "
                  key={index}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-[30px]">
            <h2 className="smallTitle mb-[20px] text-text-primary">
              Quali sono i Migliori Siti non AAMS Sicuri?
            </h2>
            <ul className="flex flex-col gap-[10px] mb-[30px]">
              {miglioriSitiSicuri.map((site, index) => (
                <li
                  key={index}
                  className="p-[5px] bg-white text-color-text-primary rounded-lg  "
                >
                  <strong className="text-mainBg-inv">{site.name}</strong> -{" "}
                  {site.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-[30px]">
            <div className="mb-[20px]">
              <h2 className="smallTitle mb-[20px] text-text-primary">
                Come Scegliere i Migliori Siti di Scommesse non AAMS?
              </h2>
              <p className="text-color-text-secondary">
                Abbiamo analizzato molti siti di scommesse non AAMS. Il nostro
                obiettivo è garantire sicurezza e vantaggi ai giocatori.
                Cerchiamo le migliori piattaforme con una vasta gamma di eventi
                sportivi e promozioni.
              </p>
            </div>

            {bestFeatures.map((section, index) => (
              <div key={index} className="mb-[30px]">
                <h4 className="text-2xl font-extrabold mb-[30px] text-text-primary">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-[10px]">
                  {section.items.map((item, itemIndex) => (
                    <li
                      className="p-[5px] bg-white text-color-text-primary rounded-lg  "
                      key={itemIndex}
                    >
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-section text-xl">
        <div className="main-container">
          <h2 className="smallTitle mb-[20px] text-text-primary">
            Siti non AAMS con Bonus Senza Deposito e i loro Metodi di Prelievo
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto mb-[30px]">
              {/* Table Header using map */}
              <thead>
                <tr className="border-b border-gray-200">
                  {[
                    "Metodo di Pagamento",
                    "Tempi per il Deposito",
                    "Tempi per il Prelievo",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-left text-lg font-semibold text-gray-700"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body using map */}
              <tbody>
                {paymentMethods.map((payment, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-6 py-4 text-gray-700 bg-gray-50">
                      {payment.method}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {payment.depositTime}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {payment.withdrawalTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
