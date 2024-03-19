import React from "react";
import NewsCards from "./Helper/NewsCards";

const News = () => {
  return (
    <div className="pt-[5rem]  pb-[3rem] bg-gray-800">
      <h2 className="w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-white">
        Latest News
      </h2>
      <div className="mt-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[3rem] w-[80%] mx-auto ">
          {/* cards Newss */}
          <NewsCards image="/images/g2.jpg" title="New Update News"  description={`"Players of the highly anticipated RPG title, "Epic Quest: Rise of the Dragons," are in for an immersive treat as developers announce the integration of cutting-edge virtual reality technology. Dive headfirst into the fantastical world of dragons and magic like never before, as you wield your sword and shield in breathtaking VR environments. Get ready to embark on an epic adventure like no other, as "Epic Quest" sets the standard for VR gaming excellence.`}/>
          <NewsCards image="/images/g4.jpg" title="Check whats new" description={`"Galactic Conquest: New Frontiers" expansion pack promises interstellar thrills: Brace yourselves, space adventurers, as "Galactic Conquest: New Frontiers" unveils its latest expansion pack, promising an array of thrilling new challenges and adventures. Set your sights on uncharted territories, engage in epic space battles, and forge alliances with alien species as you expand your galactic empire. With enhanced graphics, new missions, and dynamic gameplay features, this expansion pack is sure to take your space-faring experience to infinity and beyond.`}/>
          <NewsCards image="/images/g7.jpg" title="New Tournament" description={`"Mystic Mayhem: The Lost Relic" launches global treasure hunt event: Calling all intrepid explorers and puzzle enthusiasts! "Mystic Mayhem: The Lost Relic" has launched an unprecedented global treasure hunt event, inviting players from around the world to embark on a quest for fame and fortune. Unravel ancient mysteries, decipher cryptic clues, and uncover hidden relics as you traverse exotic locations and brave perilous challenges. With exclusive in-game rewards and the chance to leave your mark on gaming history, this is one event you won't want to miss. Join the hunt today and become a legend in "Mystic Mayhem: The Lost Relic!"`}/>
        </div>
      </div>
    </div>
  );
};

export default News;
