import { useDrawerContext } from '../../context/Drawer';
import { Genres } from '../Genres';

export function Drawer() {
  const { onCloseDrawer } = useDrawerContext();
  return (
    <div className="flex absolute left-0 inset-y-0">
      <div
        className="absolute left-0 inset-y-0 w-screen h-screen bg-black/20 md:hidden z-9"
        onClick={() => onCloseDrawer()}
      />

      <div className="bg-white py-4 px-4 w-[fit-content] min-w-[200px] h-full z-10">
        <Genres />
      </div>
    </div>
  );
}
