import React from "react";
const Hero = () => {
  return (
    <div className="relative w-[100vw] h-[60vh]  md:h-[87vh]   bg">
      <div className="w-[90%] mx-auto h-[100%] flex flex-col items-start justify-center ">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-white font-bold text-[25px] md:text-[30px]  lg:text-[40px] uppercase"
        >
          Best Place to Buy Games
        </div>
        <p
          data-aos="fade-left"
          className="text-white text-[18px] w-[90%] lg:w-[55%] mt-[1rem] md:mt-[0.2rem] "
        >
          Welcome to our digital video game store, the ultimate destination for
          digital entertainment enthusiasts and gaming aficionados alike. Dive
          into a world of endless possibilities where adventure awaits with
          every click. From thrilling action-packed games to captivating
          role-playing experiences and challenging puzzles, we have something
          for every gamer, from newcomers to seasoned veterans.
        </p>
        <div data-aos="zoom-in" data-aos-delay="400">
          <button className="text-white text-[17px] h-12 w-40 bg-blue-900 mt-5 btn ">
            <span className="relative z-10"> Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
