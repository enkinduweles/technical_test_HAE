import reactLogo from '/react.svg';
import menu from '/menu.svg';
import { useDrawerContext } from '../../context/Drawer';

export function Header() {
  const { onOpenDrawer } = useDrawerContext();
  return (
    <header className="w-full h-[55px] px-4 py-2 border-b-1 border-b-stone-500 bg-[#3B3E42]">
      <div className="flex items-center gap-4">
        <img
          src={menu}
          alt="Menu logo"
          className="block md:hidden cursor-pointer"
          onClick={() => onOpenDrawer()}
        />
        <img src={reactLogo} alt="ReactJs logo" />
        <h1 className="text-white">Technical Test - List of Movies</h1>
      </div>
    </header>
  );
}
