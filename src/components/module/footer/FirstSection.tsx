"use client";

import FooterTopArrow from "@/components/icon/FooterTopArrow";

function FirstSection() {
  return (
    <div className="bg-[#F4F4F4] h-[4rem] xl:h-[12rem]">
      <div className="relative hidden xl:block">
        <span className="absolute rounded-full bg-red-200/45 xl:left-28 xl:top-12 xl:p-[13px]">
          <FooterTopArrow width={30} height={30} />
        </span>
      </div>
    </div>
  );
}

export default FirstSection;
