"use client";

import Location from "../../../../public/icon/location.svg";
import Letter from "../../../../public/icon/letter2.svg";
import Tel from "../../../../public/icon/tel2.svg";

function SecondSection() {
  return (
    <div className="flex justify-center bg-white text-text-color dark:bg-field3 dark:text-white xl:mx-16 xl:mt-16 xl:justify-between">
      <ul className="hidden flex-col items-start gap-2 text-sm dark:text-white xl:flex">
        <li className="cursor-pointer border-r-2 border-solid border-main-orange pr-2 font-semibold hover:text-main-orange">
          دسترسی سریع
        </li>
        <li className="cursor-pointer hover:text-main-orange">
          رهگیری مرسولات
        </li>
        <li className="cursor-pointer hover:text-main-orange">سوالات متداول</li>
        <li className="cursor-pointer hover:text-main-orange">
          قوانین و مقررات
        </li>
        <li className="cursor-pointer hover:text-main-orange"> در باره ما</li>
      </ul>
      <ul className="hidden flex-col items-start gap-2 text-sm dark:text-white xl:flex">
        <li className="cursor-pointer border-r-2 border-solid border-main-orange pr-2 font-semibold hover:text-main-orange">
          لینک های مهم{" "}
        </li>
        <li className="cursor-pointer hover:text-main-orange">صفحه اصلی</li>
        <li className="cursor-pointer hover:text-main-orange">فروشگاه</li>
        <li className="cursor-pointer hover:text-main-orange">فروشنده شوید</li>
        <li className="cursor-pointer hover:text-main-orange">وبلاگ</li>
      </ul>
      <ul className="hidden flex-col items-start gap-2 text-sm dark:text-white xl:flex">
        <li className="cursor-pointer border-r-2 border-solid border-main-orange pr-2 font-semibold hover:text-main-orange">
          لینک های مهم{" "}
        </li>
        <li className="cursor-pointer hover:text-main-orange">صفحه اصلی</li>
        <li className="cursor-pointer hover:text-main-orange">فروشگاه</li>
        <li className="cursor-pointer hover:text-main-orange">فروشنده شوید</li>
        <li className="cursor-pointer hover:text-main-orange">وبلاگ</li>
      </ul>
      <ul className="space-y-3 mt-3 rounded-lg bg-field6 p-5 px-9 text-xs font-semibold dark:bg-field2 dark:text-white xl:p-4 xl:text-sm">
        <li className="flex items-center gap-2 border-r-2 border-solid border-main-orange pr-2 text-xs">
          <Location className="dark:text-white" stroke="currentColor" />
          {/* <ImageTag src="location" width={20} height={20} /> */}
          <span>آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)</span>
        </li>
        <li className="flex items-center gap-2 border-r-2 border-solid border-main-orange pr-2 text-xs">
          <Tel className="dark:text-white" stroke="currentColor" />
          {/* <ImageTag src="tel2" width={20} height={20} /> */}
          <span>شماره تماس :۰۲۱-۲۱۲۳۴ - ۲۱۲۴۱</span>
        </li>
        <li className="flex items-center gap-2 border-r-2 border-solid border-main-orange pr-2 text-xs">
          <Letter className="dark:text-white" stroke="currentColor" />
          {/* <ImageTag src="letter2" width={20} height={20} /> */}
          <span>آدرس ایمیل: sales@tntiran.com</span>
        </li>
        <li className="text-xs">
          شنبه تا چهارشنبه: 8 الی 16 - پنجشنبه: 8 الی 13
        </li>
      </ul>
    </div>
  );
}

export default SecondSection;
