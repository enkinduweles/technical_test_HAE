import { Genres } from '../Genres';

export function Sidebar() {
  const isSidebarOpen = true;
  return (
    <aside className="py-4 px-4 w-[fit-content] min-w-[200px] h-full border-r-1 border-r-stone-500 hidden md:block">
      <Genres />
    </aside>
  );
}
