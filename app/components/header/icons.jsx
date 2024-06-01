"use client";


import React ,{ useEffect,useRef } from 'react';
import { MdElectricBolt } from "react-icons/md";
import Image from "next/image";
import { CiShare2 } from 'react-icons/ci';
import { VscMenu } from "react-icons/vsc";
import { gsap } from 'gsap';


import evLogo from "@/app/assets/evlogo.jpeg";


function Icons() {

  const shareRef = useRef(null);
  const getAppRef = useRef(null);
  const logoRef = useRef(null);
  const evRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(evRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: .6 });
    gsap.fromTo(menuRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: .6 });

    gsap.fromTo(shareRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: .6 });
    gsap.fromTo(getAppRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: .6 });
    gsap.fromTo(logoRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: .6 });
  }, []);

  return (
    <div className='text-ev-black-default flex gap-24 items-center'>
        <div className='ev-left-icons flex gap-2 items-center'>
            <span ref={evRef} className='ev-dark-mode'>
              <MdElectricBolt size="25px" />
            </span>
            <span ref={menuRef} className='ev-menu-icon bg-ev-black-default border border-ev-black-default rounded-full py-1 px-4'>
                <VscMenu color='white' size="18px" />
            </span>
        </div>
        <div className='ev-right-icons flex gap-2'>
            <div ref={shareRef} className="ev-share border border-ev-black-default flex items-center justify-center rounded-full w-8">
              <CiShare2 size="15px" />
            </div>
            <div ref={getAppRef} className="grid bg-ev-black-default rounded-full w-8 h-8 p-1 gap-0 place-items-center">
              <div className="flex flex-col items-center justify-center text-ev-white-default text-[9px]">
                <span className="leading-none">Get</span>
                <span className="leading-none">App</span>
              </div>
            </div>
            <div ref={logoRef} className="ev-logo">
              <Image 
                width={500}
                height={500} className='rounded-full w-8 border border-ev-black-default rounded-full' src={evLogo.src} alt="ev-logo"/>
            </div>
        </div>
    </div>
  )
}

export default Icons