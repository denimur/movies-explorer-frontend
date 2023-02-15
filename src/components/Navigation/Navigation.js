import { NavLink } from 'react-router-dom';
import ProfileNavTab from './../ProfileNavTab/ProfileNavTab';

function Navigation({
  isMenuOpened,
  setIsMenuOpened,
  onCloseBtnClick,
  onCloseMenu,
}) {
  return (
    <div
      className={`nav-menu ${isMenuOpened ? 'nav-is-opened' : ''}`}
      onKeyDown={onCloseMenu}
    >
      <button className='close-button' onClick={onCloseBtnClick}></button>
      <nav className='header__nav'>
        <ul className='list list_place_menu'>
          <li className='list__item list__item_place_menu'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `nav-menu__link ${isActive ? 'nav-menu__link_active' : ''}`
              }
              onClick={() => setIsMenuOpened(false)}
            >
              Главная
            </NavLink>
          </li>
          <li className='list__item list__item_place_menu'>
            <NavLink
              to='/movies'
              className={({ isActive }) =>
                `nav-menu__link ${isActive ? 'nav-menu__link_active' : ''}`
              }
              onClick={() => setIsMenuOpened(false)}
            >
              Фильмы
            </NavLink>
          </li>
          <li className='list__item list__item_place_menu'>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) =>
                `nav-menu__link ${isActive ? 'nav-menu__link_active' : ''}`
              }
              onClick={() => setIsMenuOpened(false)}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <ProfileNavTab
          className={'link_type_account_mobile'}
          setIsMenuOpened={setIsMenuOpened}
        />
      </nav>
    </div>
  );
}

export default Navigation;
