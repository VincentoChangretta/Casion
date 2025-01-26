import { Link } from "react-router-dom";
import { Logo } from "shared/UI/Logo/Logo";
import { HeaderRoutes } from "../routes/routes";

export const Header = () => {
  return (
    <header className="bg-mainBg-inv text-mainBg border-b-1 border-b-glassWhite">
      <div className="full-container">
        <div className="flex justify-between items-center py-[10px]">
          <Logo className="grow basis-0" />
          <h2 className="text-2xl font-extrabold">Siti non AAMS</h2>
          <ul className="grow flex justify-end gap-[30px] basis-0 text-right">
            {HeaderRoutes.map((route) => (
              <li key={route.path}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
