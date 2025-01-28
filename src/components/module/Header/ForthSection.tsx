import LeftArrow from "@/components/icon/LeftArrow";
import React from "react";

function ForthSection() {
  return (
    <div className="flex items-center gap-2 bg-field6 py-5 pr-5 text-sm font-semibold text-text-color dark:bg-dark-bg2 dark:text-white xl:px-[100px] xl:py-6">
      <span className="font-semibold xl:text-sm">خانه</span>
      <div className="">
        <LeftArrow width={22} height={22} stroke="currentColor" />
      </div>
      <span className="font-semibold xl:text-sm"> ثبت محصول </span>
    </div>
  );
}

// این صفحه بعدا با توجه به url مقدار میگیرد

export default ForthSection;
