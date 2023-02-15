import React from 'react';

function NavTab() {
  return (
    <nav className='nav'>
      <ul className='list list_place_promo'>
        <li className='list__item list__item_place_promo'>
          <a href='#about' className='promo__link'>
            О проекте
          </a>
        </li>
        <li className='list__item list__item_place_promo'>
          <a href='#techs' className='promo__link'>
            Технологии
          </a>
        </li>
        <li className='list__item list__item_place_promo'>
          <a href='#student' className='promo__link'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
