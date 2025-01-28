import {
  BassBetLogo,
  BoomerangLogo,
  CasimboLogo,
  DollyLogo,
  FrumziLogo,
  GreenluckLogo,
  InfinityLogo,
  InstantLogo,
  MalinaLogo,
  MrPachoLogo,
  TikitakaLogo,
} from "shared/images";

export interface Promotion {
  date: string; // Date of the promotion
  bonus: string; // Exact bonus description (e.g., Bonus esclusivo: 500€ + 200 Giri Gratis)
  cashback?: string; // Optional cashback percentage (e.g., 25%)
  rating: number; // Rating from 8.5 to 10
  additionalBonus?: string; // Optional additional bonuses (e.g., Bonus 100% fino a 500€)
  features: string[]; // List of features or benefits of the promotion
  img: string;
}

export const promotions: Promotion[] = [
  {
    date: "24/12/2024",
    bonus: "200% Welkomstbonus tot €7.500 ",
    cashback: "Cashback 10% 🌟",
    rating: 10,
    img: InstantLogo,
    features: [
      "Verschillende betaalmethodes als Google Pay en Apple Pay",
      "Zet tot wel €4000 in",
      "Wekelijks een 10% cashback op gemaakte verliezen",
    ],
  },
  {
    date: "24/12/2024",
    bonus: "🐬 Bonus esclusivo: 500€ + 200 Giri Gratis ",
    cashback: "Cashback 25% 🌟",
    rating: 9.9,
    img: BassBetLogo,
    features: [
      "Registrazione rapida in 1 clic",
      "Oltre 9.900 giochi disponibili",
      "Cashback fino al 25% garantito",
    ],
  },
  {
    date: "26/01/2025",
    bonus: "🦊 Bonus esclusivo: 500€ + 200 Free Spins ",
    cashback: "Cashback 15% 💎",
    rating: 9.8,
    img: CasimboLogo,
    features: [
      "Pagamenti immediati",
      "Bonus settimanali sui granchi",
      "Il miglior casinò scelto dalla nostra redazione",
    ],
  },
  {
    date: "24/01/2025",
    bonus: "🎲 300% Bonus fino a 3.000€ + 300 Giri Gratis",
    rating: 9.5,
    img: GreenluckLogo,
    features: [
      "Bonus 100% fino a 500€",
      "Affascinanti croupier live al tavolo",
      "Scommesse uniche sul calcio con grandi vincite",
    ],
  },
  {
    date: "1/02/2025",
    bonus: "🏟️ 10.000 Giochi disponibili",
    rating: 9.0,
    img: MalinaLogo,
    features: [
      "Bonus di benvenuto di €500",
      "Casinò mobile semplice e intuitivo",
      "RTP superiore al 98,5% (⚠️ verificato)",
    ],
  },
  {
    date: "2/02/2025",
    bonus: "🎖️ 500€ + 100 Giri Gratis!",
    rating: 8.9,
    img: TikitakaLogo,
    features: [
      "Bonus di ricarica €700 + 50 giri gratis",
      "Slot innovative ed esclusive",
      "Servizio clienti pluripremiato e sempre disponibile",
    ],
  },
  {
    date: "3/02/2025",
    bonus: "🏆 Fino a 2.000€ + 800 Giri Gratis",
    rating: 8.9,
    img: BoomerangLogo,
    features: [
      "Bonus fino a €500 nel Casinò",
      "Promozione sportiva: 100% fino a €150",
      "Registrazione immediata",
    ],
  },
  {
    date: "1/02/2025",
    bonus: "⚡ 500€ + 200 Free Spins ",
    cashback: "Cashback 25% 💋",
    rating: 8.8,
    img: MrPachoLogo,
    features: [
      "Pagamenti ultra veloci",
      "La più ampia selezione di criptovalute",
      "Il mio casinò preferito del 2025",
    ],
  },
  {
    date: "1/02/2025",
    bonus: "🌟 2.500€ + 200 Giri Gratis (⚠️ Promozione valida per 30 giorni)",
    rating: 8.5,
    img: InfinityLogo,
    features: [
      "Bonus nel Casinò di 2.500€",
      "Bonus sportivo 100% fino a 150€",
      "Bonus weekend fino a €700",
    ],
  },
  {
    date: "31/01/2025",
    bonus: "🧩 Bonus 500€ + 200 Giri Gratis",
    rating: 8.5,
    img: DollyLogo,
    features: [
      "Cashback fino al 25%",
      "Slot uniche disponibili",
      "Esperienza personalizzata con programma fedeltà",
    ],
  },
  {
    date: "1/02/2025",
    bonus: "🎡 500€ + 200 Giri Gratis",
    rating: 8.4,
    img: FrumziLogo,
    features: [
      "Pagamenti ultra veloci",
      "Bonus 100% fino a 500€",
      "Registrazione immediata",
    ],
  },
];
