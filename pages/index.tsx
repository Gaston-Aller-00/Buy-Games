import BestSeller from "@/components/BestSeller";
import Contact from "@/components/Contact";
import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import News from "@/components/News";
import TopProducts from "@/components/TopProducts";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {

  //aos animation libbbrerii
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Nav />
      <Hero />
      {/* producst */}
      <FeaturedProduct />
      <TopProducts />
      <BestSeller />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
