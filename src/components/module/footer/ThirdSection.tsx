import ImageTag from "@/components/element/ImageTag";
import React from "react";

function ThirdSection() {
  return (
    <div className="mx-16 mt-12 hidden items-center justify-between gap-[103px] dark:bg-field3 dark:text-white xl:mx-[100px] xl:flex">
      {/* متن ها و سبد  */}
      <div className="items-start xl:flex xl:flex-col">
        <div className="flex items-center gap-3">
          <ImageTag src="basket" width={49} height={38} />
          <span className="text-base font-semibold">
            شرکت خدمات حمل و نقل ران اکسپرس
          </span>
        </div>
        <p className="mt-3 xl:text-sm/5 xl:font-semibold">
          پست سریع بین المللی تی‌ان‌تی ایران، از سال ۱۹۸۱ فعالیت خود را آغاز
          کرده و با بیش از چهل سال تجربه، به عنوان یکی <br />
          از پیشگامان خدمات پستی در ایران شناخته می‌شود. این شرکت دارای
          نمایندگی‌های فعال در شهرهای مختلف ایران <br></br>است و خدمات گسترده‌ای
          را ارائه می‌دهد که شامل راهکارهای نوین زنجیره حمل و نقل می‌شود. 
        </p>
      </div>
      {/* سه لوگو */}
      <div className="mt-3 pr-6">
        <ImageTag src="logo" width={400} height={200} />
      </div>
    </div>
  );
}

export default ThirdSection;
