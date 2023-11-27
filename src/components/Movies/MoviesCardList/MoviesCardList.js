import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, onLikeMovie, onDeleteMovie }) {
  return (
    <section className='cards'>
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id || movie.movieId}
          movie={movie}
          onLikeMovie={onLikeMovie}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </section>
  );
}

export default MoviesCardList;
