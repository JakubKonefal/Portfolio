import React from 'react';
import './Header.scss';
import ComputerImg from '../../assets/img/comp2.png';
import YourWebsiteLabel from '../../assets/img/your-website-label.png';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header__MyName">
        Jakub <br /> Konefał
      </h1>
      <div className="Header__AnimationWraper">
        <img className="Header__ComputerImg" src={ComputerImg} alt="computer" />
        <div className="Header__ComputerScreen">
          <img
            src={YourWebsiteLabel}
            alt="label"
            className="Header__AnimationElement_1"
          />
          <div className="Header__AnimationElement_2" />
          <div className="Header__AnimationElement_3" />
          <div className="Header__AnimationElement_4" />
          <div className="Header__AnimationElement_5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
