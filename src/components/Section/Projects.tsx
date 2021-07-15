import React, { useRef, useEffect } from "react";
import { useElementOnScreen, changeWithState } from "../../assets/ts/helper";
import '../../assets/css/section/projects.css';

const Projects: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.90
  });

  const textRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectRef.current) {
      const elementList = projectRef.current.getElementsByTagName('a');
      for (let i = 0; i < elementList.length; i++) {
        elementList.item(i)?.style.setProperty('animation-delay', `${(i + 1) * 400}ms`);
      }
    }
  })

  useEffect(() => {
    changeWithState(isVisible, titleRef, 'dummy', 'show-projects', 'show-projects');
    changeWithState(isVisible, textRef, 'dummy', 'show-projects', 'show-projects');
    changeWithState(isVisible, dividerRef, 'dummy', 'show-projects', 'show-projects');
    changeWithState(isVisible, projectRef, 'dummy', 'show-projects-alt', 'show-projects-alt');
  }, [isVisible])

  return (
    <div className="projects" ref={containerRef}>
      <p className="projects-text dummy" ref={textRef}>
        I've worked on, and am still workin on several professional and personal projects. I will list the most recent projects that I've worked on or contributed to here. Also, please check out my <a href="https://github.com/barun1607" target="_blank" rel="noreferrer" style={{ color: "currentcolor" }}>Github Profile</a>, I post many of my personal projects on there.
      </p>
      <div className="vertical-divider-2 dummy" ref={dividerRef}></div>
      <div className="projects-list">
        <p className="project-heading dummy" ref={titleRef}>Project links:</p>
        <div className="project-link-container dummy" ref={projectRef}>
          <a href="http://orion-racing.com/" target="_blank" rel="noreferrer"><u>&rArr; Orion Racing 🏎️</u></a>
        </div>
      </div>
    </div>
  )
}

export default Projects