import React from "react";
import FirstSection from "../module/footer/FirstSection";
import SecondSection from "../module/footer/SecondSection";
import ThirdSection from "../module/footer/ThirdSection";
import ForthSection from "../module/footer/ForthSection";
import FifthSection from "../module/footer/FifthSection";

function Footer() {
  return (
    <div className="bg-white dark:bg-field3">
      <FirstSection />
      <div className="mx-[20px] -mt-6 xl:-mt-10 space-y-[30px] xl:mx-[100px]">
        <SecondSection />
        <ThirdSection />
        <ForthSection />
      </div>
      <FifthSection />
    </div>
  );
}

export default Footer;
