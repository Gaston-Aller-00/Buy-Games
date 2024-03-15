import React from "react";

const Hero = () => {
  return (
    <div className="relative w-[100vw] h-[60vh]  md:h-[87vh] bg">
      <div className="w-[90%] mx-auto h-[100%] flex flex-col items-start justify-center ">
        <div className="text-white font-bold text-[25px] md:text-[30px]  lg:text-[40px] uppercase">
          Best Place to Buy Games
        </div>
        <p className="text-white text-[18px] w-[90%] lg:w-[55%] mt-[1rem] md:mt-[0.2rem] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          nostrum quibusdam voluptatum debitis eligendi mollitia, modi eius fuga
          recusandae in placeat perferendis voluptatibus labore? Culpa
          cupiditate voluptas eius at maiores. Quidem explicabo harum dolores
          ipsam placeat libero ut soluta, ab minima quas, amet maiores vel
          aperiam pariatur consequuntur, eum perspiciatis qui id omnis deserunt
          sunt provident at. Eius, distinctio impedit.
        </p>
        <div>
            <button className="tex-white text-[17px] h-12 w-40 bg-blue-900 mt-5 btn">
               <span className="relative z-10"> Buy Now</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
