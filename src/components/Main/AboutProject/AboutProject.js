const AboutProject = () => {
  return (
    <section id='about' className='section about-project'>
      <h2 className='section__title'>О проекте</h2>
      <div className='section-line'></div>
      <ul className='table'>
        <li className='table__cell'>
          <h3 className='about-project__title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='table__cell'>
          <h3 className='about-project__title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className='time-bar grid-wrapper'>
        <li className='time-bar__item'>
          <p className='time-bar__text'>1 неделя</p>
        </li>
        <li className='time-bar__item'>
          <p className='time-bar__text'>4 недели</p>
        </li>
      </ul>
      <div className='caption grid-wrapper'>
        <p className='caption__text'>Back-end</p>
        <p className='caption__text'>Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
