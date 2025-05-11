import { Icon } from '../../Icon';
import searchIcon from '/search.svg';

export function Input() {
  return (
    <>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none self">
        <Icon icon={searchIcon} altText="Search icon" />
      </div>
      <input
        type="text"
        className="pl-10 bg-white border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="Search..."
      />
    </>
  );
}
