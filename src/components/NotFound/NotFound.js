import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound({ setWithHeader, setWithFooter }) {
  const navigate = useNavigate();
  useEffect(() => {
    setWithHeader(false);
    setWithFooter(false);
  }, [setWithHeader, setWithFooter]);
  return (
    <section className='not-found'>
      <div className='not-found__content'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
        <button onClick={() => navigate(-1)} className='not-found__button'>
          Назад
        </button>
      </div>
    </section>
  );
}

export default NotFound;
