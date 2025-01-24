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
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center justify-around gap-4 bg-white text-sm dark:bg-dark-bg xl:w-full xl:justify-between xl:gap-4 xl:px-16">
        <div className="flex items-center gap-2">
          <div className="hidden xl:block">
            <Basket height={38} width={49} />
          </div>
          <div className="rounded-md bg-field6 p-3 xl:hidden">
            <Menu2 />
          </div>
          <div className="xl:hidden">
            <Basket height={31} width={40} />
          </div>
          <div className="xl:hidden">
            <BazarTurky />
          </div>
          <div className="hidden rounded-md bg-field6 p-2 dark:bg-main-dark xl:block">
            <Menu3 />
          </div>
        </div>
        {/* سرچ باکس */}
        <div className="hidden w-2/3 rounded-lg bg-field6 p-3 dark:bg-main-dark xl:flex xl:gap-2">
          <ImageTag src="search" width={24} height={24} />
          <input
            placeholder="کالای  خود را جستجو کنید "
            className="bg-transparent focus:outline-none dark:text-white placeholder:dark:text-white"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {/* ماه و زنگوله و منو */}
        <div className="flex items-center gap-2 xl:gap-4">
          <div className="hidden text-[#4D4D4D] hover:text-main-orange dark:text-white dark:hover:text-main-orange xl:block">
            <Bell stroke="currentColor" width={24} height={24} />
          </div>
          <div className="text-[#4D4D4D] hover:text-main-orange dark:text-white dark:hover:text-main-orange xl:hidden">
            <Bell stroke="currentColor" width={20} height={20} />
          </div>
          {/* <ImageTag src="bell" width={24} height={24} /> */}
          <span
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center border-l-2 border-r-2 border-solid border-gray-300 px-2 xl:px-4"
          >
            {darkMode ? (
              <Sun
                className="text-[#4D4D4D] hover:text-main-orange dark:text-white dark:hover:text-main-orange"
                stroke="currentColor"
                fill="currentColor"
              />
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
            <button className="flex items-center justify-center gap-1 rounded-lg bg-main-orange p-2 px-6 text-white">
              <ImageTag src="logIn" width={24} height={24} />
              <span>ورود</span>
            </button>
            <button className="flex items-center justify-center gap-1 rounded-lg border-2 border-solid border-main-orange p-2 px-4 text-main-orange">
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
