import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MoviesInstance } from '../../../../services/movie';
import type { Movie } from '../../../../const/movies';
import { useFilterContext } from '../../../../context/FilterContext';

export function useMovies() {
  const { genre } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { inputText } = useFilterContext();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      if (genre) {
        const movies = await MoviesInstance.getMoviesByGenre(genre as string);
        setMovies(movies);
      } else {
        setMovies(MoviesInstance.getAllMovies());
      }

      setIsLoading(false);
    };
    getData();
  }, [genre]);

  const filteredMovies = inputText
    ? movies.filter((movie) => {
        const test = movie.title
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-zA-Z0-9\s]/g, '');
        return test.toLowerCase().includes(inputText.toLocaleLowerCase());
      })
    : movies;

  return { movies: filteredMovies, isLoading };
}
