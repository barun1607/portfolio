import Moon from "./Moon";
import Sun from './Sun';
import Hello from "./Hello";
import '../../../assets/css/intro-section/horizon/horizon.css';
import { connector, PropsFromRedux } from "../../../redux/connector";
import { useRef, useEffect } from "react";
import { changeWithState } from "../../../assets/ts/helper";

const Horizon: React.FC<PropsFromRedux> = props => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeWithState(props.darkMode, textRef, 'dummy', 'turn-text-dark', 'turn-text-light');
  }, [props.darkMode])

  return (
    <div className="horizon">
      <div className="sun">
        <Sun />
        <Moon />
      </div>
      <div className="text dummy" ref={textRef}>
        <Hello />
      </div>
    </div>
  )
}

export default connector(Horizon);