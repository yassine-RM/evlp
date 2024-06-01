"use client";

import React, { useEffect, useState, useRef } from 'react';
import Left from './left';
import Right from './right';

import gsap from "gsap";

function Index() {

  const [loader, setLoader] = useState(true);

  const toLeft = useRef(null);
  const rightRef = useRef(null);
  const evContainer = useRef(null);
  

  useEffect(() => {
    const loaderTo = setTimeout(() => {
      const elementPosition = toLeft.current.getBoundingClientRect().left;
      gsap.to(toLeft.current, {
        duration: 1.5,
        x: `-${elementPosition - toLeft.current.parentElement.getBoundingClientRect().left}px`, // Move element to the left of its container
        onComplete: () => {
          setLoader(false);

          gsap.set(rightRef.current, { display: 'block' ,position:'absolute',right:0})
          gsap.fromTo(rightRef.current, { opacity: 0, x: 90 }, { opacity: 1, x: 0, duration: 2 });
        },
      });

    }, 2000); 
    
    return () => {
      clearTimeout(loaderTo);
    };
  }, []);

  return (
    <div id="ev-home" ref={evContainer} className={`relative min-h-screen flex items-center transition-all duration-500 ease-in-out justify-center`}>
        <div ref={toLeft} className={`ev-home-left`}>
           <Left loader={loader} />
        </div>
        <div ref={rightRef} className="ev-home-right w-1/2 hidden">
          <Right />
        </div>
    </div>
  );
}

export default Index;
