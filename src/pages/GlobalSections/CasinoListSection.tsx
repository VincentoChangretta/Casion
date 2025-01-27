import { Card } from "pages/SitiPage/ui/sections/ui/Card";
import { Promotion } from "./data/data";

export const CasinoListSection = ({ data, title }) => {
  return (
    <section className="mb-section">
      <div className="main-container">
        <h2 className="smallTitle mb-[20px]">{title}</h2>
        <div className="flex flex-col gap-[20px]">
          {data.map((card: Promotion, index: number) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
