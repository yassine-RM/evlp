import React from 'react';
import LeftBg from '../../assets/charger-station.png'
import Image from "next/image";
import ParkingEv1 from '../../assets/parking-ev1.jpg'
import ParkingEv2 from '../../assets/parking-ev2.jpg'


function AboutLeft() {
  return (
    <div id='about-left' className=" relative w-[60%] min-h-[450px] bg-charger-station rounded-3xl text-white"
    style={{
      backgroundImage: `url(${LeftBg.src})`,
    }}
    >
      <div className=' about-left-content absolute top-7 right-7 bg-white bg-opacity-35 rounded-3xl p-5 text-white z-10'>
            <div className=' flex justify-between items-center'>
                  <Image width={50} height={50}  src={ParkingEv1} className=' rounded-[50%]'/>
                  <Image width={50} height={50}   src={ParkingEv2} className=' rounded-[50%]'/>
            </div>
            <div className=' flex justify-between items-center text-sm'>
              <span className=' mr-8'>Park EV <br></br>Automatically <br></br>Vol 1.</span>
              <span>EVs once<br></br> parked Vol 1</span>
            </div>
      </div>
    </div>
  );
}

export default AboutLeft;
