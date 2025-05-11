import { NavLink, type NavLinkRenderProps } from 'react-router';
import { Icon } from '../../Icon';
import categoryLogo from '/category.svg';
import type { GenreProps } from './types';
import { useDrawerContext } from '../../../context/Drawer';

export function Genre({ genre }: GenreProps) {
  const { onCloseDrawer } = useDrawerContext();

  const onActiveLink = (props: NavLinkRenderProps) => {
    return props.isActive ? 'text-[#8D788E] underline' : 'text-[#3B3E42]';
  };
  return (
    <div className="flex gap-1 ">
      <Icon icon={categoryLogo} altText="Category icon" />

      <NavLink
        to={`/${genre.toLowerCase()}`}
        onClick={() => onCloseDrawer()}
        className={onActiveLink}
      >
        {genre}
      </NavLink>
    </div>
  );
}
