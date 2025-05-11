import { useFilterContext } from '../../../context/FilterContext';
import { Icon } from '../../Icon';
import searchIcon from '/search.svg';

export function Input() {
  const { setInputText, inputText } = useFilterContext();
  return (
    <>
      <div className="absolute left-0 flex items-center pl-3 pointer-events-none">
        <Icon icon={searchIcon} altText="Search icon" />
      </div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
        type="text"
        className="pl-10 bg-white border border-stone-600 text-[#3B3E42] text-sm rounded-lg block w-full p-1"
        placeholder="Search..."
      />
    </>
  );
}
