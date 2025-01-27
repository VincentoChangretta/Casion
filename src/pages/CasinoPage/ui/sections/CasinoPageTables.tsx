import { CasinoTopList } from "pages/GlobalSections/CasinoTopList";
import { CasinoListTables } from "./CasinoListTables";
import { casinoSites } from "pages/CasinoPage/data/CasinoListTables.data";
import { CasinoProControTable } from "./CasinoProControTable";
import { CasinoMigloriTable } from "./CasinoMigloriTable";
import { CasinoPageUnderTableInfo } from "./СasinoPageUnderTableInfo";
import { CasinoPageLT } from "./CasinoPageLT";


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
