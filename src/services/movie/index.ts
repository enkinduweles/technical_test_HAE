import { MOVIES, type Movie } from '../../const/movies';

class Movies {
  movies: typeof MOVIES;

  constructor() {
    this.movies = MOVIES;
  }
  async getMoviesByGenre(genre: string | undefined) {
    return new Promise<Movie[]>((resolve) => {
      setTimeout(() => {
        if (!genre) return [];
        resolve(this.movies.filter((movie) => movie.genre === genre));
      }, 2000);
    });
  }

  getAllMovies() {
    return this.movies;
  }
}

export const MoviesInstance = new Movies();
