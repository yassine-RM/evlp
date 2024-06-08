import React, { useEffect, useRef } from 'react'
import gsap from "gsap";

import ScrollItem from './ScrollItem'
import { MdOutlineEvStation } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { CgController } from "react-icons/cg";
import { TfiWorld } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import useIntersectionObserver from '@/app/hooks/UseIntersectionObserver';
import electricCar0 from "@/app/assets/electric-car0.png";


function Index() {
  const evServicesTopImg = useRef(null);
  const evServicesScrollRef = useRef(null);
  const evServicesTitleRef = useRef(null);
  const evServicesSubTitleRef = useRef(null);
  const [observe, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter opacity-0">
        {char}
      </span>
    ));
  };
  useEffect(() => {
    if (evServicesScrollRef.current) {
      observe(evServicesScrollRef.current);
    }
  }, [observe]);

  useEffect(() => {
    if (isIntersecting) {
      gsap.to(
        evServicesTopImg.current,
        {
          width: "100%",
          height: "300px",
          x: "0",
          duration: 1
        }
      );
      gsap.fromTo(
        evServicesTitleRef.current.querySelectorAll('.letter'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.05 }
      );
      gsap.fromTo(
        evServicesSubTitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap.fromTo(
        evServicesTopImg.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay:1,onComplete: () => {
            gsap.to(
              evServicesTopImg.current,
              {
                width: "40%",
                height: "400px",
                x: "70%",
                duration: 1
              }
            );
        } },
        
      );
      gsap.fromTo(evServicesScrollRef.current, { opacity: 0, x: 400 }, { opacity: 1, x: 200, duration: 4 });
    }
  }, [isIntersecting]);
  useEffect(() => {
      gsap.fromTo(evServicesScrollRef.current, { opacity: 0, x: 400 }, { opacity: 1, x: 200, duration: 4 });
  }, []);
  
  return (
    <div id='ev-services' className='min-h-screen bg-light relative'>
      <div className="ev-services-top">
          <h1 ref={evServicesTitleRef} className="ev-title text-black text-center text-5xl py-5 mt-10">
            {splitText('What we offer')}
          </h1>
          <div ref={evServicesSubTitleRef} className="text-center opacity-0">
            <p className="ev-subtitle text-black w-1/2 m-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis rerum odio eum expedita nesciunt ipsa deleniti ullam.
            </p>
          </div>
      </div>
      <div ref={evServicesScrollRef} className="ev-services-scroll-list flex gap-6 mt-12 absolute w-full opacity-0">
            <ScrollItem border bg="" >
              <MdOutlineEvStation className='p-1 rounded-full w-[25px] h-auto' /> charging stations installation
            </ScrollItem>

            <ScrollItem  bg="" >
              <GiAutoRepair className='bg-purple-deep p-1 rounded-full w-[25px] h-auto' fill='white'/> maintenance and repairs
            </ScrollItem>

            <ScrollItem  bg="bg-cian-light" >
              <CgController className='bg-white p-1 rounded-full w-[25px] h-auto' fill='white' /> custom solutions
            </ScrollItem>

            <ScrollItem  bg="" >
              <TfiWorld className='bg-purple-deep p-1 rounded-full w-[25px] h-auto' fill='white' /> charging network access
            </ScrollItem>

            <ScrollItem border bg="" >
              <BiSupport className='p-1 rounded-full w-[25px] h-auto'  /> 24/7 custom support
            </ScrollItem>

            <ScrollItem  bg="bg-purple-light" >
              <SiMongodb className='bg-white p-1 rounded-full w-[25px] h-auto'  /> sustainability
            </ScrollItem>
      </div>
      <div className="ev-services-body mt-48 mt">

      <img
        ref={evServicesTopImg}
        src={electricCar0.src}
        className="block w-full object-cover rounded-3xl w-full h-60"
        alt={`Slide ${electricCar0.src}`}
      />
        
      </div>
    </div>
  )
}

export default Index