import React from "react";
import NewsCards from "./Helper/NewsCards";

const News = () => {
  return (
    <div className="pt-[5rem]  pb-[3rem] bg-gray-800">
      <h1 className="w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-white">
        Latest News
      </h1>
      <div className="mt-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[3rem] w-[80%] mx-auto ">
          {/* cards Newss */}
          <NewsCards image="/images/g2.jpg" title="New Update News"/>
          <NewsCards image="/images/g4.jpg" title="Check whats new"/>
          <NewsCards image="/images/g7.jpg" title="New Tournament"/>
        </div>
      </div>
    </div>
  );
};

export default News;
