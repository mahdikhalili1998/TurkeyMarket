"use client";

import Location from "../../../../public/icon/location.svg";
import Letter from "../../../../public/icon/letter2.svg";
import Tel from "../../../../public/icon/tel2.svg";

function SecondSection() {
  return (
    <div className="text-text-color dark:bg-field3 mx-16 mt-16 flex justify-between bg-white dark:text-white">
      <ul className="flex flex-col items-start gap-2 text-sm dark:text-white">
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
      <ul className="flex flex-col items-start gap-2 text-sm dark:text-white">
        <li className="cursor-pointer border-r-2 border-solid border-main-orange pr-2 font-semibold hover:text-main-orange">
          لینک های مهم{" "}
        </li>
        <li className="cursor-pointer hover:text-main-orange">صفحه اصلی</li>
        <li className="cursor-pointer hover:text-main-orange">فروشگاه</li>
        <li className="cursor-pointer hover:text-main-orange">فروشنده شوید</li>
        <li className="cursor-pointer hover:text-main-orange">وبلاگ</li>
      </ul>
      <ul className="flex flex-col items-start gap-2 text-sm dark:text-white">
        <li className="cursor-pointer border-r-2 border-solid border-main-orange pr-2 font-semibold hover:text-main-orange">
          لینک های مهم{" "}
        </li>
        <li className="cursor-pointer hover:text-main-orange">صفحه اصلی</li>
        <li className="cursor-pointer hover:text-main-orange">فروشگاه</li>
        <li className="cursor-pointer hover:text-main-orange">فروشنده شوید</li>
        <li className="cursor-pointer hover:text-main-orange">وبلاگ</li>
      </ul>
      <ul className="bg-field6 dark:bg-field2 space-y-3 rounded-lg p-4 dark:text-white">
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
