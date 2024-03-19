import React from "react";
import ProductCard from "./Helper/ProductCard";

const TopProducts = () => {
  return (
    <div className="bg-gray-800 pt-[4rem] pb-[3rem] px-[12rem] ">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h2 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">
          Top Products
        </h2>
        <button className="uppercase text-[13px] md:text-[15px] text-yellow-400">
          {" "}
          View All Products
        </button>
      </div>
      <div
        className=" grid  mt-[2rem]  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-y-8 w-
      [%80] mx-auto "
      >
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
        <ProductCard
        title="COD"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g1.jpg"
      />
        </div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <ProductCard
        title="Fury Road"
        actualPrice="$40"
        discountPrice="$35"
        category="Shotting"
        image="/images/g2.jpg"
      />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <ProductCard
        title="Ghost Town"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g5.jpg"
      />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ProductCard
        title="Eclipse of Destiny"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g4.jpg"
      />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
         <ProductCard
        title="Ghost Town"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g5.jpg"
      />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ProductCard
            title="Battlefield"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g6.jpg"
          />
        </div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
         <ProductCard
        title="Days gone"
        actualPrice="$30"
        discountPrice="$25"
        category="Shotting"
        image="/images/g8.jpg"
      />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
       <ProductCard
        title="Dark Horizon"
        actualPrice="$50"
        discountPrice="$30"
        category="Shotting"
        image="/images/g7.jpg"
      />
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

