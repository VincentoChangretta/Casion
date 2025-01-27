import { underHeaderDataTypes } from "pages/SitiPage/data/underHeader";
import { FC } from "react";
import { pokerIcon1, pokerIcon2, pokerIcon3, underHeader } from "shared/images";

interface UnderHeaderTypes {
  data: underHeaderDataTypes;
}

interface cardDataTypes {
  val: string;
  name: string;
  img?: string;
}

const cardData: cardDataTypes[] = [
  {
    val: "30+",
    name: "recensioni",
    img: pokerIcon1,
  },
  {
    val: "500€",
    name: "Bonus fino",
    img: pokerIcon2,
  },
  {
    val: "1.000.000€",
    name: "in tornei",
    img: pokerIcon3,
  },
];

export const UnderHeader: FC<UnderHeaderTypes> = ({ data }) => {
  const { title, description } = data;
  return (
    <div className="pt-[50px] bg-mainBg-inv text-mainBg mb-[30px]">
      <div className="main-container">
        <div className="flex items-start justify-between">
          <div>
            <div className="max-w-[700px] mb-[20px]">
              <h2 className="relative title mb-[35px]">
                {title}
                <div className="absolute bottom-[-15px] left-0 w-[85px] h-[8px] bg-elemColor rounded-[10px]"></div>
              </h2>
              <p className="text-pretty">{description}</p>
            </div>
            <div>
              <ul className="flex gap-[5px]">
                {cardData.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-[17px] max-w-[270px] w-full bg-mainBg-inv-light pl-[17px] py-[13px] rounded-[4px]"
                  >
                    <div className="pt-[10px]">
                      <img
                        className="w-[25px]"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <h3 className="text-[26px] font-bold">{item.val}</h3>
                      <h5 className="text-sm">{item.name}</h5>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative max-w-[433px]">
            <img
              className="relative z-10 img"
              src={underHeader}
              alt="games image"
            />
            <div className="lightBall top-2/4 left-2/4 -translate-2/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
