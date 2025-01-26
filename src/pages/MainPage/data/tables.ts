interface BettingSite {
  name: string; // Название сайта
  details: SiteDetail[]; // Массив с деталями сайта
}

interface SiteDetail {
  title: string; // Заголовок (например, "Operatore & Licenza")
  content: string | string[]; // Содержимое может быть строкой или массивом строк
}

export const bettingSites: BettingSite[] = [
  {
    name: "Cobra",
    details: [
      {
        title: "Operatore & Licenza",
        content: "Dama N.V., Curacao №8048/JAZ2020-13",
      },
      {
        title: "Bonus di benvenuto (sport)",
        content: "100% fino a €100 in scommesse gratuite + 50 Free Spins",
      },
      {
        title: "Vantaggi",
        content: [
          "Fino a 20 valute supportate",
          "Bonus crypto fino a 5 BTC",
          "High Roller Bonus 50% fino a €1.000",
          "Scommesse su oltre 40 sport",
        ],
      },
      { title: "Svantaggi", content: ["Nessun FS nelle promozioni regolari"] },
    ],
  },
  {
    name: "Boomerang",
    details: [
      {
        title: "Operatore & Licenza",
        content: "Opera sotto la supervisione legale delle Isole Marshall.",
      },
      {
        title: "Bonus di benvenuto (sport)",
        content: "100% fino a €500 sul primo deposito",
      },
      {
        title: "Vantaggi",
        content: [
          "Fino a 4 criptovalute supportate",
          "Fino a 20 show di gioco",
          "App mobile facile da usare",
          "Cashback settimanale 15% fino a €3.000 per scommesse sportive",
        ],
      },
      { title: "Svantaggi", content: ["Nessun bonus per high rollers"] },
    ],
  },
  {
    name: "Sportaza",
    details: [
      { title: "Operatore & Licenza", content: "Curaçao Gambling Authority" },
      {
        title: "Bonus di benvenuto (sport)",
        content: "100% fino a €100 sul primo deposito",
      },
      {
        title: "Vantaggi",
        content: [
          "90+ fornitori",
          "Fino a 30 sport disponibili per scommesse live",
          "Cashback settimanale 15% fino a €3.000",
          "Fino a 8 criptovalute accettate",
          "Accumulator boost fino al 100% per le scommesse sportive",
        ],
      },
      { title: "Svantaggi", content: ["Nessun bonus per high rollers"] },
    ],
  },
  {
    name: "22bet",
    details: [
      { title: "Operatore & Licenza", content: "Curaçao Gambling Authority" },
      {
        title: "Bonus di benvenuto (sport)",
        content: "100% fino a €122 sul primo deposito",
      },
      {
        title: "Vantaggi",
        content: [
          "Fino a 150 metodi di pagamento",
          "Scommesse live su oltre 40 sport",
          "Bonus ricarica del venerdì: 100% fino a €100 per scommesse sportive",
        ],
      },
      { title: "Svantaggi", content: ["Nessun programma VIP"] },
    ],
  },
  {
    name: "ZotaBet",
    details: [
      {
        title: "Operatore & Licenza",
        content: "Hollycorn N.V., Curacao №8048/JAZ2019-015",
      },
      {
        title: "Bonus di benvenuto (sport)",
        content: "Freebet 10% fino a €100 + Hunting Bonus fino a €150",
      },
      {
        title: "Vantaggi",
        content: [
          "Fino a 45 discipline sportive",
          "15 giochi di eSports",
          "Cashback giornaliero fino al 20%",
          "Prelievi senza commissioni",
          "ZotaTennisBoost fino al 70% per scommesse sportive",
        ],
      },
      { title: "Svantaggi", content: ["Nessun FS nelle promozioni regolari"] },
    ],
  },
  {
    name: "Casinia",
    details: [
      { title: "Operatore & Licenza", content: "Curaçao Gambling Authority" },
      {
        title: "Bonus di benvenuto (sport)",
        content: "100% fino a €100 sul primo deposito",
      },
      {
        title: "Vantaggi",
        content: [
          "Scommesse sportive su oltre 30 discipline",
          "Cashback settimanale 15% fino a €3.000",
          "4 criptovalute supportate",
          "Più di 90 fornitori di giochi",
          "Accumulator boost fino al 100% per le scommesse sportive",
        ],
      },
      {
        title: "Svantaggi",
        content: ["Limite di vincita per scommesse combinate fino a €500"],
      },
    ],
  },
  {
    name: "Legiano",
    details: [
      {
        title: "Operatore & Licenza",
        content:
          "Sotto la regolamentazione della giurisdizione delle Isole Marshall.",
      },
      {
        title: "Bonus di benvenuto (sport)",
        content: "100% fino a €100 sul primo deposito",
      },
      {
        title: "Vantaggi",
        content: [
          "Cashback fino al 25%",
          "Scommesse sportive su oltre 30 discipline",
          "Tornei settimanali con 4 eventi",
          "Cashback 10% fino a €500 per le scommesse sportive",
        ],
      },
      {
        title: "Svantaggi",
        content: ["Meno di 15 opzioni per le scommesse sugli eSport"],
      },
    ],
  },
  {
    name: "Infinity",
    details: [
      {
        title: "Operatore & Licenza",
        content:
          "Soggetto al controllo legale delle autorità delle Isole Marshall.",
      },
      {
        title: "Bonus di benvenuto (sport)",
        content: "100% fino a €100 sul primo deposito",
      },
      {
        title: "Vantaggi",
        content: [
          "Fino a 18 valute e criptovalute",
          "Programma VIP a 5 livelli",
          "Cashback settimanale fino al 25%",
          "5 tornei attivi ogni settimana",
          "Ricarica settimanale 50% fino a €500 per le scommesse sportive",
        ],
      },
      {
        title: "Svantaggi",
        content: ["Solo 8 sport disponibili per lo streaming live"],
      },
    ],
  },
  {
    name: "CrownPlay",
    details: [
      {
        title: "Operatore & Licenza",
        content: "Opera sotto l'autorità legale delle Isole Marshall.",
      },
      {
        title: "Bonus di benvenuto (sport)",
        content: "100% fino a €100 sul primo deposito",
      },
      {
        title: "Vantaggi",
        content: [
          "72 fornitori di giochi",
          "Cashback settimanale fino al 15%",
          "7 tornei disponibili",
          "Piattaforma cripto-friendly",
          "Ricarica settimanale 50% fino a €500 per le scommesse sportive",
        ],
      },
      { title: "Svantaggi", content: ["Nessun bonus per high rollers"] },
    ],
  },
  {
    name: "Snatch",
    details: [
      {
        title: "Operatore & Licenza",
        content: "Altacore N.V., Curacao License No 8048/JAZ2019-049.",
      },
      {
        title: "Bonus di benvenuto (sport)",
        content: "100% fino a €100 + 50 Free Spins",
      },
      {
        title: "Vantaggi",
        content: [
          "Fino a 7.000 giochi disponibili",
          "Highroller Bonus 200% fino a €3.000 + 100 Free Spins",
          "Scommesse su oltre 30 discipline sportive",
          "Cashback settimanale fino al 20% per le scommesse sportive",
        ],
      },
      {
        title: "Svantaggi",
        content: [
          "Meno di 15 partite vengono trasmesse in diretta ogni giorno",
        ],
      },
    ],
  },
];
