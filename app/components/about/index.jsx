
import React, { useRef, useEffect } from 'react';
import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';
import AboutText from './AboutText';
import Image from 'next/image';
import Arrow from '../../assets/inside-text-arrow.png';
import evEnergy from '../../assets/ev-energy.png';
import efficient from '../../assets/efficient.png';
import info from '../../assets/info.png';
import gsap from 'gsap'
import useIntersectionObserver from '@/app/hooks/UseIntersectionObserver';





const Page = () => {
  const [observe, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const aboutSection = useRef(null);
  const arrIcon = useRef(null)
  const energyIcon = useRef(null)
  const infoIcon = useRef(null)
  const chartIcon = useRef(null)
  const aboutHeadingRef = useRef(null)

  useEffect(() => {
    if (aboutSection.current) {
      observe(aboutSection.current);
    }
  }, [observe]);
  useEffect(() => {
    if (isIntersecting) {
    gsap.fromTo(
      arrIcon.current,
      { display: 'none', opacity: 0 }, 
      { duration: 1.5, display: 'inline-block', opacity: 1, delay: 0 } 
    );
    gsap.fromTo(
      [energyIcon.current, infoIcon.current, chartIcon.current],
      { display: 'none', opacity: 0 }, 
      { duration: 1.5, display: 'inline-block', opacity: 1, delay: 0 } 
    );
    }
  }, [isIntersecting])
  



  return (

      <div ref={aboutSection} id="ev-about" className="min-h-screen bg-light flex flex-col justify-evenly align-middle">
              <div className="about-title justify-center">
                  <h1 ref={aboutHeadingRef} className="text-black text-center text-4xl py-5 mt-10">
                    <div className="flex justify-center gap-2 items-center">
                      evolutionary electric &nbsp;
                      <Image ref={arrIcon} src={Arrow} alt="Arrow" width={200} height={50} className=' hidden' />
                    </div>
                    <div className="flex justify-center gap-5 items-center">
                    &nbsp;vehicle&nbsp;
                      <Image ref={energyIcon} src={evEnergy} alt="EV" width={30} height={70} className=' hidden' />
                      &nbsp;charging stations that 
                    </div>
                    <div className="flex justify-center gap-5 items-center">
                      are faster&nbsp;
                      <Image ref={infoIcon} src={info} alt="Info" width={50} height={50} className=' hidden' /> 
                      &nbsp;& more &nbsp;
                      <Image ref={chartIcon} src={efficient} alt="efficient" width={50} height={50} className=' hidden' />
                      &nbsp;efficient.
                    </div>
                  </h1>
              </div>
              <div className='aboutMainContent flex relative'>
                    <AboutLeft />
                    <AboutRight />
                    <AboutText />
              </div>
      </div>
  

  );
};

export default Page;

