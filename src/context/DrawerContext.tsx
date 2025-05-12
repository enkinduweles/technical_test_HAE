import { createContext, useCallback, useContext, useState } from 'react';
import type { ContextProviderProps, DrawerContextValues } from './types';

const drawerContext = createContext({} as DrawerContextValues);

export function DrawerContextProvider({ children }: ContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawerHandler = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeDrawerHandler = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <drawerContext.Provider
      value={{
        isOpen,
        onOpenDrawer: openDrawerHandler,
        onCloseDrawer: closeDrawerHandler,
      }}
    >
      {children}
    </drawerContext.Provider>
  );
}

export function useDrawerContext() {
  const value = useContext(drawerContext);

  return value;
}
