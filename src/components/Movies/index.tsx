import { type ReactNode } from 'react';
import { Movie } from './Movie';
import { FilterText } from '../Filter';
import { useMovies } from './Movie/hooks/useMovies';
import { Loading } from './Loading';

export function Movies() {
  const { movies, isLoading } = useMovies();

  let component: ReactNode = null;

  component = movies.map(({ title, genre, id }) => {
    return (
      <Movie.Root key={title}>
        <Movie.Title text={title} />
        <Movie.Body genre={genre} id={id} />
      </Movie.Root>
    );
  });

  return isLoading ? (
    <Loading />
  ) : (
    <div className=" p-4 flex flex-col grow gap-4 ">
      <FilterText.Root>
        <FilterText.Input />
      </FilterText.Root>
      <hr className="border-[#3B3E42]" />
      <div className="grow grid sm:grid-cols-12 gap-4 auto-rows-min overflow-y-auto">
        {component}
      </div>
    </div>
  );
}
