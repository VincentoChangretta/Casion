import { CasinoListSection } from "pages/GlobalSections/CasinoListSection";
import { promotions } from "pages/GlobalSections/data/data";
import { CasinoUnderHeaderData } from "pages/SitiPage/data/underHeader";
import { UnderHeader } from "widgets/UnderHeader/UnderHeader";
import { CasinoPageTables } from "./sections/CasinoPageTables";
import { SitiPagePerson } from "pages/SitiPage/ui/sections/SitiPagePerson";

export const CasinoPage = () => {
  return (
    <>
      <UnderHeader data={CasinoUnderHeaderData} />
      <SitiPagePerson/>
      <CasinoListSection
        data={promotions}
        title="Lista migliori casinò online non AAMS che pagano subito"
      />
      <CasinoPageTables />
    </>
  );
};

