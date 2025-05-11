import type { IconProps } from './types';

export function Icon({ icon, altText }: IconProps) {
  return (
    <div>
      <img src={icon} alt={altText} />
    </div>
  );
}
