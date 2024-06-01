"use client";

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';


import Menu from './menu'
import Icons from './icons'
const Index = ()=>{

    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('ev-home');

    useEffect(() => {
      const handleScroll = () => {

        const sections = document.querySelectorAll("div[id]");
        const scrollPosition = window.scrollY + 200;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
            ) {
            setActiveSection(section.getAttribute("id"));
            }
        });


        const scrollTop = window.pageYOffset;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
      
    return (
        <>
            <nav className={`bg-transparent container w-full max-w-full py-4 ev-nav ${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
                <div className="flex justify-between">
                    <Icons/>
                    <Menu activeSection={activeSection} />
                </div>
            </nav>
        </>
    )
}

export default Index