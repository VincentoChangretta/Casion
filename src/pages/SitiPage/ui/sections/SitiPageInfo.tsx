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
      <section className="text-xl max-500:text-lg">
        <div className="main-container">
          <h2 className="smallTitle mb-[20px]">
            Migliori Siti non AAMS del 2025
          </h2>
          <ul className="list-disc flex flex-col gap-[10px] mb-[30px]">
            {miglioriSiti.map((site, index) => (
              <li key={index} className="bg-white rounded-lg">
                <strong className="text-mainBg-inv">{site.name}</strong> -{" "}
                {site.description}
              </li>
            ))}
          </ul>

          <div className="mb-[30px]">
            <h2 className="smallTitle mb-[20px]">
              Quali sono i Migliori Siti di Scommesse non AAMS?
            </h2>
            <ul className="list-disc flex flex-col gap-[10px] mb-[30px]">
              {bettingFeatures.map((feature, index) => (
                <li
                  className="bg-white text-color-text-primary rounded-lg"
                  key={index}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-[30px]">
            <h2 className="smallTitle mb-[20px]">
              Quali sono i Migliori Siti non AAMS Sicuri?
            </h2>
            <ul className="list-disc flex flex-col gap-[10px] mb-[30px]">
              {miglioriSitiSicuri.map((site, index) => (
                <li
                  key={index}
                  className="bg-white text-color-text-primary rounded-lg  "
                >
                  <strong className="text-mainBg-inv">{site.name}</strong> -{" "}
                  {site.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-[30px]">
            <div className="mb-[20px]">
              <h2 className="smallTitle mb-[20px]">
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
                <h4 className="text-2xl font-extrabold mb-[30px]">
                  {section.title}
                </h4>
                <ul className="list-disc flex flex-col gap-[10px]">
                  {section.items.map((item, itemIndex) => (
                    <li
                      className="bg-white text-color-text-primary rounded-lg  "
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
    </>
  );
};
