import React from "react";
import FirstSection from "../module/footer/FirstSection";
import SecondSection from "../module/footer/SecondSection";
import ThirdSection from "../module/footer/ThirdSection";
import ForthSection from "../module/footer/ForthSection";
import FifthSection from "../module/footer/FifthSection";

function Footer() {
  return (
    <div className="bg-white dark:bg-[#3A3C42]">
      <FirstSection />
      <div className="mx-[20px] -mt-6 space-y-[30px] xl:mx-[100px] xl:-mt-10">
        <SecondSection />
        <ThirdSection />
        <ForthSection />
      </div>
      <FifthSection />
    </div>
  );
}

export default Footer;
