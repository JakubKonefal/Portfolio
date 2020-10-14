import React from 'react';
import './Skills.scss';
import {
  css,
  express,
  firebase,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  npm,
  chartjs,
  react,
  redux,
  rest,
  rwd,
  sass,
  socketio,
} from '../../assets/img/skills/index';

import Skill from './Skill';

const Skills = ({ language }) => {
  return (
    <section className="Skills">
      <div className="Skills__ScrollAnchor" />
      <div className="Skills__Header" data-aos="fade-right">
        <span className="Skills__HtmlTag"> {'</>'} </span>
        <h3 className="Skills__Label">
          {language === 'pl' ? 'Umiejętności' : 'Skills'}
        </h3>
      </div>
      <div className="Skills__Icons">
        <Skill skill="html5" img={html} />
        <Skill skill="css3" img={css} />
        <Skill skill="javascript" img={javascript} />
        <Skill skill="react" img={react} />
        <Skill skill="redux" img={redux} />
        <Skill skill="nodejs" img={nodejs} />
        <Skill skill="express" img={express} />
        <Skill skill="git" img={git} />
        <Skill skill="rwd" img={rwd} />
        <Skill skill="sass" img={sass} />
        <Skill skill="rest" img={rest} />
        <Skill skill="firebase" img={firebase} />
        <Skill skill="mongodb" img={mongodb} />
        <Skill skill="socketio" img={socketio} />
        <Skill skill="npm" img={npm} />
        <Skill skill="chartjs" img={chartjs} />
      </div>
    </section>
  );
};

export default Skills;
