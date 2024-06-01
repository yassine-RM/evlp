"use client";

import React, { useEffect, useRef } from 'react'
import EvLoading from '@/app/components/loading'
import { GrNext,GrLinkNext } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

import { gsap } from 'gsap';


function Left({loader}) {

  const evReadMoreRef = useRef(null)
  const readMoreTextRef = useRef(null)
  const evNextRef1 = useRef(null)
  const evNextRef2 = useRef(null)

  useEffect(() => {
    if (!loader) {
      gsap.to(evReadMoreRef.current, { opacity: 1 });
      gsap.fromTo(evNextRef1.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });
      gsap.fromTo(evNextRef2.current, { opacity: 0, x: 0 ,scale:.5}, { opacity: 1, x: 0, duration: 1,scale:1 });
      gsap.fromTo(readMoreTextRef.current, { opacity: 0, y: 10}, { opacity: 1, y: 0, duration: 1});
    }
  }, [loader])
  
  return (
  <>
    <EvLoading loader={loader} />

    <div ref={evReadMoreRef} className="ev-read-more absolute flex justify-between opacity-0 items-end">
      <div className="ev-read-more-btn w-1/2">
        <button className="flex justify-center items-center gap-5  px-5 py-3 rounded-full bg-ev-black-default text-ev-white-default">
          <span className="leading-none">read more</span>
          <span ref={evNextRef1} className="leading-none">
            <MdNavigateNext width={3} height={2}  />
          </span>
        </button>
      </div>
      <div className="ev-read-more-text text-ev-black-default w-1/3 grid items-end text-end mt-3">
        <p ref={readMoreTextRef} className='text-justify font-medium'>Next generation electric vehicle.</p>
        <div ref={evNextRef2} className="flex justify-center items-center mt-2 leading-none p-2 rounded-full w-8 h-8 bg-ev-black-default text-ev-white-default justify-self-end">
          <GrLinkNext />
        </div>
      </div>

    </div>
  </>
  
  )
}

export default Left