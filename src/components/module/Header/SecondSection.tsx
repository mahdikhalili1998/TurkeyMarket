"use client";
import ImageTag from "@/components/element/ImageTag";
import { useEffect, useState } from "react";
import Sun from "../../../../public/icon/sun.svg";
import Basket from "@/components/icon/Basket";
import Menu1 from "@/components/icon/Menu1";
import Menu2 from "@/components/icon/Menu2";
import BazarTurky from "@/components/icon/BazarTurky";
import Bell from "@/components/icon/Bell";
import Moon from "@/components/icon/Moon";
import Menu3 from "@/components/icon/Menu3";

function SecondSection() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, [darkMode]);

  return (
    <div className="flex w-full flex-col items-center gap-3 pb-4 xl:px-[100px] xl:py-4">
      <div className="flex items-center justify-around gap-4 bg-white text-sm dark:bg-dark-bg xl:w-full xl:justify-between xl:gap-4">
        {/* بسکت و منو */}
        <div className="flex items-center gap-2 xl:gap-4">
          <div className="hidden xl:block">
            <Basket height={38} width={49} />
          </div>
          {/* برای موبایل */}
          <div className="rounded-md bg-field6 p-3 dark:bg-main-dark xl:hidden">
            <Menu2 />
          </div>
          {/* برای موبایل */}
          <div className="xl:hidden">
            <Basket height={31} width={40} />
          </div>
          {/* برای موبایل */}
          <div className="dark:text-white xl:hidden">
            <BazarTurky width={125} height={15} stroke="currentColor" />
          </div>
          <div className="hidden rounded-md bg-field6 p-2 dark:bg-main-dark xl:block">
            <Menu3 />
          </div>
        </div>
        {/* سرچ باکس */}
        <div className="hidden w-2/3 rounded-lg bg-field6 p-3 dark:bg-main-dark xl:flex xl:gap-[10px]">
          <ImageTag src="search" width={24} height={24} />
          <input
            placeholder="کالای  خود را جستجو کنید "
            className="bg-transparent font-normal placeholder:text-sm placeholder:text-text-color focus:outline-none dark:text-white placeholder:dark:text-white"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {/* ماه و زنگوله و منو */}
        <div className="flex items-center gap-2 dark:bg-dark-bg xl:gap-4">
          <div className="hidden text-[#4D4D4D] hover:text-main-orange dark:text-white dark:hover:text-main-orange xl:block">
            <Bell stroke="currentColor" width={24} height={24} />
          </div>
          <div className="text-[#4D4D4D] hover:text-main-orange dark:text-white dark:hover:text-main-orange xl:hidden">
            <Bell stroke="currentColor" width={20} height={20} />
          </div>
          {/* <ImageTag src="bell" width={24} height={24} /> */}
          <span
            onClick={() => setDarkMode(!darkMode)}
            className="border-strokColor flex items-center border-l-[1px] border-r-[1px] border-solid px-2 xl:px-4"
          >
            {darkMode ? (
              <div>
                <div className="text-white hover:text-main-orange dark:hover:text-main-orange xl:hidden">
                  <Sun height={20} width={20} stroke="currentColor" />
                </div>
                <div className="hidden text-white hover:text-main-orange dark:hover:text-main-orange xl:block">
                  <Sun height={31} width={30} stroke="currentColor" />
                </div>
              </div>
            ) : (
              <div>
                <div className="text-[#4D4D4D] hover:text-main-orange dark:hover:text-main-orange xl:hidden">
                  <Moon height={20} width={20} stroke="currentColor" />
                </div>
                <div className="hidden text-[#4D4D4D] hover:text-main-orange dark:hover:text-main-orange xl:block">
                  <Moon height={24} width={24} stroke="currentColor" />
                </div>
              </div>
            )}
          </span>
          <div className="xl:hidden">
            <Menu1 />
          </div>
          {/* دکمه های عضویت/ورود */}
          <div className="hidden gap-2 xl:flex xl:items-center">
            <button className="flex items-center justify-center gap-[6px] rounded-md bg-main-orange px-1 py-2 font-semibold text-white xl:text-sm">
              <ImageTag src="logIn" width={24} height={24} />
              <span>ورود</span>
            </button>
            <button className="flex items-center justify-center gap-[6px] rounded-md border-2 border-solid border-main-orange p-2 font-semibold text-main-orange xl:text-sm">
              <ImageTag src="user" width={24} height={24} />
              <span> عضویت</span>
            </button>
          </div>
        </div>
      </div>
      {/* سرچ باکس ریسپانسیو */}
      <div className="flex w-[335px] gap-3 rounded-lg bg-field6 p-3 dark:bg-main-dark xl:hidden">
        <ImageTag src="search" width={24} height={24} />
        <input
          placeholder="کالای  خود را جستجو کنید "
          className="bg-transparent placeholder:text-text-color focus:outline-none dark:text-white placeholder:dark:text-white"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SecondSection;
