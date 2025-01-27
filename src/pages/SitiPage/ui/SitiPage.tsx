import { UnderHeader } from "widgets/UnderHeader/UnderHeader";
import { SitiPageInfo } from "./sections/SitiPageInfo";
import { SitiPagePerson } from "./sections/SitiPagePerson";
import { SitiPageTables } from "./sections/SitiPageTables";
import { SitiUnderHeaderData } from "../data/underHeader";
import { CasinoListSection } from "pages/GlobalSections/CasinoListSection";
import { promotions } from "../../GlobalSections/data/data";

const SitiPage = () => {
  return (
    <>
      <UnderHeader data={SitiUnderHeaderData} />
      <SitiPagePerson />
      <CasinoListSection
        data={promotions}
        title={"Siti non AAMS con bonus senza deposito"}
      />
      <SitiPageTables />
      <SitiPageInfo />
    </>
  );
};

export default SitiPage;
