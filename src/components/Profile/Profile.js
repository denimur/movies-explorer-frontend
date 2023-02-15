import { useEffect } from 'react';

const name = 'Денис';
const email = 'pochta@yandex.ru';

function Profile({ setWithFooter }) {
  useEffect(() => {
    setWithFooter(false);
  }, []);
  return (
    <>
      <section className='profile'>
        <h1 className='profile__greeting'>Привет, {name}!</h1>
        <div className='profile__info'>
          <ul className='list list_place_profile'>
            <li className='list__item list__item_place_profile'>
              <p className='profile__caption'>Имя</p>
              <p className='profile__data'>{name}</p>
            </li>
            <div className='section__line section__line_color_grey'></div>
            <li className='list__item list__item_place_profile'>
              <p className='profile__caption'>E-mail</p>
              <p className='profile__data'>{email}</p>
            </li>
          </ul>
        </div>
        <button className='profile__button'>Редактировать</button>
        <button className='profile__button'>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;
