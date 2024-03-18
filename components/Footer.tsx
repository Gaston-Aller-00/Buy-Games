import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[3rem] bg-gray-800 ">
      <div className="w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <div>
          <h1 className="text-[25px] uppercase text-white mb-[1rem]">Gaming</h1>
          <p className="text-[14px]  text-white opacity-60">
            At GameVerse, we're dedicated to providing gamers with the ultimate
            digital playground. Whether you're a seasoned veteran or a newbie to
            the gaming world, we've got everything you need to level up your
            gaming experience.
          </p>
          <p className="text-[14px] mt-[1.4rem] text-white  opacity-80">
            (+0001) 1213 1313 1232 - pepe@gmail.com
          </p>
        </div>
        <div className="flex flex-col lg:mx-auto space-y-3">
          <h1 className="text-[20px] text-white mb-[1.5rem] ">Information</h1>
          <Link href="/" className="footer_link">
            About us
          </Link>
          <Link href="/" className="footer_link">
            Contact
          </Link>
          <Link href="/" className="footer_link">
            FAQ
          </Link>
          <Link href="/" className="footer_link">
            Shipping
          </Link>
          <Link href="/" className="footer_link">
            Returns
          </Link>
        </div>
        <div className="flex flex-col lg:mx-auto space-y-3">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Services</h1>
          <Link href="/" className="footer_link">
            Customer Support
          </Link>
          <Link href="/" className="footer_link">
            Track Your Order
          </Link>
          <Link href="/" className="footer_link">
            Terms of Service
          </Link>
          <Link href="/" className="footer_link">
            Privacy Policy
          </Link>
          <Link href="/" className="footer_link">
            Cookie Policy
          </Link>
        </div>
        <div className="flex flex-col lg:mx-auto space-y-3">
          <h1 className="text-[20px] text-white mb-[1.5rem] ">Contact</h1>
          <Link href="/" className="footer_link">
            Email: info@example.com
          </Link>
          <Link href="/" className="footer_link">
            Phone: 123-456-7890
          </Link>
          <Link href="/" className="footer_link">
            Address: 123 Main St, City
          </Link>
          <Link href="/" className="footer_link">
            Social Media
          </Link>
          <Link href="/" className="footer_link">
            Newsletter Signup
          </Link>
        </div>
      </div>
      <div className="mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto ">
        <p className="text-[14px]  text-white opacity-60 ">
          &#169; Copyrifht 2024
        </p>
        <Image
          src="/images/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
