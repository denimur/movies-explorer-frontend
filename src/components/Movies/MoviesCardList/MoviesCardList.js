import MoviesCard from '../MoviesCard/MoviesCard';

// import { links } from '../../../utils/MovieContent.js';
// import { movieTitles } from '../../../utils/MovieContent.js';

// let movies = movieTitles.map((title) => ({ title }));
// movies.forEach((movie, i) => {
//   movie['link'] = links[i];
// });

function MoviesCardList({ cards }) {
  console.log(cards);
  return (
    <section className='cards'>
      {cards.map((card) => (
        <MoviesCard
          key={card.id}
          title={card.nameRU}
          image={card.image}
          duration={card.duration}
          trailerLink={card.trailerLink}
        />
      ))}
    </section>
  );
}

export default MoviesCardList;
