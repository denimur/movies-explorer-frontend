function Footer() {
  return (
    <footer className='footer footer__font-style'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='section-line section-line_color_grey'></div>
      <div className='footer__group'>
        <span className='footer__copyright'>
          &copy;{new Date().getFullYear()}
        </span>
        <ul className='list list_place_footer'>
          <li className='list__item list__item_place_footer'>
            <a
              className='footer__link'
              href='https://practicum.yandex.ru'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='list__item list__item_place_footer'>
            <a
              className='footer__link'
              href='https://github.com/denimur'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
