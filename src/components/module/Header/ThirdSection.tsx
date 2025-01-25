"use client";
import HomeIcon from "../../../../public/icon/home.svg";
import Earth from "../../../../public/icon/earth.svg";
import Sell from "../../../../public/icon/sell.svg";
import Insurance from "../../../../public/icon/insurance.svg";
import Scaner from "../../../../public/icon/scaner.svg";
import BBasket from "../../../../public/icon/basket2.svg";
import DownArrow from "@/components/icon/DownArrow";

function ThirdSection() {
  return (
    <div className="hidden border-[#D8D8DA] px-14 py-4 text-text-color dark:bg-main-dark xl:flex xl:w-full xl:items-center xl:justify-between xl:border-b-[1px] xl:border-solid xl:bg-field6 xl:px-[100px] xl:py-4 dark:xl:border-none">
      <ul className="flex items-center justify-end gap-3">
        {/* خانه */}
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
        <li className="group flex cursor-pointer items-center gap-2">
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
        <li className="border-r-1px border-strokColor group flex cursor-pointer items-center gap-[6px] border-solid pr-3">
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
