import { FC } from "react";
import { Button } from "shared/UI/Button/Button";
import StarRatings from "react-star-ratings";
import { Promotion } from "pages/GlobalSections/data/data";

interface cardProps {
  data: Promotion;
}

export const Card: FC<cardProps> = ({ data }) => {
  const { bonus, date, features, rating, cashback, img } = data;

  return (
    <article className="p-[35px] rounded-[20px] border-2 border-elemColor max-425:p-[20px]">
      <div className="flex justify-between gap-[20px] max-1200:flex-col">
        <div className="flex gap-[20px] max-860:flex-col max-860:gap-[15px]">
          <div>
            <div className="w-[170px] h-[80px]">
              <img
                className="max-w-[170px] mb-[5px] w-full h-full object-cover"
                src={img}
                alt={`logo`}
              />
            </div>
            <div className="text-sm opacity-[.4]">{date}</div>
          </div>
          <div className="max-w-[570px] w-full">
            <h4 className="text-2xl text-balance font-extrabold mb-[15px]">
              {bonus}
              {cashback ? `+ ${cashback}` : ""}
            </h4>
            <ul>
              {features.map((item, index) => (
                <li key={index} className="relative pl-[20px] text-pretty">
                  <span className="absolute top-0 left-[-2px]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between max-1200:flex-row max-860:flex-col max-860:gap-[15px]">
          <div className="flex items-center gap-[20px] max-425:flex-col max-425:gap-[10px] max-425:items-start">
            <span className="text-2xl font-extrabold">Rating: {rating}</span>
            <div className="max-w-[150px]">
              <StarRatings
                rating={rating}
                starRatedColor="#FC4022"
                numberOfStars={10}
                name="rating"
                starDimension="25px" // Устанавливаем размер звезд
                starSpacing="1px" // Устанавливаем промежуток между звездами
              />
            </div>
          </div>
          <Button className="bg-elemColor text-mainBg max-w-[300px] max-425:text-lg">
            Registrazione in 1 clic
          </Button>
        </div>
      </div>
    </article>
  );
};
