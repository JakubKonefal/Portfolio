import React from 'react';
import './Skill.scss';

const Skill = ({ img, skill }) => {
  return (
    <div className="Skill" data-aos="flip-up" data-aos-delay="400">
      <img className="Skill__Img" src={img} alt="skill" />
      <span className="Skill__Name">{skill}</span>
    </div>
  );
};

export default Skill;
