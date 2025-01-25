import RightArrow from "@/components/icon/RightArrow";
import React from "react";

function ForthSection() {
  return (
    <div className="dark:bg-dark-bg2 flex items-center gap-2 py-5 pr-5 text-sm font-semibold text-text-color dark:text-white  bg-field6 xl:px-[100px] xl:py-6">
      <span className="font-semibold xl:text-sm">خانه</span>
      <div className="">
        <RightArrow width={22} height={22} stroke="currentColor" />
      </div>
      <span className="font-semibold xl:text-sm"> ثبت محصول </span>
    </div>
  );
}

// این صفحه بعدا با توجه به url مقدار میگیرد

export default ForthSection;
