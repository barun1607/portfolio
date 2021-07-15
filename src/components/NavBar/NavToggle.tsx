import { connector, PropsFromRedux } from "../../redux/connector";
import '../../assets/css/navbar/toggle-nav.css';
import { useEffect, useRef } from "react";
import { changeWithState } from "../../assets/ts/helper";

interface Props extends PropsFromRedux {
  children: React.ReactNode;
  onClick: () => void;
}

const NavToggle: React.FC<Props> = props => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    changeWithState(props.darkMode, buttonRef, 'dummy', 'turn-toggle-dark', 'turn-toggle-light');
  }, [props.darkMode]);

  return (
    <button onClick={props.onClick} className="toggle-nav dummy" ref={buttonRef}>
      {props.children}
    </button>
  )
}

export default connector(NavToggle);