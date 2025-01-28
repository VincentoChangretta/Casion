import { CasinoTopList } from "pages/GlobalSections/CasinoTopList";
import { CasinoListTables } from "./Tables/CasinoListTables";
import { casinoSites } from "pages/CasinoPage/data/CasinoListTables.data";
import { CasinoProControTable } from "./Tables/CasinoProControTable";
import { CasinoMigloriTable } from "./Tables/CasinoMigloriTable";
import { CasinoPageUnderTableInfo } from "./Tables/СasinoPageUnderTableInfo";
import { CasinoPageLT } from "./Tables/CasinoPageLT";


export const CasinoPageTables = () => {
  return (
    <section>
      <div className="main-container">
        <CasinoTopList data={casinoSites} />
        <CasinoListTables />
        <CasinoProControTable />
        <CasinoMigloriTable />
        <CasinoPageUnderTableInfo/>
        <CasinoPageLT/>
      </div>
    </section>
  );
};
