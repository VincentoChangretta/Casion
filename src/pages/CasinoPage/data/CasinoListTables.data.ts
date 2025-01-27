export const casinoSites: string[] = [
  "Cirusbet",
  "Betcoin",
  "Betmaster",
  "1xbet",
  "TrustDice",
  "Casinoin",
  "Moonwin",
  "N1 Bet",
  "LuckyHunter",
  "ZotaBet",
];

interface casinoBettingSitesTypes {
  name: string;
  pros: string[];
  cons: string[];
}

export const casinoBettingSites: casinoBettingSitesTypes[] = [
  {
    name: "Cirusbet",
    pros: [
      "Registrazione in 1 clic",
      "10 criptovalute supportate",
      "Cashback del 10%",
      "300+ eventi di tennis",
      "Licenza eGaming Curaçao No. 8048/JAZ",
    ],
    cons: ["Prelievi fino a 3 giorni", "Nessun bonus di benvenuto"],
  },
  {
    name: "Betcoin",
    pros: [
      "1.000+ giochi gratuiti",
      "Bonus sul 1° deposito 100% fino a 1 BTC + 25 FS",
      "50 fornitori",
      "14 tavoli da poker unici",
      "15+ tornei",
      "Licenza eGaming Curaçao No. 365/JAZ",
    ],
    cons: ["Discipline sportive limitate"],
  },
  {
    name: "Betmaster",
    pros: [
      "Offerta di benvenuto Casinò 100% fino a €1.000 sul primo deposito + 100 FS",
      "Sport Offerta di benvenuto 100% fino a €1.000 sul primo deposito + €40 di scommessa gratuita",
      "8 criptovalute supportate",
      "30+ fornitori",
      "Chat live 24/7/365",
      "Prelievo istantaneo delle vincite",
      "Licenza eGaming Curaçao No. 365/JAZ",
    ],
    cons: ["Solo 2.000 slot"],
  },
  {
    name: "1xbet",
    pros: [
      "Pacchetto di benvenuto fino a €1.500 + 150 FS",
      "Scommesse sportive su oltre 60 sport",
      "100+ fornitori",
      "Supporta più di 250 sistemi di pagamento",
      "Assistenza clienti 24/7",
      "Licenza eGaming Curaçao No. 1668/JAZ",
    ],
    cons: ["Nessun programma VIP"],
  },
  {
    name: "TrustDice",
    pros: [
      "Trasferimenti istantanei da e verso il portafoglio crypto",
      "Bonus di benvenuto fino a 3 BTC + 25 giri gratis",
      "Scommesse sportive su oltre 50 sport",
      "25+ fornitori",
      "Licenza eGaming Curaçao No. 8048/JAZ",
    ],
    cons: ["Solo 2.000+ giochi bitcoin"],
  },
  {
    name: "Casinoin",
    pros: [
      "Bonus di benvenuto del casinò 100% fino a €1.000 + 100 FS",
      "Bonus di benvenuto nella sezione sport 100% fino a €1.000 + €10 Free Bet",
      "8.900+ giochi da 100+ fornitori",
      "Cashback settimanale del 10%",
      "Licenza eGaming Curaçao No. 365/JAZ",
    ],
    cons: [
      "Requisito di scommessa alto di 50x per il bonus di benvenuto",
      "Fino al 5% di commissione amministrativa su depositi e prelievi",
    ],
  },
  {
    name: "Moonwin",
    pros: [
      "Premio di 51 Lucky Ticket di 2.500 FS",
      "Bonus sul 1° deposito 100% fino a €5.000 + 100 FS",
      "9 tornei disponibili",
      "Oltre 80 fornitori di giochi",
      "Licenza eGaming Curaçao No. 8048/JAZ2020-013",
    ],
    cons: ["I prelievi tramite bonifico bancario richiedono fino a 7 giorni"],
  },
  {
    name: "N1 Bet",
    pros: [
      "40+ discipline sportive",
      "Bonus sul 1° deposito 100% до €1.000 + 150 FS",
      "Per lo sport: Bonus sul 1° deposito Scommesse Gratuite 50% fino a €200",
      "Oltre 600 eventi di calcio",
      "14 giochi esports",
      "30 livelli VIP",
      "Licenza eGaming Curaçao No. 8048/JAZ2020-013",
    ],
    cons: [
      "Requisito di scommessa alto di 50x per i bonus di benvenuto e altri",
    ],
  },
  {
    name: "LuckyHunter",
    pros: [
      "20 metodi di pagamento disponibili",
      "Pacchetto di benvenuto fino a €5.000 + 250 FS",
      "App iOS / Android conveniente",
      "10 tornei disponibili con montepremi massimo di €3.000.000",
      "Licenza eGaming Curaçao No. 8048/JAZ2019-015",
    ],
    cons: ["Solo 2.000 giochi"],
  },
  {
    name: "ZotaBet",
    pros: [
      "Prelievi senza commissioni",
      "Bonus di benvenuto fino a €6.000 + 100 FS",
      "Cashback giornaliero fino al 20%",
      "6 tornei disponibili con montepremi massimo di €10.000,00",
      "Licenza eGaming Curaçao No. 8048/JAZ2019-015",
    ],
    cons: ["Nessun bonus per i giocatori high roller"],
  },
];

interface casinoProsConsTypes {
  title: string;
  pros: string[];
  cons: string[];
}

export const casinoProsCons: casinoProsConsTypes = {
  title: "Pro e Contro casinò non AAMS che pagano subito",
  pros: [
    "5.000-10.000 titoli di giochi",
    "1.000+ eventi sportivi giornalieri per le scommesse",
    "Generose offerte di benvenuto, ad esempio fino a €18.000 + 230 FS al Loki Casino",
    "Licenze Curaçao, MGA e UKGC",
    "Fino a 100 opzioni di valuta digitale",
    "Cashback dal 10% al 20% settimanale o mensile",
    "Assistenza clienti 24/7",
    "30+ programmi VIP",
    "Privacy e anonimato",
  ],
  cons: [
    "Alcuni bonus hanno un requisito di puntata di 50x",
    "Assistenza clienti non sempre disponibile in italiano",
    "Spesso si applicano limiti di prelievo",
    "Talvolta commissioni di transazione aggiuntive",
  ],
};

interface CasinoPageUnderTableInfoDataTypes {
  title: string;
  items?: string[];
  content?: string;
}

export const CasinoPageUnderTableInfoData: CasinoPageUnderTableInfoDataTypes[] =
  [
    {
      title: "Fatti sui migliori casinò non AAMS con prelievo immediato",
      items: [
        "I siti casinò non AAMS hanno licenze rilasciate da autorità internazionali come Curaçao e Malta.",
        "I bonus di benvenuto nei casinò online non AAMS possono arrivare fino a €1.500 o più.",
        "La percentuale di RTP (Return to Player) nei casinò non AAMS spesso supera il 96%.",
        "I giocatori italiani possono accedere ai casinò online non AAMS senza bisogno di registrarsi con il sistema italiano SPID o verificare l'identità con documenti.",
        "I migliori casinò non AAMS offrono spesso bonus senza deposito che vanno da €10 a €50.",
      ],
    },
    {
      title: "Quali sono i Migliori Casinò Online non AAMS in Italia?",
      items: [
        "<strong>Posido</strong> - Perfetto per chi cerca bonus settimanali con fino a €15.000 e promozioni sportive.",
        "<strong>Boomerang</strong> - Ideale per gli amanti dei tornei di slot con premi fino a €75.000 e un’ampia collezione di giochi.",
        "<strong>iWild</strong> - Ottima scelta per chi desidera un pacchetto di benvenuto su 4 depositi fino a €3.500 + 270 FS.",
        "<strong>AmunRa</strong> - Consigliato per i giocatori di eSports, con bonus fino a €500 e promozioni settimanali.",
        "<strong>LuckyHour</strong> - Scelta popolare per chi apprezza il bonus high roller fino a €2.000 e 7.500 giochi.",
        "<strong>FEZbet</strong> - Perfetto per chi cerca un cashback settimanale fino al 15% e tornei sportivi.",
        "<strong>Tsars</strong> - Ideale per chi ama i bonus di ricarica fino a €300 e 24/7 live support.",
        "<strong>Infinity</strong> - Scelta eccellente per chi cerca tornei con premi fino a €75.000 e cashback settimanale.",
        "<strong>Casinoly</strong> - Perfetto per chi ama i tornei di casinò e fino a 200 FS settimanali.",
        "<strong>Megapari</strong> - Consigliato per chi preferisce scommettere su eventi sportivi con bonus fino a €500.",
      ],
    },
    {
      title: "Come verificare e scegliere un casinò online stranieri non AAMS?",
      content:
        "Abbiamo testato più di 50 casinò senza licenza AAMS. Nel farlo, ci siamo concentrati sulle piattaforme con licenza internazionale. Si tratta di Curaçao o Malta. Sono le migliori. Ecco cosa abbiamo testato per primo.",
    },
    {
      title: "Giochi del Casinò",
      content:
        "Una buona piattaforma offre un'ampia gamma di giochi. Boomerang è una delle migliori. Qui sono disponibili più di 10.000 slot. Anche LuckyHour è una buona scelta. Ha giochi di oltre 120 fornitori.",
    },
    {
      title: "Opzioni di Pagamento",
      content:
        "La flessibilità nei pagamenti è molto importante. Tsars è rinomato per i suoi pagamenti rapidi. Vengono effettuati in meno di 24 ore. Swiper è caratterizzato da un cashback settimanale fino al 25%. Questo aggiunge valore ai depositi.",
    },
    {
      title: "Affidabilità e Recensioni",
      content:
        "I casinò senza licenza AAMS devono dimostrare affidabilità. Tutti i casinò della nostra classifica hanno recensioni positive. iWild è popolare per i suoi tornei con premi fino a €30.000. Rollino è ideale per chi cerca bonus e tornei regolari.",
    },
    {
      title: "Sicurezza e Licenze",
      content:
        "Licenze di enti affidabili = sicurezza. I casinò della nostra classifica sono sicuri grazie alle loro licenze internazionali. Ad esempio, AmunRa gode di una solida reputazione e offre 200 giochi nella sezione cybersport.",
    },
    {
      title: "I Bonus",
      content:
        "Un punto importante a cui prestare attenzione sono i bonus. PlayOro ha una promozione del 100% su ogni deposito. Wonaco offre promozioni settimanali con cashback e tornei esclusivi.",
    },
  ];
