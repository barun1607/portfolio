import { connector, PropsFromRedux } from "../../../redux/connector";
import '../../../assets/css/intro-section/horizon/hello.css';
import React, { useEffect } from "react";

const Hello: React.FC<PropsFromRedux> = props => {

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      document.getElementById('H')?.style.setProperty('top', `${value * 0.5}px`);
      document.getElementById('E')?.style.setProperty('top', `${value * 0.35}px`);
      document.getElementById('L')?.style.setProperty('top', `${value * 0.6}px`);
      document.getElementById('L2')?.style.setProperty('top', `${value * 0.5}px`);
      document.getElementById('O')?.style.setProperty('top', `${value * 0.3}px`);
      document.getElementById('!')?.style.setProperty('top', `${value * 0.6}px`);
      document.getElementById('IAV')?.style.setProperty('top', `${value * 0.7}px`);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })


  return (
    <React.Fragment>
      <div className="hello">
        <div id="H">H</div>
        <div id="E">E</div>
        <div id="L">L</div>
        <div id="L2">L</div>
        <div id="O">O</div>
        <div id="!">!</div>
      </div>
      <div className="intro">
        <p id="IAV">I AM VARUN PANDEY</p>
      </div>
    </React.Fragment>
  )
}

export default connector(Hello);