import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [options]);

  const observe = (element) => {
    if (observer.current && element) observer.current.observe(element);
  };

  return [observe, isIntersecting];
};

export default useIntersectionObserver;
