import { Button } from "shared/UI/Button/Button";
import { Logo } from "shared/UI/Logo/Logo";

export const Header = () => {
  return (
    <header className="bg-mainBg-inv text-mainBg border-b-1 border-b-glassWhite">
      <div className="full-container">
        <div className="flex justify-between items-center py-[10px]">
          <Logo className="grow basis-0" />
          <h2 className="text-2xl font-extrabold">Siti non AAMS</h2>
          <div className="grow basis-0 text-right">
            <Button>Top</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
