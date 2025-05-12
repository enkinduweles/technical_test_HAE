import { useModalContext } from '../../../context/ModalContext';
import { FilterText } from '../../Filter';
import type { ToolbarProps } from './types';

export function Toolbar({ onResetMovies }: ToolbarProps) {
  const { onOpenModal } = useModalContext();
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <button
            onClick={onOpenModal}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Add
          </button>
          <button
            onClick={onResetMovies}
            className="bg-[#3B3E42] text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Reset
          </button>
        </div>

        <FilterText.Root>
          <FilterText.Input />
        </FilterText.Root>
      </div>
      <hr className="border-[#3B3E42]" />
    </>
  );
}
