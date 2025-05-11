import type { Dispatch, ReactNode } from 'react';

export type ContextProviderProps = {
  children: ReactNode;
};

export type FilterContextValues = {
  setInputText: Dispatch<React.SetStateAction<string>>;
  inputText: string;
};
export type DrawerContextValues = {
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
  isOpen: boolean;
};
