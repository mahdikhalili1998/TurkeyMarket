import Basket from "@/components/icon/Basket";
import DHL from "@/components/icon/DHL";
import FeedX from "@/components/icon/FeedX";
import TNT from "@/components/icon/TNT";
import React from "react";
import Sixth from "./Sixth";

function ForthSection() {
  return (
    <div>
      <div className="flex items-center justify-center xl:justify-between">
        {/* سبد و لوگو و متن طولانی */}
        <div className="flex flex-col gap-[11px]">
          <div className="flex flex-col items-center gap-2 text-xs font-semibold xl:flex-row xl:items-center xl:text-base xl:font-bold">
            {/* دسکتاپ */}
            <span className="hidden xl:block">
              <Basket width={49} height={38} />
            </span>
            {/* موبایل */}
            <span className="block xl:hidden">
              <Basket width={30} height={23} />
            </span>
            <span>شرکت خدمات حمل و نقل ران اکسپرس</span>
          </div>
          <p className="hidden w-[738px] text-right text-sm/5 font-semibold xl:block">
            پست سریع بین المللی تی‌ان‌تی ایران، از سال ۱۹۸۱ فعالیت خود را آغاز
            کرده و با بیش از چهل سال تجربه، به عنوان یکی از پیشگامان خدمات پستی
            در ایران شناخته می‌شود. این شرکت دارای نمایندگی‌های فعال در شهرهای
            مختلف ایران است و خدمات گسترده‌ای را ارائه می‌دهد که شامل راهکارهای
            نوین زنجیره حمل و نقل می‌شود. 
          </p>
        </div>
        <ul className="hidden items-center gap-[18px] xl:flex">
          <li className="xl:h-30 xl:p-3">
            <FeedX width={99} height={46} />
          </li>
          <li className="xl:h-30 xl:p-3">
            <DHL width={100} height={15} />
          </li>
          <li className="xl:h-30 xl:p-3">
            <TNT width={99} height={36} />
          </li>
        </ul>
      </div>
      <Sixth />
    </div>
  );
}

export default ForthSection;
