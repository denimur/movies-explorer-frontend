import './ServerErrorTooltip.css';

function ServerErrorTooltip() {
  return (
    <section className='server-error'>
      <h2 className='server-error__text'>
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </h2>
    </section>
  );
}

export default ServerErrorTooltip;
