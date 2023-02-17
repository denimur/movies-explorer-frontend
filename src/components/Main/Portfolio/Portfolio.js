import iconPath from '../../../images/arrow-icon.svg';

function Porfolio() {
  return (
    <section className='section portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='list list_place_portfolio'>
        <li className='list__item list__item_place_portfolio'>
          <a
            href='https://denimur.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'
            className='portfolio__link'
          >
            Статичный сайт
            <img
              src={iconPath}
              className='arrow-icon'
              alt='стрелка, направленная вправо-вверх'
            />
          </a>
        </li>
        <li className='list__item list__item_place_portfolio'>
          <a
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
            href='https://denimur.github.io/russian-travel/'
          >
            Адаптивный сайт
            <img
              src={iconPath}
              className='arrow-icon'
              alt='стрелка, направленная вправо-вверх'
            />
          </a>
        </li>
        <li className='list__item list__item_place_portfolio'>
          <a
            className='portfolio__link'
            href='https://denimur.github.io/mesto/'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <img
              src={iconPath}
              className='arrow-icon'
              alt='стрелка, направленная вправо-вверх'
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Porfolio;
