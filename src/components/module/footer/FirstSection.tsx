"use client";
import ImageTag from "@/components/element/ImageTag";
import WhatsApp from "../../../../public/icon/whatsApp.svg";
import TopArrow from "../../../../public/icon/top.svg";
function FirstSection() {
  return (
    <div>
      <div className="bg-field6 h-[8rem] w-full px-4 pt-8 dark:bg-black">
        <div className="bg-primry-White/15 mx-16 -mb-6 mr-auto w-max rounded-full p-2">
          <TopArrow className="dark:text-white text-primry-White" stroke="currentColor" />
        </div>
        <div className="mx-12 mt-10 flex items-center justify-between rounded-lg bg-main-orange px-12 py-4">
          <h3 className="text-white">
            در خصوص سفارش خدمات نیاز به راهنمایی دارید؟
          </h3>
          <div className="flex items-center gap-2">
            <button className="bg-field6 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-black dark:bg-main-dark dark:text-white">
              <span>پشتیبانی آنلاین</span>
              <WhatsApp className="dark:text-white" fill="currentColor" />
              {/* <ImageTag src="whatsApp" width={33} height={33} /> */}
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-black">
              <span>021-4256</span>
              <ImageTag src="tel" width={33} height={33} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
