import ImageTag from "@/components/element/ImageTag";
import React from "react";

function ForthSection() {
  return (
    <div className="bg-field3 mt-5 flex  items-center justify-between px-16 py-3">
      <p className="text-sm text-white">
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
  );
}

export default ForthSection;
