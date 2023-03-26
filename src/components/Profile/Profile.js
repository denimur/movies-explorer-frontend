import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from './../../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup';
import { useFormWithValidation } from '../FormValidator/FormValidator';

function Profile({ setWithFooter, onLogout, onUpdate }) {
  const user = useContext(CurrentUserContext);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const { values, errors, isValid, resetForm, handleChange } =
    useFormWithValidation();

  useEffect(() => {
    setWithFooter(false);
  }, [setWithFooter]);

  function handleSubmit(e) {
    e.preventDefault();

    if (values.name !== user.name || values.email !== user.email) {
      onUpdate(values.name, values.email);
      closePopup();
    } else {
      closePopup();
      return;
    }
  }

  function openPopup() {
    values.name = user.name;
    values.email = user.email;
    setIsEditPopupOpen(true);
  }

  function closePopup() {
    resetForm();
    setIsEditPopupOpen(false);
  }

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
      <button className='profile__button' onClick={openPopup}>
        Редактировать
      </button>
      <button className='profile__button' onClick={onLogout}>
        Выйти из аккаунта
      </button>
      <EditProfilePopup
        isOpen={isEditPopupOpen}
        onUpdate={onUpdate}
        onClose={closePopup}
        onSubmit={handleSubmit}
        errors={errors}
        isValid={isValid}
        handleChange={handleChange}
        values={values}
      />
    </section>
  );
}

export default Profile;
