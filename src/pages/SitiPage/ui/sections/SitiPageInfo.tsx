import {
  bestFeatures,
  bettingFeatures,
  miglioriSiti,
  miglioriSitiSicuri,
  paymentMethods,
} from "pages/SitiPage/data/info";

export const SitiPageInfo = () => {
  return (
    <>
      <section className="mb-section text-xl">
        <div className="main-container">
          <h2 className="smallTitle mb-[20px] text-text-primary">
            Migliori Siti non AAMS del 2025
          </h2>
          <ul className="list-disc flex flex-col gap-[10px] mb-[30px]">
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
            <ul className="list-disc flex flex-col gap-[5px] mb-[30px]">
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
            <ul className="list-disc flex flex-col gap-[10px] mb-[30px]">
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
                <ul className="list-disc flex flex-col gap-[10px]">
                  {section.items.map((item, itemIndex) => (
                    <li
                      className="p-[5px] bg-white text-color-text-primary rounded-lg  "
                      key={itemIndex}
                    >
                      {item}
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
