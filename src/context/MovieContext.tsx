import { createContext, useContext, useEffect, useState } from 'react';
import type { ContextProviderProps, MovieContextValues } from './types';
import { useParams } from 'react-router';
import type { Movie } from '../const/movies';
import { LAST_GENRE } from '../const/localStorageKeys';
import { useFilterContext } from './FilterContext';
import { MoviesInstance } from '../services/movie';

const movieContext = createContext({} as MovieContextValues);

export function MovieContextProvider({ children }: ContextProviderProps) {
  const { genre } = useParams();
  const [movies, setMovies] = useState<Movie[]>(() => {
    const moviesFromLocalStorage = localStorage.getItem(LAST_GENRE);

    if (moviesFromLocalStorage) return JSON.parse(moviesFromLocalStorage);

    return [];
  });

  const [isLoading, setIsLoading] = useState(false);
  const { inputText } = useFilterContext();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      if (genre) {
        const movies = await MoviesInstance.getMoviesByGenre(genre as string);
        setMovies(movies);
      } else {
        const moviesFromLocalStorage = localStorage.getItem(LAST_GENRE);

        moviesFromLocalStorage
          ? setMovies(JSON.parse(moviesFromLocalStorage))
          : setMovies(MoviesInstance.getAllMovies());
      }

      setIsLoading(false);
    };
    getData();
  }, [genre]);

  const resetMoviesHandler = () => {
    MoviesInstance.cleanUpMoviesFromLocalStorage();
    setMovies(MoviesInstance.getAllMovies());
  };

  const updateMoviesHandler = (movies: Movie[]) => {
    setMovies(movies);
  };

  const filteredMovies = inputText
    ? movies.filter((movie) => {
        const test = movie.title
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-zA-Z0-9\s]/g, '');
        return test.toLowerCase().includes(inputText.toLocaleLowerCase());
      })
    : movies;

  return (
    <movieContext.Provider
      value={{
        movies: filteredMovies,
        isLoading,
        onResetMovies: resetMoviesHandler,
        onUpdateMovies: updateMoviesHandler,
      }}
    >
      {children}
    </movieContext.Provider>
  );
}

export function useMovieContext() {
  const value = useContext(movieContext);

  return value;
}
