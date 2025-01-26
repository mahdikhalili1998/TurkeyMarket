"use client";
import HomeIcon from "../../../../public/icon/home.svg";
import Earth from "../../../../public/icon/earth.svg";
import Sell from "../../../../public/icon/sell.svg";
import Insurance from "../../../../public/icon/insurance.svg";
import Scaner from "../../../../public/icon/scaner.svg";
import BBasket from "../../../../public/icon/basket2.svg";
import DownArrow from "@/components/icon/DownArrow";
import { useState } from "react";
import KalaKhorde from "@/components/icon/KalaKhorde";
import KalayOmde from "@/components/icon/KalayOmde";
import RightArrow from "@/components/icon/RightArrow";
import TopArrow from "@/components/icon/TopArrow";
import RanExpressHeader from "@/components/icon/RanExpressHeader";
import Seller from "@/components/icon/Seller";

function ThirdSection() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [optionHover, setOptionHover] = useState<boolean>(false);
  const [optionName, setOptionName] = useState<string>("");

  // console.log(optionName);

  const handleHover = (state: boolean, text: string) => {
    setOptionHover(state);
    if (state) {
      setOptionName(text);
    } else {
      setOptionName("");
    }
  };

  return (
    <div className="hidden border-[#D8D8DA] px-14 py-4 text-text-color dark:bg-main-dark xl:relative xl:flex xl:h-[66px] xl:w-full xl:items-center xl:justify-between xl:border-b-[1px] xl:border-solid xl:bg-field6 xl:px-[100px] xl:py-0 dark:xl:border-none">
      <ul className="flex items-center justify-end gap-3 xl:h-full">
        <li className="group flex cursor-pointer items-center gap-2">
          <HomeIcon
            className="group-dark-hover:text-main-orange group-hover:text-main-orange dark:text-white"
            stroke="currentColor"
          />
          <span className="group-dark-hover:text-main-orang mt-[2px] text-sm font-semibold group-hover:text-main-orange dark:text-white">
            خانه
          </span>
        </li>
        {/* بخش های سایت */}
        <li
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group flex cursor-pointer items-center gap-2 xl:h-full"
        >
          <Earth
            className="group-dark-hover:text-main-orange group-hover:text-main-orange dark:text-white"
            stroke="currentColor"
          />
          <span className="group-dark-hover:text-main-orange font-semibold group-hover:text-main-orange dark:text-white xl:text-sm">
            بخش های سایت
          </span>
          <div className="group-dark-hover:text-main-orange text-text-color group-hover:text-main-orange dark:text-white">
            <DownArrow width={24} height={24} stroke="currentColor" />
          </div>
          {/* سکشن باز شده */}
          {isHovered && (
            <div className="absolute z-20 items-start justify-start rounded-b-[9px] bg-white dark:bg-dark-bg xl:right-24 xl:top-[65px] xl:flex xl:h-[168px] xl:w-[484px] xl:p-3">
              <ul className="border-l-[1px] border-solid border-field6 xl:flex xl:flex-col xl:gap-3">
                {/* کالای خورده */}
                <li
                  onMouseEnter={() => handleHover(true, "khorde")}
                  className="custom-parent flex cursor-pointer items-center text-text-color xl:gap-[11px] xl:px-3"
                >
                  {/* آیکون */}
                  <span className="custom-child text-text-color dark:text-white">
                    <KalaKhorde width={20} height={20} stroke="currentColor" />
                  </span>
                  <span className="custom-child text-sm font-semibold text-text-color dark:text-white">
                    کالای خورده
                  </span>
                  <span className="custom-child text-text-color dark:text-white">
                    {optionName === "khorde" && optionHover ? (
                      <RightArrow
                        width={24}
                        height={24}
                        stroke="currentColor"
                      />
                    ) : (
                      <TopArrow width={24} height={24} stroke="currentColor" />
                    )}
                  </span>
                </li>
                {/* کالای عمده */}
                <li
                  onMouseEnter={() => handleHover(true, "omde")}
                  className="custom-parent flex cursor-pointer items-center text-text-color xl:gap-[11px] xl:px-3"
                >
                  {/* آیکون */}
                  <span className="custom-child text-text-color dark:text-white">
                    <KalayOmde width={20} height={20} stroke="currentColor" />
                  </span>
                  <span className="custom-child text-sm font-semibold text-text-color dark:text-white">
                    کالای عمده
                  </span>
                  <span className="custom-child text-text-color dark:text-white">
                    {optionName === "omde" && optionHover ? (
                      <RightArrow
                        width={24}
                        height={24}
                        stroke="currentColor"
                      />
                    ) : (
                      <TopArrow width={24} height={24} stroke="currentColor" />
                    )}
                  </span>
                </li>
                {/* ran express */}
                <li
                  onMouseEnter={() => handleHover(true, "express")}
                  className="custom-parent flex cursor-pointer items-center text-text-color xl:gap-[7px] xl:px-3"
                >
                  {/* آیکون */}
                  <span className="custom-child text-text-color dark:text-white">
                    <RanExpressHeader
                      width={20}
                      height={20}
                      stroke="currentColor"
                    />
                  </span>
                  <span className="custom-child text-sm font-semibold text-text-color dark:text-white">
                    Ran Express
                  </span>
                  <span className="custom-child text-text-color dark:text-white">
                    {optionName === "express" && optionHover ? (
                      <RightArrow
                        width={24}
                        height={24}
                        stroke="currentColor"
                      />
                    ) : (
                      <TopArrow width={24} height={24} stroke="currentColor" />
                    )}
                  </span>
                </li>
                {/* فروشندگان */}
                <li
                  onMouseEnter={() => handleHover(true, "seller")}
                  className="custom-parent flex cursor-pointer items-center text-text-color xl:gap-[9px] xl:px-3"
                >
                  {/* آیکون */}
                  <span className="custom-child text-text-color dark:text-white">
                    <Seller width={20} height={20} stroke="currentColor" />
                  </span>
                  <span className="custom-child text-sm font-semibold text-text-color dark:text-white">
                    فروشندگان
                  </span>
                  <span className="custom-child text-text-color dark:text-white">
                    {optionName === "seller" && optionHover ? (
                      <RightArrow
                        width={24}
                        height={24}
                        stroke="currentColor"
                      />
                    ) : (
                      <TopArrow width={24} height={24} stroke="currentColor" />
                    )}
                  </span>
                </li>
              </ul>

              {optionName === "khorde" ? (
                <ul className="flex flex-col justify-start gap-[14px] pr-4 text-text-color dark:text-white">
                  <li className="font-semibold hover:text-main-orange xl:text-sm">
                    ثبت لینک خرید{" "}
                  </li>
                  <li className="font-semibold hover:text-main-orange xl:text-sm">
                    فروشگاه خورده
                  </li>
                </ul>
              ) : null}
              {optionName === "omde" ? (
                <ul className="flex flex-col justify-start gap-[14px] pr-4 text-text-color dark:text-white">
                  <li className="font-semibold hover:text-main-orange xl:text-sm">
                    ثبت لینک عمده
                  </li>
                  <li className="font-semibold hover:text-main-orange xl:text-sm">
                    فروشگاه عمده
                  </li>
                </ul>
              ) : null}
              {optionName === "express" ? (
                <ul className="flex flex-col justify-start gap-[14px] pr-4 text-text-color dark:text-white">
                  <li className="font-semibold hover:text-main-orange xl:text-sm">
                    مدیر فروش
                  </li>
                  <li className="font-semibold hover:text-main-orange xl:text-sm">
                    Ran Express
                  </li>
                </ul>
              ) : null}
              {optionName === "seller" ? (
                <ul className="flex flex-col justify-start gap-[14px] pr-4 text-text-color dark:text-white">
                  <li className="font-semibold hover:text-main-orange xl:text-sm">
                    نفرات برتر
                  </li>
                  <li className="font-semibold hover:text-main-orange xl:text-sm">
                    فروشندگان اصلی
                  </li>
                </ul>
              ) : null}
            </div>
          )}
        </li>
        {/* فروشنده شوید */}
        <li className="group flex cursor-pointer items-center gap-1">
          <Sell
            className="group-dark-hover:text-main-orang group-hover:text-main-orange dark:text-white"
            stroke="currentColor"
          />
          <span className="group-dark-hover:text-main-orange font-semibold group-hover:text-main-orange dark:text-white xl:text-sm">
            فروشنده شوید
          </span>
        </li>
        {/* نماینده شوید */}
        <li className="flex cursor-pointer items-center gap-1 rounded-sm bg-main-orange p-1 px-[5px] py-2 text-white">
          <Insurance className="dark:text-white" stroke="currentColor" />
          <span className="font-semibold dark:text-white xl:text-sm">
            نماینده شوید
          </span>
        </li>
        {/* سبد خرید و پیگیری سفارش */}
      </ul>
      <ul className="flex gap-3">
        <li className="group flex cursor-pointer items-center gap-[6px]">
          <Scaner
            className="group-dark-hover:text-main-orang group-hover:text-main-orange dark:text-white"
            fill="currentColor"
          />
          <span className="group-dark-hover:text-main-orang font-semibold group-hover:text-main-orange dark:text-white xl:text-sm">
            پگیری سفارشات
          </span>
        </li>
        <li className="border-r-1px group flex cursor-pointer items-center gap-[6px] border-solid border-strokColor pr-3">
          <BBasket
            className="group-dark-hover:text-main-orang group-hover:text-main-orange dark:text-white"
            stroke="currentColor"
          />
          <span className="group-dark-hover:text-main-orang font-semibold group-hover:text-main-orange dark:text-white xl:text-sm">
            سبد خرید
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ThirdSection;
