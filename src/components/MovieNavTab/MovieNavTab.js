import { NavLink } from 'react-router-dom';

function MovieNavTab() {
  return (
    <nav className='movie-nav'>
      <ul className='list list_place_header'>
        <li className='list__item list__item_place_header'>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              `link link_type_movies ${isActive ? 'link_checked' : ''}`
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li className='list__item list__item_place_header'>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              `link link_type_movies ${isActive ? 'link_checked' : ''}`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MovieNavTab;
