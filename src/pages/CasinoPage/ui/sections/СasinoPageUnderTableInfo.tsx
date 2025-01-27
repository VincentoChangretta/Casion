import { CasinoPageUnderTableInfoData } from "pages/CasinoPage/data/CasinoListTables.data";
import React from "react";



export const CasinoPageUnderTableInfo = () => {
  return (
    <section className="my-8 text-xl text-text-primary">
      {CasinoPageUnderTableInfoData.map((section, index) => (
        <div key={index} className="mb-8">
          {section.items ? (
            <>
              <h2 className="text-3xl font-extrabold px-6 mb-[20px]">
                {section.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2 flex flex-col gap-[10px] mb-[30px]">
                {section.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-extrabold mb-[20px]">
                {section.title}
              </h2>
              <p className="text-text-primary mb-4">{section.content}</p>
            </>
          )}
        </div>
      ))}
    </section>
  );
};
