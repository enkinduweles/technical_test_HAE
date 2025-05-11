import { GENRES } from '../../const/genres';
import { NavLink } from 'react-router';
import { Icon } from '../Icon';
import reactLogo from '/category.svg';

export function Genres() {
  return (
    <nav className="flex flex-col gap-3">
      {GENRES.map((genre) => {
        return (
          <div className="flex gap-1 text-[#3B3E42]">
            <Icon icon={reactLogo} altText="Category icon" />

            <NavLink to={`/${genre.toLowerCase()}`}>{genre}</NavLink>
          </div>
        );
      })}
    </nav>
  );
}
