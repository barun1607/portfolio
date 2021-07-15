import React, { useRef, useState, useEffect } from 'react';
import { changeWithState } from '../../assets/ts/helper';
import '../../assets/css/navbar/navbar.css'
import NavToggle from './NavToggle';
import { PropsFromRedux, connector } from '../../redux/connector';


const NavBar: React.FC<PropsFromRedux> = props => {
  const navRef = useRef<HTMLElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);

  // useOutsideAlert(navRef, setToggle);

  useEffect(() => {
    const changeNavColor = (
      outerRef: React.RefObject<HTMLDivElement>,
      innerRef: React.RefObject<HTMLDivElement>
    ) => {
      if (outerRef.current) {
        let style = outerRef.current.style;
        props.darkMode ?
          style.backgroundColor = 'black' :
          style.backgroundColor = 'white';
      }
      if (innerRef.current) {
        const children = innerRef.current.getElementsByTagName('a');
        if (props.darkMode) {
          document.getElementById('nav-close')?.style.setProperty('color', 'var(--dark-text-color)');
          for (let i = 0; i < children.length; i++) {
            children.item(i)?.style.setProperty('color', 'var(--dark-text-color)');
          }
        } else {
          document.getElementById('nav-close')?.style.setProperty('color', 'var(--light-text-color)');
          for (let i = 0; i < children.length; i++) {
            children.item(i)?.style.setProperty('color', 'var(--light-text-color)');
          }
        }
      }
    }
    changeNavColor(outerRef, innerRef);
  }, [props.darkMode])

  useEffect(() => {
    changeWithState(toggle, navRef, 'dummy', 'open-nav', 'close-nav');
  }, [toggle]);

  return (
    <React.Fragment>
      <NavToggle onClick={() => setToggle(!toggle)}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" rx="8"></rect>
          <rect y="30" width="100" height="20" rx="8"></rect>
          <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
      </NavToggle>
      <nav className="navbar dummy" ref={navRef}>
        <div ref={outerRef} className="outer-div dummy">
          <div ref={innerRef}>
            <button className="close-nav-button" id="nav-close" onClick={() => setToggle(false)}>&#x2716;</button>
            <a href="#about">About Me</a>
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
            <a href="https://github.com/barun1607/portfolio" target="_blank" rel="noreferrer">Source Code</a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default connector(NavBar);