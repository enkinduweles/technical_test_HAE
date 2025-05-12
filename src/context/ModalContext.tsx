import {
  createContext,
  useCallback,
  useContext,
  useState,
  type MouseEvent,
} from 'react';
import type { ContextProviderProps, ModalContextValues } from './types';

const modalContext = createContext({} as ModalContextValues);

export function ModalContextProvider({ children }: ContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModalHandler = useCallback(
    (reason: 'action' | 'event', e?: MouseEvent<HTMLDivElement>) => {
      // @ts-ignore
      if (reason === 'event' && e?.target.id === 'modal') setIsOpen(false);

      if (reason === 'action') setIsOpen(false);
    },
    []
  );

  return (
    <modalContext.Provider
      value={{
        isOpen,
        onOpenModal: openModalHandler,
        onCloseModal: closeModalHandler,
      }}
    >
      {children}
    </modalContext.Provider>
  );
}

export function useModalContext() {
  const value = useContext(modalContext);

  return value;
}
