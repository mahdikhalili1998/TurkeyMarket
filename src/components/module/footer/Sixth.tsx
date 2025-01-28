"use client";
import DownArrow from "@/components/icon/DownArrow";
import Email from "@/components/icon/Email";
import FaceBook from "@/components/icon/FaceBook";
import FooterTel from "@/components/icon/FooterTel";
import Instagram from "@/components/icon/Instagram";
import LeftArrow from "@/components/icon/LeftArrow";
import Location from "@/components/icon/Location";
import Telegram from "@/components/icon/Telegram";
import WhatsApp from "@/components/icon/WhatsApp";
import { useState } from "react";

function Sixth() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalName, setModalName] = useState<string>("");
  return (
    <div className="space-y-3 xl:hidden">
      <div className="mt-3 flex justify-center gap-3">
        {/* لوگو شبکه های اجتماعی */}
        <ul className="flex items-center gap-[14px] text-text-color xl:gap-6">
          <li className="rounded-[7px] dark:bg-[#404248] bg-field6 p-[6.5px] dark:text-white">
            <WhatsApp width={13} height={13} stroke="currentColor" />
          </li>
          <li className="rounded-[7px] dark:bg-[#404248] bg-field6 p-[6.5px] dark:text-white">
            <Telegram width={13} height={13} stroke="currentColor" />
          </li>
          <li className="rounded-[7px] dark:bg-[#404248] bg-field6 p-[6.5px] dark:text-white">
            <Instagram width={13} height={13} stroke="currentColor" />
          </li>
          <li className="rounded-[7px] dark:bg-[#404248] bg-field6 p-[6.5px] dark:text-white">
            <FaceBook width={13} height={13} stroke="currentColor" />
          </li>
        </ul>
        {/* لینک ها */}
      </div>
      {/* لینک های دسترسی مهم  */}
      <ul className="space-y-3">
        <li className="flex flex-col gap-4">
          <div
            onClick={() => {
              setOpenModal((openModal) => !openModal);
              setModalName("fastLink");
            }}
            className="flex h-[40px] w-full items-center justify-between gap-[11px] rounded bg-field6 px-2 text-xs font-semibold text-text-color dark:bg-[#404248] dark:text-white"
          >
            <span>دسترسی سریع</span>
            {openModal && modalName === "fastLink" ? (
              <DownArrow width={22} height={22} stroke="currentColor" />
            ) : (
              <LeftArrow width={22} height={22} stroke="currentColor" />
            )}
          </div>
          {openModal && modalName === "fastLink" ? (
            <ul className="flex flex-col items-start gap-5 bg-field6 p-5 text-xs font-semibold text-text-color">
              <li className="cursor-pointer hover:text-main-orange">
                رهگیری مرسولات
              </li>
              <li className="cursor-pointer hover:text-main-orange">
                سوالات متدوال
              </li>
              <li className="cursor-pointer hover:text-main-orange">
                قوانین و مقررات
              </li>
              <li className="cursor-pointer hover:text-main-orange">
                درباره ما
              </li>
            </ul>
          ) : null}
        </li>
        <li className="flex flex-col gap-4">
          <div
            onClick={() => {
              setOpenModal((openModal) => !openModal);
              setModalName("importantLink");
            }}
            className="flex h-[40px] w-full items-center justify-between gap-[11px] rounded bg-field6 px-2 text-xs font-semibold text-text-color dark:bg-[#404248] dark:text-white"
          >
            <span>دسترسی سریع</span>
            {openModal && modalName === "importantLink" ? (
              <DownArrow width={22} height={22} stroke="currentColor" />
            ) : (
              <LeftArrow width={22} height={22} stroke="currentColor" />
            )}
          </div>
          {openModal && modalName === "importantLink" ? (
            <ul className="flex flex-col items-start gap-5 bg-field6 p-5 text-xs font-semibold text-text-color">
              <li className="cursor-pointer hover:text-main-orange">
                رهگیری مرسولات
              </li>
              <li className="cursor-pointer hover:text-main-orange">
                سوالات متدوال
              </li>
              <li className="cursor-pointer hover:text-main-orange">
                قوانین و مقررات
              </li>
              <li className="cursor-pointer hover:text-main-orange">
                درباره ما
              </li>
            </ul>
          ) : null}
        </li>
        <li className="flex flex-col gap-4">
          <div
            onClick={() => {
              setOpenModal((openModal) => !openModal);
              setModalName("contact");
            }}
            className="flex h-[40px] w-full items-center justify-between gap-[11px] rounded bg-field6 px-2 text-xs font-semibold text-text-color dark:bg-[#404248] dark:text-white"
          >
            <span>ارتباط با ما</span>
            {openModal && modalName === "contact" ? (
              <DownArrow width={22} height={22} stroke="currentColor" />
            ) : (
              <LeftArrow width={22} height={22} stroke="currentColor" />
            )}
          </div>
          {openModal && modalName === "contact" ? (
            <ul className="flex flex-col items-start gap-5 bg-field6 p-5 text-xs font-semibold text-text-color">
              <li className="cursor-pointer hover:text-main-orange">
                رهگیری مرسولات
              </li>
              <li className="cursor-pointer hover:text-main-orange">
                سوالات متدوال
              </li>
              <li className="cursor-pointer hover:text-main-orange">
                قوانین و مقررات
              </li>
              <li className="cursor-pointer hover:text-main-orange">
                درباره ما
              </li>
            </ul>
          ) : null}
        </li>
      </ul>
      {/* اذرس و ساعت کاری و واتساپ و ... */}
      <ul className="flex flex-col gap-5 rounded-md bg-field6 p-4 text-xs font-semibold text-text-color dark:bg-[#404248] xl:text-sm">
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-main-orange px-[10px] font-bold dark:text-white">
          <Location width={17} height={18} stroke="currentColor" />
          <span>آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)</span>
        </li>
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-main-orange px-[10px] font-bold dark:text-white">
          <FooterTel width={17} height={18} stroke="currentColor" />
          <span>شماره تماس :۰۲۱-۲۱۲۳۴ - ۲۱۲۴۱</span>
        </li>
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-main-orange px-[10px] font-bold dark:text-white">
          <Email width={17} height={18} stroke="currentColor" />
          <span>آدرس ایمیل: sales@tntiran.com</span>
        </li>
        <li className="flex items-center gap-[10px] border-r-[3px] border-solid border-main-orange px-[10px] font-bold dark:text-white">
          <span>شنبه تا چهارشنبه: 8 الی 16 - پنجشنبه: 8 الی 13</span>
        </li>
      </ul>
    </div>
  );
}

export default Sixth;
