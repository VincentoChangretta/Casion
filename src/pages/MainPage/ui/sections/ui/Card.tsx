import { Promotion } from "pages/MainPage/data/data";
import { FC, useState } from "react";
import { Button } from "shared/UI/Button/Button";
import StarRatings from "react-star-ratings";

interface cardProps {
  data: Promotion;
}

export const Card: FC<cardProps> = ({ data }) => {
  const {
    bonus,
    date,
    features,
    rating,
    additionalBonus,
    cashback,
    validity,
    img,
  } = data;

  return (
    <article className="p-[35px] rounded-[20px] border-2 border-elemColor">
      <div className="flex items-start justify-between gap-[20px]">
        <div>
          <img
            className="max-w-[170px] w-full mb-[5px]"
            src={img}
            alt={`logo`}
          />
          <div className="text-sm opacity-[.4]">{date}</div>
        </div>
        <div className="max-w-[470px] w-full">
          <h4 className="text-2xl text-balance font-extrabold mb-[15px]">
            {bonus}
            {cashback ? `+ ${cashback}` : ""}
          </h4>
          <ul>
            {features.map((item, index) => (
              <li key={index}>— {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-3xl font-extrabold">{rating}</span>
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
        <Button className="bg-elemColor text-mainBg max-w-[300px]">
          Registrazione in 1 clic
        </Button>
      </div>
    </article>
  );
};
