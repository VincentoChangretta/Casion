import { MainPageInfo } from "./sections/MainPageInfo";
import { MainPagePerson } from "./sections/MainPagePerson";
import { MainPageTables } from "./sections/MainPageTables";
import { MainPageTop } from "./sections/MainPageTop";

const MainPage = () => {
  return (
    <>
      <MainPagePerson />
      <MainPageTop />
      <MainPageTables />
      <MainPageInfo />
    </>
  );
};

export default MainPage;
