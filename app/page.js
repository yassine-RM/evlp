"use client";

import Header from "./components/header";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import ServicesPage from "./components/services";
import { useEffect, useState } from "react";

export default function Home() {

  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true)
    }, 2000);
  }, [])
  


  return (
      <>
        { showHeader && (
          <Header />
        )}
        <div className="container min-h-screen w-full max-w-full bg-ev-white-default ">
          <HomePage />
          <AboutPage />
          <ServicesPage />
        </div>
      </>
  );
}
