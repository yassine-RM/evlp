"use client";

import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import { gsap } from 'gsap';


function Menu({activeSection}) {


  const evMenuRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(evMenuRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: .6 });

  }, [])
  
  return (

          <div ref={evMenuRef} className="ev-menu-links flex space-x-4 opacity-0">
            <Link className={`px-4 py-1 border border-1 rounded-full font-bold  ${activeSection === 'ev-about' ? 'border-ev-black-default text-ev-black-default' : 'border-ev-black-lighter text-ev-black-lighter'}`} href="#ev-about">
              <sup className='ev-tab-num mr-1'>01</sup>
              about
            </Link>
            <Link className={`px-4 py-1 border border-1 rounded-full font-bold  ${activeSection === 'ev-services' ? 'border-ev-black-default text-ev-black-default' : 'border-ev-black-lighter text-ev-black-lighter'}`} href="#ev-home">
              <sup className='ev-tab-num mr-1'>02</sup>
              services
            </Link>
            <Link className={`px-4 py-1 border border-1 rounded-full font-bold  ${activeSection === 'ev-sustainability' ? 'border-ev-black-default text-ev-black-default' : 'border-ev-black-lighter text-ev-black-lighter'}`} href="#ev-contact">
              <sup className='ev-tab-num mr-1'>03</sup>
              sustainability
            </Link>
            <Link className={`px-4 py-1 border border-1 rounded-full font-bold  ${activeSection === 'ev-features' ? 'border-ev-black-default text-ev-black-default' : 'border-ev-black-lighter text-ev-black-lighter'}`} href="#ev-contact">
              <sup className='ev-tab-num mr-1'>04</sup>
              features & benefits
            </Link>
          </div>

  )
}

export default Menu