"use client";

import FooterTopArrow from "@/components/icon/FooterTopArrow";

function FirstSection() {
  return (
    <div className="h-[4rem] bg-[#F4F4F4] dark:bg-darkMoodBg xl:h-[12rem]">
      <div className="relative hidden xl:block">
        <span className="absolute rounded-full bg-red-200/45 text-[#FA5A2A] dark:bg-amber-950 dark:text-white xl:left-28 xl:top-12 xl:p-[13px]">
          <FooterTopArrow width={30} height={30} stroke="currentColor" />
        </span>
      </div>
    </div>
  );
}

export default FirstSection;
