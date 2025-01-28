"use client";

import TelFooter from "@/components/icon/TelFooter";
import WhatsApp from "@/components/icon/WhatsApp";

function SecondSection() {
  return (
    <div className="z-10 flex items-center justify-between rounded-[10px] bg-main-orange px-2 py-3 xl:justify-between xl:px-10 xl:py-[18px]">
      {/* دستگتاپ */}
      <span className="hidden font-semibold text-white xl:block xl:text-[18px]">
        در خصوص سفارش خدمات نیاز به راهنمایی دارید؟
      </span>
      {/* موبایل */}
      <span className="block text-xs font-semibold text-white xl:hidden xl:text-[18px]">
        نیاز به مشاوره دارید؟
      </span>
      {/* دکمه ها */}
      <div className="flex items-center gap-[9px] xl:gap-[18px]">
        <button className="flex items-center gap-[5px] rounded-md bg-field6 p-[5px] text-xs font-semibold text-text-color xl:gap-[10px] xl:p-[10px] xl:text-base">
          <span className=" ">پشتیبانی آنلاین</span>
          <span className="hidden xl:block">
            <WhatsApp width={27} height={27} stroke="currentColor" />
          </span>
          <span className="block xl:hidden">
            <WhatsApp width={13} height={13} stroke="currentColor" />
          </span>
        </button>
        <button className="flex items-center gap-[5px] rounded-md bg-field6 p-[5px] font-medium text-text-color xl:flex xl:items-center xl:gap-[10px] xl:p-[10px] xl:text-lg">
          <span className="text-xs">۰۲۱-۴۲۵۶</span>
          <span className="hidden xl:block">
            <TelFooter width={30} height={30} stroke="currentColor" />
          </span>
          <span className="block xl:hidden">
            <TelFooter width={15} height={15} stroke="currentColor" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default SecondSection;
