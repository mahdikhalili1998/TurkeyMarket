import Image from "next/image";
import React from "react";
import ImageTag from "../element/ImageTag";
import { FaAngleLeft } from "react-icons/fa6";

function SendProduct() {
  return (
    <div className="relative flex h-min items-center bg-main-orange px-12 py-14">
      <div className="mr-4 text-white">
        <h2 className="mb-5 text-lg font-bold">ارسال محصول</h2>
        <p className="text-sm">
          پست سریع بین المللی Ran Express ایران با بیش از 40 سال تجربه،
          مجموعه‌ای کامل از <br />
          خدمات ارسال سریع و مطمئن را به سراسر جهان ارائه می‌دهد.
        </p>
        <button className="mt-5 flex items-center gap-2 rounded-lg bg-white p-3 text-sm font-semibold text-main-orange">
          <ImageTag src="calculater" width={24} height={24} />
          <span> بررسی بر آورد هزینه </span>
          <FaAngleLeft className="text-main-orange" />
        </button>
      </div>
      <div className="absolute left-6 mr-auto sm:-top-8">
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
