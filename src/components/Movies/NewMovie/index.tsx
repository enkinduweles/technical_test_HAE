import { useState, type ChangeEvent, type FormEvent } from 'react';
import { MoviesInstance } from '../../../services/movie';
import type { Movie } from '../../../const/movies';
import { useMovieContext } from '../../../context/MovieContext';
import { useModalContext } from '../../../context/ModalContext';

export function NewMovie() {
  const [newMovie, setNewMovie] = useState<Movie>({
    id: 1,
    title: '',
    genre: '',
  });

  const { onUpdateMovies } = useMovieContext();
  const { onCloseModal } = useModalContext();

  const inputHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewMovie((previousMovie) => ({
      ...previousMovie,
      [e.target.id]: e.target.value,
    }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onCloseModal('action');
    const movies = await MoviesInstance.createMovie(newMovie);
    onUpdateMovies(movies);
  };
  return (
    <div className="bg-white px-8 py-4 flex flex-col gap-4 rounded-lg w-[400px] min-w-fit">
      <h3 className="font-bold text-lg text-[#3B3E42]">CREATE A MOVIE</h3>
      <form className="flex flex-col gap-2" onSubmit={submit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="id">Id</label>
          <input
            className="pl-2 bg-white border border-stone-600 text-[#3B3E42] text-sm rounded-lg block w-full p-1"
            type="number"
            value={newMovie.id}
            name="inputId"
            id="id"
            onChange={(e) => inputHandler(e)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            className="pl-2 bg-white border border-stone-600 text-[#3B3E42] text-sm rounded-lg block w-full p-1"
            type="text"
            value={newMovie.title}
            name="inputTitle"
            id="title"
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="genre">Genre</label>
          <select
            className="pl-2 bg-white border border-stone-600 text-[#3B3E42] text-sm rounded-lg block w-full p-1"
            value={newMovie.genre}
            name="inputGenre"
            id="genre"
            onChange={(e) => inputHandler(e)}
          >
            <option value="" />
            <option value="thriller">Thriller</option>
            <option value="horror">Horror</option>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
          </select>
        </div>
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded-lg cursor-pointer mt-4 self-end"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
