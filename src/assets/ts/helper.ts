import React, { useEffect, useRef, useState } from "react";

export const changeWithState = (
  toggle: boolean,
  inputRef: React.RefObject<HTMLElement | SVGElement>,
  defaultClass: string,
  onClass: string,
  offClass: string
) => {
  const element = inputRef.current;
  if (toggle) {
    if (element?.classList.contains(defaultClass)) element?.classList.replace(defaultClass, onClass);
    else element?.classList.replace(offClass, onClass);
  } else {
    element?.classList.replace(onClass, offClass);
  }
}

export const useOutsideAlert = (ref: React.RefObject<HTMLElement>, setToggle: React.ComponentState) => {
  const handleClickOutside = (event: any) => {
    event.preventDefault();
    if (ref.current && !ref.current.contains(event.target)) {
      setToggle(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });
}

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

type optionType = typeof defaultOptions;

export const useElementOnScreen = (options: optionType = defaultOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callBack = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    const element = containerRef.current;
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    }
  }, [containerRef, options]);

  return {
    containerRef: containerRef,
    isVisible: isVisible
  };
}