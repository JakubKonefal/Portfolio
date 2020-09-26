import React from 'react';
import './About.scss';
import YoungPersonImg from '../../assets/img/man-transparent.png';
import { about } from '../../utils/texts';

const About = ({ language }) => {
  const title = language === 'pl' ? about.titlePL : about.titleENG;
  const subtitle = language === 'pl' ? about.subtitlePL : about.subtitleENG;
  const description =
    language === 'pl' ? about.descriptionPL : about.descriptionENG;
  const paragraph = language === 'pl' ? about.paragraphPL : about.paragraphENG;

  return (
    <section className="About">
      <div className="About__ScrollAnchor" />
      <img className="About__Img" src={YoungPersonImg} alt="young-person" />
      <div className="About__Content">
        <h2 className="About__Title">{title}</h2>
        <p className="About__Description">
          {subtitle} <br />
          <br />
          {description}
          <br /> <br /> {paragraph}
        </p>
      </div>
    </section>
  );
};

export default About;
