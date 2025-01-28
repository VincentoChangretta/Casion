import { CasinoPageUnderTableInfoData } from "pages/CasinoPage/data/CasinoListTables.data";
import React from "react";

export const CasinoPageUnderTableInfo = () => {
  return (
    <section className="my-8 text-xl">
      {CasinoPageUnderTableInfoData.map((section, index) => (
        <div key={index} className="mb-8">
          {section.items ? (
            <>
              <h2 className="smallTitle font-extrabold px-6 mb-[20px]">
                {section.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2 flex flex-col gap-[10px] mb-[30px] max-500:text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2 className="smallTitle font-extrabold mb-[20px]">
                {section.title}
              </h2>
              <p className="mb-4 max-500:text-sm">{section.content}</p>
            </>
          )}
        </div>
      ))}
    </section>
  );
};
