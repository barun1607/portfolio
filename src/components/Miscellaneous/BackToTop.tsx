import '../../assets/css/miscellaneous/back-to-top.css';
import { connector, buttonConnector, PropsForButton, PropsFromRedux } from "../../redux/connector";
import { useEffect, useRef } from "react";
import { changeWithState } from '../../assets/ts/helper';

const BackToTop: React.FC<PropsFromRedux & PropsForButton> = props => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    window.location.href = '#intro-section';
  }

  useEffect(() => {
    if (props.backToTop) document.getElementById('back-to-top')?.style.setProperty('visibility', 'hidden');
    else document.getElementById('back-to-top')?.style.setProperty('visibility', 'visible');
  }, [props.backToTop]);

  useEffect(() => {
    changeWithState(props.darkMode, buttonRef, 'dummy', 'turn-button-dark', 'turn-button-light');
  }, [props.darkMode]);

  return (
    <div className="back-to-top dummy" id="back-to-top">
      <div className="svg-container-btt dummy" ref={buttonRef} onClick={handleClick}>
        <svg version="1.1" id="Chevron_small_down" xmlns="http://www.w3.org/2000/svg" x="0px"
          y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
          <path d="M13.418,7.859c0.271-0.268,0.709-0.268,0.978,0c0.27,0.268,0.272,0.701,0,0.969l-3.908,3.83
	c-0.27,0.268-0.707,0.268-0.979,0l-3.908-3.83c-0.27-0.267-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.978,0L10,11L13.418,7.859z
	"/>
        </svg>
      </div>
    </div>
  )
}

export default connector(buttonConnector(BackToTop));