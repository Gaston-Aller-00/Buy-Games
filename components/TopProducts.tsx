import React from "react";
import ProductCard from "./Helper/ProductCard";

const TopProducts = () => {
  return (
    <div className="bg-gray-800 pt-[4rem] pb-[3rem] px-[12rem] ">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">
          Top Products
        </h1>
        <button className="uppercase text-[13px] md:text-[15px] text-yellow-400">
          {" "}
          View All Products
        </button>
      </div>
      <div
        className=" grid  mt-[2rem]  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-y-8 w-
      [%80] mx-auto "
      >
        <div>
          <ProductCard
            title="COD"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g1.jpg"
          />
        </div>

        <div>
          <ProductCard
            title="COD"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g2.jpg"
          />
        </div>
        <div>
          <ProductCard
            title="COD"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g3.jpg"
          />
        </div>
        <div>
          <ProductCard
            title="COD"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g4.jpg"
          />
        </div>
        <div>
          <ProductCard
            title="COD"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g5.jpg"
          />
        </div>
        <div>
          <ProductCard
            title="COD"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g6.jpg"
          />
        </div>

        <div>
          <ProductCard
            title="COD"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g7.jpg"
          />
        </div>
        <div>
          <ProductCard
            title="COD"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g8.jpg"
          />
        </div>
   
      
      </div>
    </div>
  );
};

export default TopProducts;
