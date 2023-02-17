import imagePath from '../../../images/student-photo.jpg';

function AboutMe() {
  const thisMonth = new Date().getMonth();
  const thisDay = new Date().getDay();
  const thisYear =
    thisMonth < 3 && thisDay < 19
      ? new Date().getFullYear() - 1
      : new Date().getFullYear();
  const bithYear = 1981;
  const age = thisYear - bithYear;

  function getPropWord(age) {
    const rest = Math.round((age / 10 - Math.floor(age / 10)) * 10);

    if (age === 1 || (age > 20 && rest === 1)) return 'год';
    if ((age > 1 && age < 5) || (rest > 1 && rest < 5 && age > 20))
      return 'года';
    if (age > 4) return 'лет';
  }

  return (
    <section id='student' className='section about-me'>
      <h2 className='section__title'>Студент</h2>
      <div className='section-line'></div>
      <div className='about-me__info'>
        <img className='about-me__foto' src={imagePath} alt='мое фото' />
        <h3 className='about-me__name'>Денис</h3>
        <p className='about-me__job'>
          Фронтенд-разработчик, {age} {getPropWord(age)}
        </p>
        <p className='about-me__text'>
          Я родился в Кишиневе, живу в Москве. Люблю слушать музыку, а ещё
          увлекаюсь игрой на гитаре. С 2013 года свой небольшой бизнес по
          оформлению мероприятий. В 2020 году начал изучать верстку и
          JavaScript. После того как прошёл курс по веб-разработке, начал
          заниматься фриланс-заказами и продолжаю заниматься бизнесом.
        </p>
        <a
          className='about-me__link'
          href='https://github.com/denimur'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
