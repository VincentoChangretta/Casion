import { pokerIcon1, pokerIcon2, pokerIcon3, underHeader } from "shared/images";

export const UnderHeader = () => {
  const cardData = [
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

  return (
    <div className="pt-[50px] bg-mainBg-inv text-mainBg">
      <div className="main-container">
        <div className="flex items-start justify-between">
          <div>
            <div className="max-w-[700px] mb-[20px]">
              <h2 className="relative title mb-[35px]">
                Siti Scommesse non AAMS che pagano subito
                <div className="absolute bottom-[-15px] left-0 w-[85px] h-[8px] bg-elemColor rounded-[10px]"></div>
              </h2>
              <p className="text-pretty">
                Siti Scommesse non AAMS che pagano subito sono la scelta
                migliore per gli scommettitori italiani! Abbiamo intervistato i
                clienti dei siti non AAMS e consultato l’opinione di 3 esperti
                autorevoli per creare una classifica dei migliori bookmaker
                online 👇
              </p>
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
