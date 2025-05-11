import { useParams } from 'react-router';
import type { ReactNode } from 'react';
import { Movie } from './Movie';
import { FilterText } from '../Filter';

export function Movies() {
  const params = useParams();

  let component: ReactNode = null;

  component = (
    <>
      <Movie.Root>
        <Movie.Title />
        <Movie.Body />
      </Movie.Root>
      <Movie.Root>
        <Movie.Title />
        <Movie.Body />
      </Movie.Root>
      <Movie.Root>
        <Movie.Title />
        <Movie.Body />
      </Movie.Root>
      <Movie.Root>
        <Movie.Title />
        <Movie.Body />
      </Movie.Root>
    </>
  );

  return (
    <div className=" p-4 flex flex-col grow gap-4">
      <FilterText.Root>
        <FilterText.Input />
      </FilterText.Root>
      <hr className="border-[#3B3E42]" />
      <div className="grow grid sm:grid-cols-12 gap-4 auto-rows-min">
        {component || params.genre}
      </div>
    </div>
  );
}
