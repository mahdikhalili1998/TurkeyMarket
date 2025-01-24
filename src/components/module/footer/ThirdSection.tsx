import ImageTag from "@/components/element/ImageTag";
import React from "react";

function ThirdSection() {
  return (
    <div className="dark:bg-field3  mx-16 mt-12 flex items-center justify-between dark:text-white">
      <div>
        <div className="flex items-center gap-3">
          <ImageTag src="basket" width={49} height={38} />
          <span className="text-sm font-semibold">
            شرکت خدمات حمل و نقل ران اکسپرس
          </span>
        </div>
        <p className="mt-3 text-xs">
          پست سریع بین المللی تی‌ان‌تی ایران، از سال ۱۹۸۱ فعالیت خود را آغاز
          کرده و با بیش از چهل سال تجربه، به عنوان یکی <br />
          از پیشگامان خدمات پستی در ایران شناخته می‌شود. این شرکت دارای
          نمایندگی‌های فعال در شهرهای مختلف ایران <br></br>است و خدمات گسترده‌ای
          را ارائه می‌دهد که شامل راهکارهای نوین زنجیره حمل و نقل می‌شود. 
        </p>
      </div>
      <div className="mt-3 pr-6">
        <ImageTag src="logo" width={400} height={200} />
      </div>
    </div>
  );
}

export default ThirdSection;
