import { Genres } from '../Genres';

export function Sidebar() {
  return (
    <aside className="py-4 px-4 w-[fit-content] min-w-[200px] h-full border-r-1 border-r-stone-500">
      <h2 className="text-xl font-bold mb-4 text-[#3B3E42]">Categorias</h2>
      <Genres />
    </aside>
  );
}
