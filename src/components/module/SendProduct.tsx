import Image from "next/image";
import React from "react";
import ImageTag from "../element/ImageTag";
import { FaAngleLeft } from "react-icons/fa6";
import BackGroundProduct from "../icon/BackGroundProduct";

function SendProduct() {
  return (
    <div className="relative flex flex-col items-center justify-between bg-main-orange xl:static xl:flex-row">
      {/* بک گراند چارخونه */}
      <div className="right0 absolute top-2 xl:hidden">
        <BackGroundProduct width={625} height={319} />
      </div>
      {/* عکس برای موبایل */}
      <div className="-mt-8 mr-20 xl:hidden">
        <Image
          src="/image/boxesR.png"
          width={800}
          height={800}
          alt="miidle photo"
          priority
          className="h-[219px] w-[278px] grayscale"
        />
      </div>
      {/* متن و چار خونه */}
      <div className="ml-auto mr-5 flex justify-center pb-4 xl:relative xl:w-2/3 xl:items-center xl:overflow-hidden">
        {/* متن */}
        <div className="z-20 flex w-[341px] flex-col gap-3 text-white xl:ml-auto xl:mr-5 xl:pr-[146px]">
          <h2 className="text-xs font-bold xl:text-2xl">ارسال محصول</h2>
          <p className="text-xs font-semibold xl:w-[570px] xl:text-base">
            پست سریع بین المللی Ran Express ایران با بیش از 40 سال تجربه،
            مجموعه‌ای کامل از خدمات ارسال سریع و مطمئن را به سراسر جهان ارائه
            می‌دهد.
          </p>
          <button className="ml-auto flex items-center gap-3 rounded-lg bg-white px-3 py-[17px] text-sm font-semibold text-main-orange">
            <ImageTag src="calculater" width={24} height={24} />
            <span className="text-xs font-bold"> بررسی بر آورد هزینه </span>
            <FaAngleLeft className="text-main-orange" />
          </button>
        </div>
        {/* بک گراند چارخونه */}
        <div className="absolute -top-28 right-4 hidden xl:block">
          <BackGroundProduct width={975} height={669} />
        </div>
      </div>
      {/* عکس دستکتاپ */}
      <div className="-mt-8 hidden sm:-top-8 xl:block">
        <Image
          src="/image/boxes.png"
          width={500}
          height={500}
          alt="miidle photo"
          priority
          className="grayscale"
        />
      </div>
    </div>
  );
}

export default SendProduct;
