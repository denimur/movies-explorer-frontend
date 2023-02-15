function Techs() {
  return (
    <section id='techs' className='section techs'>
      <h2 className='section__title'>Технологии</h2>
      <div className='section__line'></div>
      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className='list list_place_techs'>
        <li className='list__item list__item_place_tech'>HTML</li>
        <li className='list__item list__item_place_tech'>CSS</li>
        <li className='list__item list__item_place_tech'>JS</li>
        <li className='list__item list__item_place_tech'>React</li>
        <li className='list__item list__item_place_tech'>Git</li>
        <li className='list__item list__item_place_tech'>Express.js</li>
        <li className='list__item list__item_place_tech'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
