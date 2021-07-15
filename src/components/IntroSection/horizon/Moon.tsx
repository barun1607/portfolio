import '../../../assets/css/intro-section/horizon/moon.css';
import { connector, PropsFromRedux } from '../../../redux/connector';
import { useRef, useEffect } from 'react';
import { changeWithState } from '../../../assets/ts/helper';

const Moon: React.FC<PropsFromRedux> = props => {
  const moonRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    changeWithState(props.darkMode, moonRef, 'dummy', 'appear', 'disappear');
  }, [props.darkMode]);

  return (
    <div className="moon-in">
      <svg ref={moonRef} className="dummy" version="1.1" id="Layer_1" xmlns="&ns_svg;" width="300" height="300" viewBox="0 0 300 300">
        <path d="M180.9,257.8c-77.9,0-141.1-63.3-141.1-141.3c0-48.4,24.2-91,61.2-116.5C42.1,21.6,0,78.5,0,145.4
	C0,230.8,68.8,300,153.6,300c68.6,0,126.7-45.3,146.4-107.7C275,231.7,231,257.8,180.9,257.8z"/>
      </svg>
    </div>
  )
}

export default connector(Moon);