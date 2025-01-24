import React from "react";

function ForthSection() {
  return (
    <div className="flex items-center gap-2 py-5 xl:py-6 pr-5 text-sm font-semibold dark:bg-dark-bg dark:text-white xl:pr-14">
      <span>خانه</span>
      <span>{`>`}</span>
      <span> ثبت محصول </span>
    </div>
  );
}

// این صفحه بعدا با توجه به url مقدار میگیرد

export default ForthSection;
