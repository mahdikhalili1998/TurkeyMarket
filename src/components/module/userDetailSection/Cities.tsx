"use client";
import DownArrow from "@/components/icon/DownArrow";
import { cities } from "@/constant/countryData";
import { IInpuFill } from "@/types/state";
import React, { useState, useRef, useEffect } from "react";

function Country({ setUserDetail, userCity }: IInpuFill) {
  const [openModal, setOpenModal] = useState(false);
  const [filteredCity, setFilteredCity] = useState(cities);
  const [noResults, setNoResults] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden"; // جلوگیری از اسکرول صفحه اصلی
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserDetail((prev: any) => ({ ...prev, city: value }));

    const filtered = cities.filter((item) =>
      item.cityName.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredCity(filtered);
    setNoResults(filtered.length === 0);
    setOpenModal(true);
  };

  return (
    <div className="flex flex-col items-start gap-[17px] text-xs">
      <label className="font-bold xl:text-base" htmlFor="city">
        شهر :
      </label>
      <div className="relative flex w-full items-center rounded-lg border-[1px] border-solid border-border-color px-4 py-[17px] dark:border-main-dark xl:w-[254px]">
        <input
          type="text"
          value={userCity}
          onChange={handleInputChange}
          id="city"
          className="w-full text-sm font-normal focus:outline-none dark:bg-transparent"
        />
        <div
          onClick={() => setOpenModal((prev) => !prev)}
          className="flex cursor-pointer items-center gap-1 text-border-color"
        >
          <DownArrow width={24} height={24} stroke="currentColor" />
        </div>
        {openModal && (
          <div
            ref={modalRef}
            className="absolute left-3 top-14 z-50 w-40 overflow-hidden rounded-lg bg-white p-3 shadow-lg dark:bg-darkMoodBg"
          >
            <div
              className="scrollbar-hidden max-h-[96px] overflow-y-auto"
              style={{
                WebkitOverflowScrolling: "touch", // اسکرول نرم در موبایل
                touchAction: "pan-y", // جلوگیری از اسکرول کل صفحه
              }}
            >
              {noResults ? (
                <div className="p-2 text-center text-sm text-gray-500 dark:text-white">
                  شهری یافت نشد
                </div>
              ) : (
                filteredCity.map((item, index) => (
                  <div
                    className="flex cursor-pointer items-center justify-around p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-main-orange"
                    key={index}
                    onClick={() => {
                      setUserDetail((prev: any) => ({
                        ...prev,
                        city: item.cityName,
                      }));
                      setOpenModal(false);
                    }}
                  >
                    {item.cityName}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Country;
