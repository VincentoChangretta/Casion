import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode, useEffect, useRef } from "react";

interface modalProps {
  isOpen: boolean;
  onClose: () => void;
  modalData: ReactNode;
  children?: ReactNode;
}

export const Modal: FC<modalProps> = ({
  isOpen,
  onClose,
  modalData,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (modalRef && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mouseup", closeModal);
    return () => document.removeEventListener("mouseup", closeModal);
  }, []);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-xl">
      <div
        ref={modalRef}
        className="relative p-[30px] pr-[80px] w-full max-w-[720px] bg-elemColor text-mainBg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="closeButton" onClick={onClose}>
          <FontAwesomeIcon icon={faX} />
        </button>
        {children}
        <div>{modalData}</div>
      </div>
    </div>
  );
};
