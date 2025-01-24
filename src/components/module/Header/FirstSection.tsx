import ImageTag from "@/components/element/ImageTag";
import React from "react";

function FirstSection() {
  return (
    <div className="flex w-full items-center justify-between bg-main-dark px-4 xl:px-12 py-3">
      <p className="text-xs text-white">به وبسایت بازار ترکیه خوش آمدید</p>
      <div className="flex gap-3">
        <select
          id="language"
          name="language"
          className="bg-main-dark text-xs text-white"
        >
          <option value="fa"> فارسی / تومان</option>
        </select>
        <ImageTag src="flag" width={30} height={20} />
      </div>
    </div>
  );
}

export default FirstSection;
