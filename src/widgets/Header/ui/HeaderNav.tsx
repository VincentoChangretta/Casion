import { Link } from "react-router-dom";
import { HeaderRoutes } from "../routes/routes";
import { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

interface HeaderNavTypes {
  setPathname: (prev: string) => void;
}

export const HeaderNav: FC<HeaderNavTypes> = ({ setPathname }) => {
  const [burger, setBurger] = useState(false);
  const [bar, setBar] = useState(false);

  const activeBurger = () => {
    const windowWidth = window.innerWidth;
    windowWidth <= 950 ? setBurger(true) : setBurger(false);
  };

  const changePage = (route: string) => {
    setPathname(route);
    bar ? setBar(false) : null;
  };

  useEffect(() => {
    activeBurger();
    window.addEventListener("resize", activeBurger);
    return () => window.removeEventListener("resize", activeBurger);
  }, []);

  return burger ? (
    <div className="grow basis-0 relative text-right cursor-pointer">
      <div
        onClick={() => setBar(false)}
        className={`fixed inset-0 z-20 transition-all ${
          bar ? "backdrop-blur-xl" : "opacity-0 invisible"
        }`}
      ></div>
      <FontAwesomeIcon
        onClick={() => setBar((prev) => !prev)}
        className={`z-[1001] text-4xl ${
          !bar ? "relative" : "fixed right-[10px] top-[15px]"
        }`}
        icon={!bar ? faBars : faX}
      />
      <nav
        className={`fixed z-[1000] top-0 right-0 bottom-0 px-[20px] py-[150px] w-[300px] bg-mainBg-inv-dark transition-transform ${
          !bar ? "translate-x-full" : ""
        }`}
      >
        <ul className="flex flex-col gap-[30px]">
          {HeaderRoutes.map((route) => (
            <li key={route.path}>
              <Link to={route.path} onClick={() => changePage(route.path)}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  ) : (
    <nav className="grow basis-0 max-950:">
      <ul className=" flex justify-end gap-[30px] text-right">
        {HeaderRoutes.map((route) => (
          <li key={route.path}>
            <Link to={route.path} onClick={() => changePage(route.path)}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
