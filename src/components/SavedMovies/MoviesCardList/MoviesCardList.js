import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, onDeleteMovie }) {
  const movieCardList = movies.map((movie, i) => (
    <MoviesCard key={i} movie={movie} onDeleteMovie={onDeleteMovie} />
  ));
  return <section className='cards cards_type_saved'>{movieCardList}</section>;
}

export default MoviesCardList;
