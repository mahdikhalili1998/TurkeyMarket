"use client";
import DownArrow from "@/components/icon/DownArrow";
import Turky from "@/components/icon/Turky";
import { countries } from "@/constant/countryData";
import { IInpuFill } from "@/types/state";
import React, { useState, useRef, useEffect } from "react";

function Country({ setUserDetail, userCountry }: IInpuFill) {
  const [countryFlag, setCountryFlag] = useState(
    <Turky width={30} height={20} />,
  );
  const [openModal, setOpenModal] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [noResults, setNoResults] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserDetail((prev: any) => ({ ...prev, contry: e.target.value }));
    const filtered = countries.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredCountries(filtered);
    setNoResults(filtered.length === 0);
    setOpenModal(true);
  };

  return (
    <div className="flex flex-col items-start gap-[17px] text-xs">
      <label className="font-bold xl:text-base" htmlFor="country">
        کشور :
      </label>
      <div className="relative flex w-full items-center rounded-lg border-[1px] border-solid border-border-color px-4 py-[17px] dark:border-main-dark">
        <input
          type="text"
          value={userCountry}
          onChange={handleInputChange}
          id="country"
          className="w-full text-sm font-normal text-text-color focus:outline-none dark:bg-transparent"
        />
        <div
          onClick={() => setOpenModal((prev) => !prev)}
          className="flex cursor-pointer items-center gap-1 text-border-color"
        >
          {countryFlag}
          <DownArrow width={24} height={24} stroke="currentColor" />
        </div>
        {openModal && (
          <div
            ref={modalRef}
            className="absolute left-3 top-14 z-10 w-40 space-y-4 overflow-hidden rounded-lg bg-white p-3 shadow-lg dark:bg-darkMoodBg"
          >
            <div
              className="scrollbar-hidden touch-scroll max-h-32 overflow-y-auto"
              style={{
                WebkitOverflowScrolling: "touch", // فعال‌سازی اسکرول لمسی
                touchAction: "pan-y", // فعال کردن اسکرول عمودی
              }}
            >
              {noResults ? (
                <div className="p-2 text-center text-sm text-gray-500 dark:text-white">
                  کشوری یافت نشد
                </div>
              ) : (
                filteredCountries.map((item) => (
                  <div
                    className="flex cursor-pointer items-center justify-around p-2 hover:bg-gray-100 dark:bg-darkMoodBg dark:hover:bg-main-orange"
                    key={item.code}
                    onClick={() => {
                      setUserDetail((prev: any) => ({
                        ...prev,
                        contry: item.name,
                      }));
                      setCountryFlag(item.flag); // تغییر پرچم
                      setOpenModal(false);
                    }}
                  >
                    {item.flag}
                    {item.name}
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
