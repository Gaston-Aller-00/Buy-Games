import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900  ">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[8rem] ">
        <div className="mt-[1.5rem] md:mt-0">
          <h2 className=" mb-4 text-[25px] md:text-[30px] lg:text-[35px] leading-[2.4rem] text-white">
            Get Our email for info on new items, sales and more.{" "}
          </h2>
          <p className="text-[17px] text-white mt-[0.8] mb-[1.5rem] opacity-70 ">
            We will email you a voucher wotrh 10$ off your
          </p>
          <div className="w-[100%] relative h-[2.7rem] mb-[0.3rem] bg-white rounded ">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[70%] md:w-[80%] bg-white ml-4 outline-none h-[2.7rem] "
            />
            <button className="rounded w-[20%] md:w-[18.5%] right-0 absolute h-[2.7rem]  bg-blue-500 hover:bg-blue-700 transition-all duration-200 ">
              Suscribe!
            </button>
            <p className="text-[14px] text-white capitalize opacity-35 font-thin">
              By subscribing you agree to our terms & conditions and privacy &
              cookies policy
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="ttext-[20px] md:text-[25px] lg:text-[30px] leading-[2.4rem] text-white ">
            Need help? <br />
            (+323 424 2424)
          </h2>
          <p className="text-white opacity-70 mt-[0.5rem]">
            We are available 8:00am - 7:00pm
          </p>
          <div className="mt-[2rem] flex items-center space-x-2">
            <Image
              className="object-contain"
              alt="picFooter"
              height={130}
              width={130}
              src="/images/gp.png"
            />
            <Image
              className="object-contain"
              alt="picFooter"
              height={130}
              width={130}
              src="/images/as.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
