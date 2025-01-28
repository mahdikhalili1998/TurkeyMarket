"use client";
import Turky from "@/components/icon/Turky";
import { countries } from "@/constant/countryData";
import { IInpuFill } from "@/types/state";
import React, { useState, useRef, useEffect } from "react";

function Country({ setUserDetail, userPhoneNumber, nextStep }: IInpuFill) {
  const [code, setCode] = useState("90+");
  const [countryFlag, setCountryFlag] = useState(
    <Turky width={30} height={20} />,
  );
  const [openModal, setOpenModal] = useState(false);
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

  return (
    <div className="xl:-w-[434px] flex w-full flex-col items-start gap-2 text-xs xl:gap-[17px]">
      <label className="font-bold xl:text-base" htmlFor="phoneNumber">
        شماره تماس:
      </label>
      <div
        className={`${nextStep && userPhoneNumber === "" ? "border-red-500" : "border-border-color dark:border-main-dark"} relative flex w-full items-center rounded-lg border-[1px] border-solid border-border-color px-4 py-[17px] xl:w-[434px] xl:gap-2`}
      >
        <input
          type="text"
          value={userPhoneNumber}
          onChange={(e) =>
            setUserDetail((prev: any) => ({
              ...prev,
              phoneNumber: e.target.value,
            }))
          }
          id="phoneNumber"
          placeholder="0912xxx2121"
          className="w-full text-left text-sm font-normal placeholder:pl-2 placeholder:text-left placeholder:text-gray-300 focus:outline-none dark:bg-transparent"
        />
        <div
          onClick={() => setOpenModal((prev) => !prev)}
          className="flex cursor-pointer items-center gap-1 border-r-[1px] border-solid border-border-color pr-1 text-border-color"
        >
          <span className="font-normal text-text-color dark:text-white xl:text-sm">
            {code}
          </span>
          {countryFlag}
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
              {countries.map((item) => (
                <div
                  className="flex cursor-pointer items-center justify-around p-2 hover:bg-gray-100 dark:bg-darkMoodBg dark:hover:bg-main-orange"
                  key={item.code}
                  onClick={() => {
                    setCode(item.code);
                    setCountryFlag(item.flag); // تغییر پرچم
                    setOpenModal(false);
                  }}
                >
                  {item.flag}
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <span
        className={`${nextStep && userPhoneNumber === "" ? "block" : "hidden"} -mt-1 mb-2 ml-auto h-1 text-xs font-semibold text-red-500 xl:-mt-3`}
      >
        پر کردن این فیلد اجباری است
      </span>
    </div>
  );
}

export default Country;
