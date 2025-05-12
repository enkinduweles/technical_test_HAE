import type { NavLinkRenderProps } from 'react-router';
import { useDrawerContext } from '../../../../context/DrawerContext';
import { MoviesInstance } from '../../../../services/movie';

export function useGenre() {
  const { onCloseDrawer } = useDrawerContext();
  const onActiveLink = (props: NavLinkRenderProps) => {
    return props.isActive ? 'text-[#8D788E] underline' : 'text-[#3B3E42]';
  };

  const cleanUpAfterNavigateHandler = () => {
    onCloseDrawer();
    MoviesInstance.cleanUpMoviesFromLocalStorage();
  };

  return { onActiveLink, onCleanUpAfterNavigate: cleanUpAfterNavigateHandler };
}
