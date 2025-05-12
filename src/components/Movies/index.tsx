import { type ReactNode } from 'react';
import { Movie } from './Movie';
import { Loading } from './Loading';
import { Toolbar } from './Toolbar';
import { NoMovies } from './NoMovies';
import { Modal } from './Modal';
import { useModalContext } from '../../context/ModalContext';
import { useMovieContext } from '../../context/MovieContext';

export function Movies() {
  const { movies, isLoading, onResetMovies } = useMovieContext();
  const { isOpen } = useModalContext();

  let component: ReactNode = null;

  if (movies?.length === 0) return <NoMovies />;

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
    <>
      <div className=" p-4 flex flex-col grow gap-4 ">
        <Toolbar onResetMovies={onResetMovies} />
        <div className="grow grid sm:grid-cols-12 gap-4 auto-rows-min overflow-y-auto">
          {component}
        </div>
      </div>
      {isOpen && <Modal />}
    </>
  );
}
