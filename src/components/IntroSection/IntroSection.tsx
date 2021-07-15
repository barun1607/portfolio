import { useEffect } from "react";
import Waves from "./Waves";
import ThemeToggle from "../Miscellaneous/ThemeToggle";
import Horizon from './horizon/Horizon';
import { changeWithState, useElementOnScreen } from "../../assets/ts/helper";
import '../../assets/css/intro-section/intro-section.css'
import { connector, PropsFromRedux, buttonConnector, PropsForButton } from "../../redux/connector";

const IntroSection: React.FC<PropsFromRedux & PropsForButton> = props => {
  const observer = useElementOnScreen({ root: null, threshold: 0, rootMargin: '0px' });
  const introRef = observer.containerRef;
  const isVisible = observer.isVisible;

  useEffect(() => {
    props.toggleBackToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    changeWithState(props.darkMode, introRef, 'dummy', 'turn-intro-dark', 'turn-intro-light')
  }, [props.darkMode, introRef]);

  useEffect(() => {
    props.toggleBackToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])

  return (
    <section className="intro-section dummy" id="intro-section" ref={introRef}>
      <ThemeToggle />
      <Horizon />
      <Waves />
    </section>
  )
}

export default connector(buttonConnector(IntroSection));