import ImageTag from "@/components/element/ImageTag";
import LeftArrow from "@/components/icon/LeftArrow";
import React from "react";

function ForthSection() {
  return (
    <div>
      <div className="mt-5 hidden items-center justify-between bg-field3 px-16 py-3 xl:mx-[30px] xl:flex">
        <p className="text-base text-white">
          تمامی حقوق مادی و معنوی این سایت متعلق به سایت{" "}
          <span className="text-main-orange">ران اکسپرس</span> می باشد.
        </p>
        <ul className="flex items-center gap-3">
          <li className="rounded-xl bg-white p-2">
            <ImageTag src="w" height={20} width={20} />
          </li>
          <li className="rounded-xl bg-white p-2">
            <ImageTag src="t" height={20} width={20} />
          </li>{" "}
          <li className="rounded-xl bg-white p-2">
            <ImageTag src="i" height={20} width={20} />
          </li>{" "}
          <li className="rounded-xl bg-white p-2">
            <ImageTag src="f" height={20} width={20} />
          </li>
        </ul>
      </div>
      {/* شبکه اجتماعی */}
      <div className="mx-4 mt-3 flex items-center justify-between gap-3 rounded-md bg-field6 p-2 px-3 text-text-color dark:bg-[#404248] dark:text-white">
        <span className="text-xs font-semibold">شبکه های اجتماعی</span>
        <LeftArrow width={22} height={22} stroke="currentColor" />
      </div>
      {/* فوتر  پایانی ریسپانسیو شده */}
      <div className="mt-3 bg-field6 p-4 xl:hidden">
        <p className="mx-auto w-max text-xs font-semibold">
          تمامی حقوق این سایت متعلق به سایت{" "}
          <span className="text-primry-White">ران اکسپرس</span> می باشد.
        </p>
      </div>
    </div>
  );
}

export default ForthSection;
