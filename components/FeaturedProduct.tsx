import React from "react";
import FeaturedProductsSlider from "./Helper/FeaturedProductsSlider";

const FeaturedProduct = () => {
  return (
    <div   className="pt-[6rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h2 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">
          Featured Producst
        </h2>
        <button className="uppercase text-[13px] md:text-[15px] text-yellow-500 ">View All Products</button>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto">
            {/* FeaturedProductsSlider */}
            <FeaturedProductsSlider/>

      </div>
    </div>
  );
};

export default FeaturedProduct;
