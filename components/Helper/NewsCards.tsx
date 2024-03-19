import { TagIcon } from "@heroicons/react/16/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  description:string;
}

const NewsCards = ({ image, title,description }: Props) => {
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
        data-aos-delay="100"
        className="col-span-2"
      >
        <Image
          className="w-[95%] h-[95%] rounded"
          src={`${image}`}
          alt="picNews"
          // more calite
          layout="fill" 

          // height={350}
          // width={250}
        />
      </div>
      <div className="col-span-4">
        <h2 className=" text-[22px] mb-[1rem] text-white capitalize">
          {title}
        </h2>
        <div className="flex mb-[0.4rem items-center] space-x-2">
          <CalendarIcon className="w-[1rem] h-[1rem] text-white opacity-85" />
          <p className="text-gray-500 opacity-90 font-thin text-[14px] ">
            January 14, 2024
          </p>
        </div>
        <div className="flex mb-[0.4rem items-center space-x-2]">
          <TagIcon className="w-[1rem] h-[1rem] text-white opacity-85" />
          <p className="text-gray-500 opacity-90 font-thin text-[14px]">
            Call of Duty,Game,News
          </p>
        </div>
        <div className="text-white mb-[1rem]">
       {description}
        </div>
        <button className="text-white text-[17px] h-12 w-40 bg-blue-900 mt-5 btn rounded ">
          <span className="relative z-10"> Read More</span>
        </button>
      </div>
    </>
  );
};

export default NewsCards;
