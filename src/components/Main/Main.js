import { useEffect } from 'react';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Porfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';

function Main({ setWithHeader, setWithFooter }) {
  useEffect(() => {
    setWithHeader(true);
    setWithFooter(true);
  }, [setWithHeader, setWithFooter]);

  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Porfolio />
    </>
  );
}

export default Main;
