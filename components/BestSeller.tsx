import React from "react";
import ProductCard from "./Helper/ProductCard";

const BestSeller = () => {
  return (
    <div className="bg-gray-900 pt-[4rem] pb-p[3rem]">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">
          Best Seller
        </h1>
        <button className="text-yellow-400">View All Producst</button>
      </div>
      <div className="grid gris-cols1 mt-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto ">
        <div
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-anchor-placement="top-center"
        >
          <ProductCard
            title="COD"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g3.jpg"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-anchor-placement="top-center"
        >
          {" "}
          <ProductCard
        title="Fury Road"
        actualPrice="$40"
        discountPrice="$35"
        category="Shotting"
        image="/images/g2.jpg"
      />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-anchor-placement="top-center"
        >
        <ProductCard
        title="Dark Horizon"
        actualPrice="$50"
        discountPrice="$30"
        category="Shotting"
        image="/images/g7.jpg"
      />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-anchor-placement="top-center"
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
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-anchor-placement="top-center"
        >
          {" "}
          {/* <ProductCard
            title="COD"
            actualPrice="$60"
            discountPrice="$50"
            category="Shotting"
            image="/images/g6.jpg"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
{/* <ProductCard
        title="COD"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g1.jpg"
      />

      <ProductCard
        title="Fury Road"
        actualPrice="$40"
        discountPrice="$35"
        category="Shotting"
        image="/images/g2.jpg"
      />
      <ProductCard
        title="Shadow's Edge"
        actualPrice="$55"
        discountPrice="$25"
        category="Shotting"
        image="/images/g3.jpg"
      />
      <ProductCard
        title="Eclipse of Destiny"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g4.jpg"
      />
      <ProductCard
        title="Ghost Town"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g5.jpg"
      />
      <ProductCard
        title="Doomed Soul"
        actualPrice="$40"
        discountPrice="$20"
        category="Shotting"
        image="/images/g6.jpg"
      />
      <ProductCard
        title="Dark Horizon"
        actualPrice="$50"
        discountPrice="$30"
        category="Shotting"
        image="/images/g7.jpg"
      />
      <ProductCard
        title="Days gone"
        actualPrice="$30"
        discountPrice="$25"
        category="Shotting"
        image="/images/g8.jpg"
      /> */}