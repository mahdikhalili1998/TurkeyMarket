
import Email from "@/components/icon/Email";
import FooterTel from "@/components/icon/FooterTel";
import Location from "@/components/icon/Location";
import React from "react";

function ThirdSection() {
  return (
    <div className="hidden items-center justify-between gap-[160px] xl:flex">
      <ul className="flex cursor-pointer flex-col items-start gap-3 font-semibold xl:text-base">
        <li className="border-r-[3px] border-solid border-main-orange px-[10px] font-bold hover:text-main-orange">
          لینک های مهم
        </li>
        <li className="hover:text-main-orange">رهگیری مرسولات</li>
        <li className="hover:text-main-orange">سوالات متداول</li>
        <li className="hover:text-main-orange">قوانین و مقررات</li>
        <li className="hover:text-main-orange">درباره ما</li>
      </ul>
      <ul className="flex cursor-pointer flex-col items-start gap-3 font-semibold xl:text-base">
        <li className="border-r-[3px] border-solid border-main-orange px-[10px] font-bold hover:text-main-orange">
          لینک های مهم
        </li>
        <li className="hover:text-main-orange">رهگیری مرسولات</li>
        <li className="hover:text-main-orange">سوالات متداول</li>
        <li className="hover:text-main-orange">قوانین و مقررات</li>
        <li className="hover:text-main-orange">درباره ما</li>
      </ul>
      <ul className="flex cursor-pointer flex-col items-start gap-3 font-semibold xl:text-base">
        <li className="border-r-[3px] border-solid border-main-orange px-[10px] font-bold hover:text-main-orange">
          لینک های مهم
        </li>
        <li className="hover:text-main-orange">رهگیری مرسولات</li>
        <li className="hover:text-main-orange">سوالات متداول</li>
        <li className="hover:text-main-orange">قوانین و مقررات</li>
        <li className="hover:text-main-orange">درباره ما</li>
      </ul>
      {/* ادرس و واتس آپ و ساعت کاری */}
      <ul className="flex flex-col gap-5 rounded-md bg-field6 p-4 font-semibold text-text-color xl:text-sm">
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-main-orange px-[10px] font-bold">
          <Location width={20} height={21} stroke="currentColor" />
          <span>آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)</span>
        </li>
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-main-orange px-[10px] font-bold">
          <FooterTel width={20} height={21} stroke="currentColor" />
          <span>شماره تماس :۰۲۱-۲۱۲۳۴ - ۲۱۲۴۱</span>
        </li>
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-main-orange px-[10px] font-bold">
          <Email width={20} height={21} stroke="currentColor" />
          <span>آدرس ایمیل: sales@tntiran.com</span>
        </li>
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-main-orange px-[10px] font-bold">
          <span>شنبه تا چهارشنبه: 8 الی 16 - پنجشنبه: 8 الی 13</span>
        </li>
      </ul>
    </div>
  );
}

export default ThirdSection;
