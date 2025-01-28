import { createContext, ReactNode } from 'react';

export interface ModalContextProps {
    isOpen?: boolean;
    setIsOpen?: (prev: boolean) => void;
    modalData?: ReactNode;
    setModalData?: (service: object | string) => void;
}

export const ModalContext = createContext<ModalContextProps>({});
