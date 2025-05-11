import { createContext, useContext, useState } from 'react';
import type { ContextProviderProps, FilterContextValues } from './types';

const filterContext = createContext({} as FilterContextValues);

export function FilterContextProvider({ children }: ContextProviderProps) {
  const [inputText, setInputText] = useState('');

  return (
    <filterContext.Provider value={{ inputText, setInputText }}>
      {children}
    </filterContext.Provider>
  );
}

export function useFilterContext() {
  const value = useContext(filterContext);

  return value;
}
