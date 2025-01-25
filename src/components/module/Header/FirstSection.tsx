"use client";
import ImageTag from "@/components/element/ImageTag";
import DownArrow from "@/components/icon/DownArrow";
import React, { useState } from "react";
import Language from "./Language";

function FirstSection() {
  const [openSection, setOpenSection] = useState<boolean>(false);
  const changeLanguageHandler = () => {
    setOpenSection((e) => !e);
  };
  return (
    <div className="flex w-full items-center justify-between bg-main-dark px-4 py-3 h-[58px] xl:px-[100px]">
      <p className="text-xs font-semibold text-white xl:text-sm">
        به وبسایت بازار ترکیه خوش آمدید
      </p>
      <div className="relative">
        <div
          onClick={changeLanguageHandler}
          className="flex items-center gap-1 xl:gap-[10px]"
        >
          <div className="text-white">
            <DownArrow width={24} height={24} stroke="currentColor" />
          </div>
          <span className="text-xs font-semibold text-white xl:text-sm">
            ایران / تومان
          </span>
          <ImageTag src="flag" width={30} height={20} />
        </div>
        {openSection ? <Language /> : null}
      </div>
    </div>
  );
}

export default FirstSection;
