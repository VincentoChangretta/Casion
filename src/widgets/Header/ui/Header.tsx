import { Logo } from "shared/UI/Logo/Logo";
import { HeaderNav } from "./HeaderNav";
import { useEffect, useState } from "react";
import { NavRoutes } from "../routes/routes";

export const Header = () => {
  const [pathname, setPathname] = useState("/");
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const routeTitles = {
      [NavRoutes.CASINO_NON_AAMS]: "Casino non AAMS",
      [NavRoutes.SITI_NON_AAMS]: "Siti non AAMS",
    };
    setHeaderData(routeTitles[pathname] || "");
  }, [pathname]);

  return (
    <header className="bg-mainBg-inv text-mainBg border-b-1 border-b-glassWhite">
      <div className="full-container">
        <div className="flex justify-between items-center py-[10px]">
          <Logo
            className="grow basis-0 whitespace-nowrap"
            headerData={headerData}
          />
          <h2 className="text-2xl font-extrabold max-860:hidden">
            {headerData}
          </h2>
          <HeaderNav setPathname={setPathname} />
        </div>
      </div>
    </header>
  );
};
