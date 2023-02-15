import MoviesCard from '../MoviesCard/MoviesCard';
import { links } from '../../../utils/MovieContent.js';
import { movieTitles } from '../../../utils/MovieContent.js';

let movies = movieTitles.map((title) => ({ title }));
movies.forEach((movie, i) => {
  movie['link'] = links[i];
});

const movieCardList = movies.map((movie, i) => (
  <MoviesCard key={i} title={movie.title} link={movie.link} />
));

function MoviesCardList() {
  return <section className='cards'>{movieCardList}</section>;
}

export default MoviesCardList;
