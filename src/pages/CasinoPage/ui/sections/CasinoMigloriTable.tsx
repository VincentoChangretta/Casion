import React from "react";

const casinos = [
  {
    name: "Rollino",
    description:
      "🎁 La migliore piattaforma per grandi bonus e tornei regolari",
  },
  {
    name: "Boomerang",
    description: "🎰 La più vasta collezione di slot — oltre 10.000 giochi",
  },
  {
    name: "Swiper",
    description:
      "💸 Cashback massimo per i giocatori — fino al 25% settimanale",
  },
  {
    name: "LuckyHour",
    description:
      "📱 Il leader con un'ampia selezione di giochi da oltre 120 fornitori",
  },
  {
    name: "AmunRa",
    description:
      "🎮 La scelta perfetta per gli appassionati di scommesse sugli eSports — 200+ giochi",
  },
  {
    name: "iWild",
    description: "🏆 I migliori tornei con premi fino a €30.000",
  },
  {
    name: "Tsars",
    description: "⏱️ I pagamenti più veloci — meno di 24 ore",
  },
  {
    name: "Wonaco",
    description:
      "🔐 Ideale per le scommesse sportive e le operazioni in criptovalute",
  },
  {
    name: "PlayOro",
    description:
      "🌟 Programma fedeltà eccellente con bonus del 100% su ogni deposito",
  },
  {
    name: "Gangsta",
    description: "🔥 Crypto con i migliori tornei e oltre 10.000 FS",
  },
];

export const CasinoMigloriTable = () => {
  return (
    <section className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-3xl font-semibold text-gray-800 py-4 px-6 bg-gray-100">
        Migliori Casino Online Non AAMS nel 2025
      </h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 border-t border-b border-gray-200">
            <th className="py-4 px-6 text-left text-gray-700">
              Nome del Casinò
            </th>
            <th className="py-4 px-6 text-left text-gray-700">Descrizione</th>
          </tr>
        </thead>
        <tbody>
          {casinos.map((casino, index) => (
            <tr key={index} className="border-t border-b border-gray-200">
              <td className="py-4 px-6 text-gray-800">{casino.name}</td>
              <td className="py-4 px-6 text-gray-600">{casino.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
