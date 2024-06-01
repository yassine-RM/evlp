"use client";

import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import electricCar0 from "@/app/assets/electric-car0.png";
import electricCar1 from "@/app/assets/electric-car1.png";
import electricCar2 from "@/app/assets/electric-car2.png";
import electricCar3 from "@/app/assets/electric-car3.png";

function Right() {
  const images = [
    electricCar0.src,
    electricCar1.src,
    electricCar2.src,
    electricCar3.src
  ];

  return (
    <div id="custom-controls-gallery" className="relative w-full">
      <Swiper
        speed={1000}
        effect="slide"
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1.5} // Show 1.5 slides per view to show half of the next slide
        pagination={{ clickable: true }}
        className="rounded-2xl w-full h-[36rem]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              className="block w-full h-auto"
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Right;
