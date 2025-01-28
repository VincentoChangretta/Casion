import { faCheck, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalContext, useModal } from "app/ModalProvider";
import { useContext, useRef } from "react";
import { Expert } from "shared/images";

const personInfo =
  "Si invita a un gioco responsabile. Contenuti riservati ai maggiori di 18 anni. I link di affiliazione costituiscono materiale pubblicitario. L'utilizzo di questo sito implica l'accettazione di termini, condizioni generali e informativa sulla privacy.";

export const SitiPagePerson = () => {
  const personRef = useRef<HTMLDivElement | null>(null);
  const { openModal } = useModal();
  const { setModalData } = useContext(ModalContext);

  const setModal = (data: string) => {
    setModalData(data);
    openModal();
  };

  return (
    <section className="mb-section">
      <div className="main-container">
        <div className="flex justify-between items-center mb-[30px] pt-[30px] max-635:flex-col max-635:gap-[20px] max-635:items-start">
          <div className="flex items-center gap-[20px] max-340:flex-col max-340:items-start max-340:gap-[10px]">
            <div className="w-[75px] h-[75px]">
              <img className="img rounded-full" src={Expert} alt="expert" />
            </div>
            <div>
              <h5 className="text-2xl mb-[5px]">Luca Morelli</h5>
              <h6 className="relative px-[20px] uppercase bg-cyanBg w-fit rounded-[10px] ml-[20px] mb-[5px] max-435:text-sm">
                <FontAwesomeIcon
                  className="absolute -left-[20px] top-2/4 translate-y-[-50%] p-[10px] rounded-full bg-cyanBg-dark w-[15px] !h-[15px] max-435:w-[10px] max-435:!h-[10px]"
                  icon={faCheck}
                />
                Esperto di casinò
              </h6>
              <p className="max-435:text-sm">Aggiornato il 3 febbraio 2025</p>
            </div>
          </div>
          <div className="relative">
            <div
              ref={personRef}
              className="w-full flex items-center gap-[10px] p-[15px] border-2 border-mainBg-inv text-mainBg-inv"
              onClick={() => setModal(personInfo)}
            >
              <FontAwesomeIcon icon={faCircleInfo} />
              Politica del sito
            </div>
          </div>
        </div>
        <p>
          Ben je op zoek naar het beste casino zonder vergunning in Nederland?
          Ontdek in deze top 10 de beste Nederlandse casino’s zonder licentie in
          2025. We laten je zien welke casino’s eerlijk, betrouwbaar, veilig en
          leuk zijn! Heb je al een favoriet? Laat jij ons weten welk casino
          zonder Nederlandse vergunning jouw favoriet is!
        </p>
      </div>
    </section>
  );
};
