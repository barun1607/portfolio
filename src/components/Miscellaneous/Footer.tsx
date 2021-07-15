import React, { useEffect, useRef } from 'react';
import { changeWithState } from '../../assets/ts/helper';
import { connector, PropsFromRedux } from '../../redux/connector';
import '../../assets/css/miscellaneous/footer.css';

const Footer: React.FC<PropsFromRedux> = (props) => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeWithState(props.darkMode, footerRef, 'dummy', 'turn-footer-dark', 'turn-footer-light');
  }, [props.darkMode])

  return (
    <div className="footer dummy" ref={footerRef}>
      <p>Built with ❤️ using React and Redux <br /><a href="https://github.com/barun1607/portfolio" target="_blank" rel="noreferrer">Source Code</a></p>
    </div>
  );
}

export default connector(Footer);