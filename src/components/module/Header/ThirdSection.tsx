"use client";

import React from "react";
import ForthSection from "./ForthSection";
import HomeIcon from "../../../../public/icon/home.svg";
import Earth from "../../../../public/icon/earth.svg";
import Sell from "../../../../public/icon/sell.svg";
import Insurance from "../../../../public/icon/insurance.svg";
import Scaner from "../../../../public/icon/scaner.svg";
import BBasket from "../../../../public/icon/basket2.svg";

function ThirdSection() {
  return (
    <div className="w-full bg-field6 text-sm font-semibold text-text-color dark:divide-dark-bg xl:divide-y-2 xl:divide-gray-300">
      <div className="hidden items-center justify-between px-14 py-4 dark:bg-main-dark xl:flex">
        <ul className="flex items-center gap-3">
          <li className="group flex cursor-pointer items-center gap-1">
            <HomeIcon
              className="group-dark-hover:text-main-orange group-hover:text-main-orange dark:text-white"
              stroke="currentColor"
            />
            <span className="group-dark-hover:text-main-orang mt-[2px] text-sm group-hover:text-main-orange dark:text-white">
              خانه
            </span>
          </li>
          <li className="group flex cursor-pointer items-center gap-1">
            <Earth
              className="group-dark-hover:text-main-orange group-hover:text-main-orange dark:text-white"
              stroke="currentColor"
            />
            <select
              id="language"
              name="language"
              className="group-dark-hover:text-main-orange t bg-transparent group-hover:text-main-orange dark:text-white"
            >
              <option value="fa"> بخش های سایت</option>
            </select>
          </li>
          <li className="group flex cursor-pointer items-center gap-1">
            <Sell
              className="group-dark-hover:text-main-orang group-hover:text-main-orange dark:text-white"
              stroke="currentColor"
            />
            <span className="group-dark-hover:text-main-orange mt-[2px] group-hover:text-main-orange dark:text-white">
              فروشنده شوید
            </span>
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-sm bg-main-orange p-1 text-white">
            <Insurance className="dark:text-white" stroke="currentColor" />
            <span className="mt-[2px] dark:text-white">نماینده شوید</span>
          </li>
        </ul>
        <ul className="flex gap-3">
          <li className="group flex cursor-pointer items-center gap-1">
            <Scaner
              className="group-dark-hover:text-main-orang group-hover:text-main-orange dark:text-white"
              fill="currentColor"
            />
            <span className="group-dark-hover:text-main-orang mt-[2px] group-hover:text-main-orange dark:text-white">
              پگیری سفارشات
            </span>
          </li>
          <li className="group flex cursor-pointer items-center gap-1 border-r-2 border-solid border-gray-300 pr-3">
            <BBasket
              className="group-dark-hover:text-main-orang group-hover:text-main-orange dark:text-white"
              stroke="currentColor"
            />
            <span className="group-dark-hover:text-main-orang mt-[2px] group-hover:text-main-orange dark:text-white">
              سبد خرید
            </span>
          </li>
        </ul>
      </div>{" "}
      <ForthSection />
    </div>
  );
}

export default ThirdSection;
