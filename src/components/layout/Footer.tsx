import React from "react";
import FirstSection from "../module/footer/FirstSection";
import SecondSection from "../module/footer/SecondSection";
import ThirdSection from "../module/footer/ThirdSection";
import ForthSection from "../module/footer/ForthSection";

function Footer() {
  return (
    <div className="dark:bg-field3 bg-white">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
    </div>
  );
}

export default Footer;
