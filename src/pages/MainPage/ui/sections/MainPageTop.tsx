import { promotions } from "pages/MainPage/data/data";
import { Card } from "./ui/Card";

export const MainPageTop = () => {
  return (
    <section className="mb-section">
      <div className="main-container">
        <h2 className="smallTitle mb-[20px]">Siti non AAMS con bonus senza deposito</h2>
        <div className="flex flex-col gap-[20px]">
          {promotions.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
