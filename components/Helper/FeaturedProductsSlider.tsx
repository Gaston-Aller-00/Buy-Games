import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const FeaturedProductsSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {/* cards */}
      <ProductCard
        title="COD"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g1.jpg"
      />

      <ProductCard
        title="COD"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g2.jpg"
      />
      <ProductCard
        title="COD"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g3.jpg"
      />
      <ProductCard
        title="COD"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g4.jpg"
      />
      <ProductCard
        title="COD"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g5.jpg"
      />
      <ProductCard
        title="COD"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g6.jpg"
      />
      <ProductCard
        title="COD"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g7.jpg"
      />
      <ProductCard
        title="COD"
        actualPrice="$60"
        discountPrice="$50"
        category="Shotting"
        image="/images/g8.jpg"
      />
    </Carousel>
  );
};

export default FeaturedProductsSlider;
