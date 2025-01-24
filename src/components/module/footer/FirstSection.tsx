"use client";
import TopArrow from "../../../../public/icon/top.svg";
import WhatsApp from "@/components/icon/WhatsApp";
import TelFooter from "@/components/icon/TelFooter";
import Basket from "@/components/icon/Basket";
import Telegram from "@/components/icon/Telegram";
import Instagram from "@/components/icon/Instagram";
import WhatsAppFooter from "@/components/icon/WhatsAppFooter";
import FaceBook from "@/components/icon/FaceBook";
import FifthSection from "./FifthSection";
function FirstSection() {
  return (
    <div>
      <div className="h-[5rem] w-full bg-field6 pt-8 dark:bg-black xl:h-[8rem] xl:px-4">
        <div className="mx-16 -mb-6 mr-auto hidden w-max rounded-full bg-primry-White/15 p-2 xl:block">
          <TopArrow
            className="text-primry-White dark:text-white"
            stroke="currentColor"
          />
        </div>
        <div className="mx-2 mt-5 flex items-center justify-around rounded-lg bg-main-orange py-3 xl:mx-12 xl:mt-10 xl:justify-between xl:px-12 xl:py-4">
          <h3 className="hidden text-white xl:block">
            در خصوص سفارش خدمات نیاز به راهنمایی دارید؟
          </h3>
          <h3 className="text-xs font-semibold text-white xl:hidden xl:text-lg">
            نیاز به مشاوره دارید ؟
          </h3>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-field6 px-3 py-2 text-sm text-black dark:bg-main-dark dark:text-white">
              <span className="text-xs font-semibold xl:text-base">
                پشتیبانی آنلاین
              </span>
              <div className="dark:text-white xl:hidden">
                <WhatsApp height={13} width={13} stroke="currentColor" />
              </div>
              <div className="hidden dark:text-white xl:block">
                <WhatsApp height={27} width={27} stroke="currentColor" />
              </div>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-black">
              <span className="text-xs font-semibold xl:text-base">
                021-4256
              </span>
              <div className="xl:block">
                <TelFooter height={19} width={19} />
              </div>
              <div className="hidden xl:block">
                <TelFooter height={40} width={40} />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* شرکت حمل و نقل ران اکسپرس */}
      <div className="mt-12 flex flex-col items-center justify-center gap-3 xl:hidden">
        <div>
          <Basket height={22} width={30} />
        </div>
        <span className="text-xs font-semibold">
          شرکت خدمات حمل و نقل ران اکسپرس
        </span>
        <ul className="flex items-center justify-center gap-2">
          <li className="rounded-md bg-field6 p-2">
            <WhatsAppFooter />
          </li>
          <li className="rounded-md bg-field6 p-2">
            <Telegram />
          </li>
          <li className="rounded-md bg-field6 p-2">
            <Instagram />
          </li>
          <li className="rounded-md bg-field6 p-2">
            <FaceBook />
          </li>
        </ul>
      </div>
      {/* ارتباط با ما / لینک مهم / دسترسی سریع */}
      <FifthSection />
    </div>
  );
}

export default FirstSection;
