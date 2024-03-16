import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../public/images/logo.png";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
const Nav = () => {
  return (
    <div className="h-[10vh] bg-gray-800 text-white ">
      <div className="w-[95%] md:w-[80%] mx-auto h-[100%] flex items-center justify-between  ">
        <div>
          <Link href="/">
            <Image
              src={logo}
              //   src="/images/logo.png"
              alt="logoPic"
              width={170}
              height={170}
              priority
            />
          </Link>
        </div>
        <div className="h-[50%] hidden flex-[0.7] overflow-hidden  bg-gray-200 rounded-md md:flex items-center ">
          <input
            type="text"
            placeholder="Search games"
            className="block pl-[0.5rem] w-[90%] outline-none  mx-auto h-[100%] bg-gray-200 "
          />
          <MagnifyingGlassIcon className="w-[1.8rem] h-[1.8] mr-[1.4rem] cursor-pointer text-black  " />
        </div>
        <div className="flex items-center justify-center space-x-8">
          <div className="relative">
            <ShoppingBagIcon className="w-[2rem] h-[2rem] text-white cursor-pointer" />
            <div className="w-[20px] text-[12px] absolute top-[-7px] right-[-7px] h-[20px] flex items-center justify-center text-white font-semibold rounded-full bg-red-400 ">
              3
            </div>
          </div>
          {/* <div> */}
          <HeartIcon className="text-white  w-[2rem]  h-[2rem] cursor-pointer" />
          <UserIcon className="text-white  w-[2rem]  h-[2rem] cursor-pointer" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
