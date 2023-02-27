function EditProfilePopup({
  isOpen,
  onClose,
  onSubmit,
  isValid,
  errors,
  values,
  handleChange,
}) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <h2 className='popup__greeting'>Редактировать профиль</h2>
        <form className='form' onSubmit={onSubmit}>
          <fieldset className='form__fields form__fields_place_profile'>
            <label className='form__label form__label_place_profile'>Имя</label>
            <input
              className='form__input form__input_place_profile'
              type='text'
              name='name'
              value={values.name || ''}
              minLength={2}
              onChange={handleChange}
              required
            />
            <div
              className={`section-line section-line_color_${
                errors['name'] ? 'pink' : 'grey'
              }`}
            ></div>
            <span className='form__input-error name-error'>
              {isValid ? '' : errors['name']}
            </span>
            <label className='form__label form__label_place_profile'>
              E-mail
            </label>
            <input
              className='form__input form__input_place_profile'
              type='email'
              name='email'
              value={values.email || ''}
              onChange={handleChange}
              required
            />
            <div
              className={`section-line section-line_color_${
                errors['email'] ? 'pink' : 'grey'
              }`}
            ></div>
            <span className='form__input-error email-error'>
              {isValid ? '' : errors['email']}
            </span>
          </fieldset>
          <fieldset className='form__handlers form__handlers_place_profile'>
            <button
              className={`form__button form__button_type_submit ${
                !isValid ? 'form__button_type_submit_disabled' : ''
              }`}
              type='submit'
              disabled={isValid ? false : true}
            >
              Сохранить
            </button>
          </fieldset>
        </form>
        <button className='popup__close-btn' onClick={onClose}></button>
      </div>
    </div>
  );
}

export default EditProfilePopup;
