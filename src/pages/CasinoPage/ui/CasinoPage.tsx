import { CasinoListSection } from "pages/GlobalSections/CasinoListSection";
import { CasinoTopList } from "pages/GlobalSections/CasinoTopList";
import { promotions } from "pages/GlobalSections/data/data";
import { CasinoUnderHeaderData } from "pages/SitiPage/data/underHeader";
import { UnderHeader } from "widgets/UnderHeader/UnderHeader";
import { CasinoPageTables } from "./sections/CasinoPageTables";




const CasinoPage = () => {
  return (
    <>
      <UnderHeader data={CasinoUnderHeaderData} />
      <CasinoListSection
        data={promotions}
        title="Lista migliori casinò online non AAMS che pagano subito"
      />
      <CasinoPageTables/>
    </>
  );
};

export default CasinoPage;
