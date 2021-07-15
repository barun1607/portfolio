import React, { useRef, useEffect } from "react";
import "../../assets/css/section/contact.css";
import { changeWithState } from "../../assets/ts/helper";
import { connector, PropsFromRedux } from "../../redux/connector";
import { useElementOnScreen } from "../../assets/ts/helper";

const Contact: React.FC<PropsFromRedux> = (props) => {
  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.50
  });

  const formRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailInpRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(isVisible);
    changeWithState(isVisible, containerRef, 'dummy', 'show-form', 'show-form');
  }, [isVisible, containerRef])

  useEffect(() => {
    changeWithState(props.darkMode, formRef, 'dummy', 'turn-form-dark', 'turn-form-light');
    changeWithState(props.darkMode, nameRef, 'dummy', 'turn-input-dark', 'turn-input-light');
    changeWithState(props.darkMode, emailInpRef, 'dummy', 'turn-input-dark', 'turn-input-light');
    changeWithState(props.darkMode, numberRef, 'dummy', 'turn-input-dark', 'turn-input-light');
    changeWithState(props.darkMode, messageRef, 'dummy', 'turn-input-dark', 'turn-input-light');
  }, [props.darkMode]);

  return (
    <div className="contact dummy" ref={containerRef}>
      <div className="contact-form dummy" ref={formRef}>
        <form target="_blank" action="https://formsubmit.co/89ae34c89aeb12a69c6ebd7da17c36bc" method="post">
          <h2>Send me an E-mail</h2>
          <div className="input-div dummy" ref={nameRef} >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="input-div dummy" ref={emailInpRef}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Enter your e-mail" required />
          </div>
          <div className="input-div dummy" ref={numberRef}>
            <label htmlFor="pbone">Phone number (optional):</label>
            <input minLength={10} min={7000000000} max={9999999999} type="number" id="phone" name="phone" placeholder="Enter your phone number" />
          </div>
          <div className="input-div dummy" ref={messageRef}>
            <label htmlFor="message">Message:</label>
            <textarea rows={5} required id="message" name="message" placeholder="Enter your message"></textarea>
          </div>
          <div className="input-div-submit">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
      <div className="social-icons">
        <p className="social-icons-heading">Follow me on social media</p>
        <div className="social-icons-container">
          <div>
            <a href="https://github.com/barun1607" target="_blank" rel="noreferrer">
              <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" /></svg>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/varun-pandey-41618074/" target="_blank" rel="noreferrer">
              <svg version="1.1" id="in" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 64 64" >
                <path fill="#007BB5" d="M52,64H12C5.4,64,0,58.6,0,52V12C0,5.4,5.4,0,12,0h40c6.6,0,12,5.4,12,12v40C64,58.6,58.6,64,52,64z" />
                <path fill="#FFFFFF" d="M7.5,23.3h10.3v33.3H7.5V23.3z M12.7,6.7c3.3,0,6,2.7,6,6.1c0,3.3-2.7,6.1-6,6.1s-6-2.7-6-6.1
	C6.7,9.4,9.4,6.7,12.7,6.7"/>
                <path fill="#FFFFFF" d="M24.4,23.3h10v4.5h0.1c1.4-2.7,4.8-5.4,9.8-5.4c10.5,0,12.4,6.9,12.4,15.9v18.3H46.4V40.4
	c0-3.8-0.1-8.9-5.3-8.9c-5.3,0-6.2,4.2-6.2,8.6v16.6H24.5V23.3H24.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connector(Contact);