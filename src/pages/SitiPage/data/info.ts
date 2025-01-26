interface BettingSite {
  name: string;
  description: string;
}

interface SafeBettingSite extends BettingSite {}

interface BettingFeature {
  description: string;
}

interface Feature {
  title: string;
  items: string[];
}

interface PaymentMethod {
  method: string;
  depositTime: string;
  withdrawalTime: string;
}

export const miglioriSiti: BettingSite[] = [
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

export const miglioriSitiSicuri: SafeBettingSite[] = [
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

export const bettingFeatures: string[] = [
  "I siti di scommesse non AAMS spesso permettono l'uso di criptovalute per depositi e prelievi.",
  "In questi campi offrono mercati su eSports, eventi internazionali e scommesse live.",
  "I tempi di prelievo su questi siti sono fino a 48 ore.",
  "Molti siti di scommesse non AAMS offrono bonus cashback fino al 20% sulle perdite settimanali.",
  "I siti non AAMS non limitano le scommesse minime o massime, dando ai giocatori maggiore libertà di scelta.",
];

export const bestFeatures: Feature[] = [
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

export const paymentMethods: PaymentMethod[] = [
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
