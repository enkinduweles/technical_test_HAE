import { DrawerContextProvider } from '../context/DrawerContext';
import { FilterContextProvider } from '../context/FilterContext';
import { ModalContextProvider } from '../context/ModalContext';
import { MovieContextProvider } from '../context/MovieContext';
import type { CustomProvidersProps } from './types';

export function CustomProviders({ children }: CustomProvidersProps) {
  return (
    <FilterContextProvider>
      <MovieContextProvider>
        <ModalContextProvider>
          <DrawerContextProvider>{children}</DrawerContextProvider>
        </ModalContextProvider>
      </MovieContextProvider>
    </FilterContextProvider>
  );
}
