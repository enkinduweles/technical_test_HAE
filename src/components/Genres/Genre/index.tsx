import { NavLink } from 'react-router';
import { Icon } from '../../Icon';
import categoryLogo from '/category.svg';
import type { GenreProps } from './types';
import { useGenre } from './hooks/useGenre';

export function Genre({ genre }: GenreProps) {
  const { onActiveLink, onCleanUpAfterNavigate } = useGenre();

  return (
    <div className="flex gap-1 ">
      <Icon icon={categoryLogo} altText="Category icon" />

      <NavLink
        to={genre ? `/${genre.toLowerCase()}` : '/'}
        onClick={onCleanUpAfterNavigate}
        className={onActiveLink}
      >
        {genre ? genre : 'All'}
      </NavLink>
    </div>
  );
}
