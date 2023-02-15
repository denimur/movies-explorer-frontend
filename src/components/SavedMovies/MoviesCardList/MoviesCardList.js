import MoviesCard from './../MoviesCard/MoviesCard';
import { links } from '../../../utils/MovieContent';
import { movieTitles } from '../../../utils/MovieContent';

const savedMovies = movieTitles.slice(0, 3).map((title) => ({ title }));

savedMovies.forEach((movie, i) => {
  movie.link = links[i];
});

const movieCardList = savedMovies.map((movie, i) => (
  <MoviesCard key={i} movie={movie} />
));

function MoviesCardList() {
  return <section className='cards cards_type_saved'>{movieCardList}</section>;
}

export default MoviesCardList;
