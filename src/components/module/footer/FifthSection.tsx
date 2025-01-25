import LeftArrow from "@/components/icon/LeftArrow";
import React from "react";

function FifthSection() {
  return (
    <ul className="mt-3 xl:hidden">
      <li className="mx-4 mt-3 flex items-center justify-between gap-3 rounded-md bg-field6 p-2 px-3 text-text-color dark:bg-[#404248] dark:text-white">
        <span className="text-xs font-semibold">دسترسی سریع</span>
        <LeftArrow height={22} width={22} stroke="currentColor" />
      </li>
      <li className="mx-4 mt-3 flex items-center justify-between gap-3 rounded-md bg-field6 p-2 px-3 text-text-color dark:bg-[#404248] dark:text-white">
        <span className="text-xs font-semibold">لینک های مهم</span>
        <LeftArrow height={22} width={22} stroke="currentColor" />
      </li>
      <li className="mx-4 mt-3 flex items-center justify-between gap-3 rounded-md bg-field6 p-2 px-3 text-text-color dark:bg-[#404248] dark:text-white">
        <span className="text-xs font-semibold">ارتباط با ما</span>
        <LeftArrow height={22} width={22} stroke="currentColor" />
      </li>
    </ul>
  );
}

export default FifthSection;
