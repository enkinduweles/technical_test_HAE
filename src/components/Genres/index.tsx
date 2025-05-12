import { GENRES } from '../../const/genres';
import { Genre } from './Genre';

export function Genres() {
  return (
    <nav className="flex flex-col gap-3">
      <h2 className="text-xl font-bold mb-4 text-[#3B3E42]">Genres</h2>
      <Genre />
      {GENRES.map((genre) => {
        return <Genre key={genre} genre={genre} />;
      })}
    </nav>
  );
}
