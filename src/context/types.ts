import type { Dispatch, ReactNode, MouseEvent } from 'react';
import type { Movie } from '../const/movies';

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
export type ModalContextValues = {
  onOpenModal: () => void;
  onCloseModal: (
    reason: 'action' | 'event',
    e?: MouseEvent<HTMLDivElement>
  ) => void;
  isOpen: boolean;
};
export type MovieContextValues = {
  movies: Movie[];
  onResetMovies: () => void;
  onUpdateMovies: (movies: Movie[]) => void;
  isLoading: boolean;
};
