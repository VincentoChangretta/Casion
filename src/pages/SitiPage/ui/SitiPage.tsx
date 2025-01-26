import { UnderHeader } from "widgets/UnderHeader/UnderHeader";
import { SitiPageInfo } from "./sections/SitiPageInfo";
import { SitiPagePerson } from "./sections/SitiPagePerson";
import { SitiPageTables } from "./sections/SitiPageTables";
import { SitiPageTop } from "./sections/SitiPageTop";
import { SitiUnderHeaderData } from "../data/underHeader";

const SitiPage = () => {
  return (
    <>
      <UnderHeader data={SitiUnderHeaderData} />
      <SitiPagePerson />
      <SitiPageTop />
      <SitiPageTables />
      <SitiPageInfo />
    </>
  );
};

export default SitiPage;
