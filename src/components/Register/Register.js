import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from './../Logo/Logo';
import { useFormWithValidation } from '../FormValidator/FormValidator';

function Register({
  setWithHeader,
  setWithFooter,
  onRegister,
  errorMessage,
  setErrorMessage,
}) {
  const { values, errors, isValid, resetForm, handleChange } =
    useFormWithValidation();
  const name = values.name;
  const email = values.email;
  const password = values.password;
  const submitErrorClassName = `form__submit-error form__submit-error_${
    errorMessage ? 'active' : 'disabled'
  }`;

  useEffect(() => {
    setWithHeader(false);
    setWithFooter(false);
    setErrorMessage('');
    resetForm();
  }, [setWithHeader, setWithFooter, setErrorMessage, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      return;
    }
    onRegister(name, email, password);
  }

  return (
    <section className='auth'>
      <Logo />
      <h1 className='auth__greeting'>Добро пожаловать!</h1>
      <form className='form' onSubmit={handleSubmit}>
        <fieldset className='form__fields form__fields_place_register'>
          <label className='form__label form__label_place_register'>Имя</label>
          <input
            className='form__input form__input_place_register'
            type='text'
            name='name'
            minLength={2}
            maxLength={30}
            onChange={handleChange}
            required
            pattern='[A-za-zА-яа-яЁё\s\-]+'
          />
          <div
            className={`section-line section-line_color_${
              errors['name'] ? 'pink' : 'grey'
            }`}
          ></div>
          <span className='form__input-error name-error'>
            {isValid ? '' : errors['name']}
          </span>
          <label className='form__label form__label_place_register'>
            E-mail
          </label>
          <input
            className='form__input form__input_place_register'
            type='email'
            name='email'
            onChange={handleChange}
            required
            pattern='[^\s@]+@[a-zA-Z]+\.[a-z]{2,}'
          />
          <div
            className={`section-line section-line_color_${
              errors['email'] ? 'pink' : 'grey'
            }`}
          ></div>
          <span className='form__input-error email-error'>
            {isValid ? '' : errors['email']}
          </span>
          <label className='form__label form__label_place_register'>
            Пароль
          </label>
          <input
            className='form__input form__input_place_register'
            type='password'
            name='password'
            onChange={handleChange}
            minLength={3}
            required
          />
          <div
            className={`section-line section-line_color_${
              errors['password'] ? 'pink' : 'grey'
            }`}
          ></div>
          <span className='form__input-error password-error'>
            {isValid ? '' : errors['password']}
          </span>
        </fieldset>
        <fieldset className='form__handlers form__handlers_place_register'>
          <p className={submitErrorClassName}>{errorMessage}</p>
          <button
            className={`form__button form__button_type_submit ${
              !isValid ? 'form__button_type_submit_disabled' : ''
            }`}
            type='submit'
            disabled={isValid ? false : true}
          >
            Зарегистрироваться
          </button>
          <p className='form__caption'>
            Уже зарегистрированы?
            <Link to='/signin' className='form__link'>
              Войти
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default Register;
