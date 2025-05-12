import { LAST_GENRE } from '../../const/localStorageKeys';
import { MOVIES, type Movie } from '../../const/movies';

class Movies {
  movies: typeof MOVIES;

  constructor() {
    this.movies = MOVIES;
  }
  public async getMoviesByGenre(genre: string | undefined) {
    return new Promise<Movie[]>((resolve) => {
      setTimeout(() => {
        if (!genre) return [];
        const moviesByGenre = this.movies.filter(
          (movie) => movie.genre === genre
        );
        this.saveMovieByGenreToLocalStorage(moviesByGenre);
        resolve(moviesByGenre);
      }, 1000);
    });
  }

  public getAllMovies() {
    return this.movies;
  }

  public async createMovie(movie: Movie) {
    this.movies = [...this.movies, movie];

    return await this.getMoviesByGenre(movie.genre);
  }

  private saveMovieByGenreToLocalStorage(movies: typeof MOVIES) {
    if (movies.length === 0) return;
    localStorage.setItem(LAST_GENRE, JSON.stringify(movies));
  }

  public cleanUpMoviesFromLocalStorage() {
    localStorage.removeItem(LAST_GENRE);
  }
}

export const MoviesInstance = new Movies();
