import { useEffect } from 'react';

// const name = 'Денис';
// const email = 'pochta@yandex.ru';

function Profile({ setWithFooter, user, onLogout }) {
  useEffect(() => {
    setWithFooter(false);
  }, [setWithFooter]);
  return (
    <section className='profile'>
      <h1 className='profile__greeting'>Привет, {user.name}!</h1>
      <div className='profile__info'>
        <ul className='list list_place_profile'>
          <li className='list__item list__item_place_profile'>
            <p className='profile__caption'>Имя</p>
            <p className='profile__data'>{user.name}</p>
          </li>
          <div className='section-line section-line_color_grey'></div>
          <li className='list__item list__item_place_profile'>
            <p className='profile__caption'>E-mail</p>
            <p className='profile__data'>{user.email}</p>
          </li>
        </ul>
      </div>
      <button className='profile__button'>Редактировать</button>
      <button className='profile__button' onClick={onLogout}>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
