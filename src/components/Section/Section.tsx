import '../../assets/css/section/section.css';
import { connector, PropsFromRedux } from '../../redux/connector';
import { useRef, useEffect } from 'react';
import { changeWithState } from '../../assets/ts/helper';

type Props = {
  children?: React.ReactNode;
  idInp: string;
  heading: string;
}

const Section: React.FC<Props & PropsFromRedux> = props => {

  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeWithState(props.darkMode, sectionRef, 'dummy', 'turn-section-dark', 'turn-section-light');
    changeWithState(props.darkMode, dividerRef, 'dummy', 'turn-divider-dark', 'turn-divider-light');
  }, [props.darkMode]);

  return (
    <section id={props.idInp} className="section section-background dummy" ref={sectionRef}>
      <h1 className="section-heading">{props.heading}</h1>
      {props.children}
    </section>
  );
}

export default connector(Section);