import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from './../Logo/Logo';
import { useFormWithValidation } from '../FormValidator/FormValidator.js';

function Login({
  setWithHeader,
  setWithFooter,
  onLogin,
  errorMessage,
  setErrorMessage,
}) {
  const { values, errors, isValid, resetForm, handleChange } =
    useFormWithValidation();
  const submitErrorClassName = `form__submit-error form__submit-error_${
    errorMessage ? 'active' : 'disabled'
  }`;

  useEffect(() => {
    setWithHeader(false);
    setWithFooter(false);
    setErrorMessage('');
    resetForm();
  }, [setWithHeader, setWithFooter, setErrorMessage]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.email || !values.password) {
      return;
    }
    onLogin(values.email, values.password);
  }

  return (
    <section className='auth'>
      <Logo />
      <h1 className='auth__greeting'>Рады видеть!</h1>
      <form className='form' onSubmit={handleSubmit}>
        <fieldset className='form__fields form__fields_place_login'>
          <label
            htmlFor='email'
            className='form__label form__label_place_login'
          >
            E-mail
          </label>
          <input
            id='email'
            name='email'
            className='form__input form__input_place_login'
            type='email'
            onInput={handleChange}
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
          <label
            htmlFor='password'
            className='form__label form__label_place_login'
          >
            Пароль
          </label>
          <input
            id='password'
            name='password'
            className='form__input form__input_place_login'
            type='password'
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
        <fieldset className='form__handlers form__handlers_place_login'>
          <p className={submitErrorClassName}>{errorMessage}</p>
          <button
            className={`form__button form__button_type_submit ${
              !isValid ? 'form__button_type_submit_disabled' : ''
            }`}
            type='submit'
            disabled={isValid ? false : true}
          >
            Войти
          </button>
          <p className='form__caption'>
            Ещё не зарегистрированы?
            <Link to='/signup' className='form__link'>
              Регистрация
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default Login;
