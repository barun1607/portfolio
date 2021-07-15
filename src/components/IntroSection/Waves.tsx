import { useEffect, useRef } from 'react';
import { connector, PropsFromRedux } from "../../redux/connector";
import { changeWithState } from '../../assets/ts/helper';
import '../../assets/css/intro-section/waves.css';

const Waves: React.FC<PropsFromRedux> = props => {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeWithState(props.darkMode, waveRef, 'waves-light', 'turn-waves-dark', 'turn-waves-light');
  }, [props.darkMode]);

  return (
    <div className="waves waves-light" ref={waveRef}>
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
    </div>
  )
}

export default connector(Waves);