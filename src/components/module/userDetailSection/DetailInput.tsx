"use client";
import { useState } from "react";
import ImageTag from "@/components/element/ImageTag";
import PhoneNumber from "@/components/module/userDetailSection/PhoneNumber";
import Country from "@/components/module/userDetailSection/Country";
import Cities from "@/components/module/userDetailSection/Cities";
import DownArrow from "@/components/icon/DownArrow";
import RightArrow from "@/components/icon/RightArrow";
import LeftArrow from "@/components/icon/LeftArrow";

function DetailInput() {
  const [userDetail, setUserDetail] = useState({
    name: "",
    lastName: "",
    nationalId: "",
    email: "",
    phoneNumber: "",
    contry: "ترکیه",
    city: "استانبول",
    PostalCode: "",
    addresTitle: "",
    address: "",
  });
  const [nextStep, setNextStep] = useState<boolean>(false);

  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  const nextStepHandler = () => {
    setNextStep(true);
    if (
      userDetail.name === "" ||
      userDetail.lastName === "" ||
      userDetail.email === "" ||
      userDetail.phoneNumber === ""
    ) {
    }
  };

  return (
    <div className="mb-10 gap-3 text-text-color dark:text-white xl:mr-4 xl:flex xl:w-[891px] xl:flex-col xl:gap-6">
      {/* بخش اول */}
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between xl:gap-4">
        {/* نام */}
        <div className={`flex flex-col items-start gap-[17px] xl:w-[254px]`}>
          <label className="text-xs font-bold xl:text-base">نام :</label>
          <div
            className={`flex items-center gap-2 text-border-color ${nextStep && userDetail.name === "" ? "border-red-500" : "border-border-color dark:border-main-dark"} w-full rounded-md border-[1px] border-solid px-4 py-[17px]`}
          >
            <input
              type="text"
              placeholder="مهدی"
              value={userDetail.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserDetail({ ...userDetail, name: e.target.value })
              }
              className={`w-full bg-transparent text-sm font-normal text-text-color placeholder:text-gray-300 focus:outline-none dark:text-white`}
            />
            <DownArrow height={24} width={24} stroke="currentColor" />
          </div>
          <span
            className={`${nextStep && userDetail.name === "" ? "block" : "hidden"} -mt-1 mb-2 h-1 text-xs font-semibold text-red-500 xl:-mt-3`}
          >
            پر کردن این فیلد اجباری است
          </span>
        </div>
        {/* نام خانوادگی */}
        <div className={`flex flex-col items-start gap-[17px] xl:w-[254px]`}>
          <label className="text-xs font-bold xl:text-base">
            نام خانوادگی :
          </label>
          <div
            className={`flex items-center gap-2 text-border-color ${nextStep && userDetail.lastName === "" ? "border-red-500" : "border-border-color dark:border-main-dark"} w-full rounded-md border-[1px] border-solid px-4 py-[17px]`}
          >
            <input
              type="text"
              placeholder="خلیلی"
              value={userDetail.lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserDetail({ ...userDetail, lastName: e.target.value })
              }
              className={`w-full bg-transparent text-sm font-normal text-text-color placeholder:text-gray-300 focus:outline-none dark:text-white`}
            />
            <DownArrow height={24} width={24} stroke="currentColor" />
          </div>
          <span
            className={`${nextStep && userDetail.lastName === "" ? "block" : "hidden"} -mt-1 mb-2 h-1 text-xs font-semibold text-red-500 xl:-mt-3`}
          >
            پر کردن این فیلد اجباری است
          </span>
        </div>
        {/* شماره ملی */}
        <div className={`flex flex-col items-start gap-[17px] xl:w-[254px]`}>
          <label className="text-xs font-bold xl:text-base">شماره ملی :</label>
          <input
            type="text"
            placeholder="2710xxx745"
            value={userDetail.nationalId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetail({ ...userDetail, nationalId: e.target.value })
            }
            className={`w-full rounded-md border-[1px] border-solid border-border-color bg-transparent px-4 py-[17px] font-normal text-text-color placeholder:text-gray-300 focus:outline-none dark:border-main-dark dark:text-white xl:text-sm`}
          />
        </div>
      </div>
      {/* بخش دوم */}
      <div className="mt-3 flex flex-col items-start gap-3 xl:w-[891px] xl:flex-row xl:gap-6">
        {/* ایمیل */}
        <div className="flex w-full flex-col items-start gap-2 xl:w-[433.5px] xl:gap-[17px]">
          <label className="text-xs font-bold xl:text-base">آدرس ایمیل :</label>
          <div
            className={`${nextStep && userDetail.email === "" ? "border-red-500" : "border-border-color dark:border-main-dark"} flex w-full items-center justify-end rounded-md border-[1px] border-solid bg-transparent p-2 px-4 py-[17px] xl:h-[56px] xl:w-full`}
          >
            <input
              type="email"
              placeholder="mahdi@gamil.com"
              className={`pl-3 text-left placeholder:pl-2 placeholder:text-left placeholder:text-gray-300 focus:outline-none dark:bg-dark-bg dark:placeholder:text-gray-300`}
              value={userDetail.email}
              onChange={(e) =>
                setUserDetail({ ...userDetail, email: e.target.value })
              }
            />
            <div className="flex items-center gap-1 pr-2">
              <ImageTag src="letter" width={30} height={20} />
            </div>
          </div>
          <span
            className={`${nextStep && userDetail.email === "" ? "block" : "hidden"} -mt-1 mb-2 ml-auto h-1 text-xs font-semibold text-red-500 xl:-mt-3`}
          >
            پر کردن این فیلد اجباری است
          </span>
        </div>
        {/* شماره تماس */}
        <PhoneNumber
          setUserDetail={setUserDetail}
          userPhoneNumber={userDetail.phoneNumber}
          nextStep={nextStep}
        />
      </div>
      {/* بخش سوم */}
      <div className="mt-3 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <Country
          userCountry={userDetail.contry}
          setUserDetail={setUserDetail}
        />
        <Cities userCity={userDetail.city} setUserDetail={setUserDetail} />
        {/* کد پستی */}
        <div className={`flex flex-col items-start gap-[17px] xl:w-[254px]`}>
          <label htmlFor="post" className="text-xs font-bold xl:text-base">
            کد پستی:
          </label>
          <input
            type="text"
            id="post"
            placeholder="44161xxx200"
            value={userDetail.PostalCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetail({ ...userDetail, PostalCode: e.target.value })
            }
            className={`w-full rounded-md border-[1px] border-solid border-border-color bg-transparent px-4 py-[17px] font-normal text-text-color placeholder:text-gray-300 focus:outline-none dark:border-main-dark dark:text-white xl:text-sm`}
          />
        </div>
      </div>
      {/* عنوان آدرس  بخش چهارم */}
      <div className="mt-3 flex flex-col items-start gap-[17px] text-sm xl:h-[97px] xl:w-[891px]">
        <label htmlFor="titleAddres" className="text-xs font-bold xl:text-base">
          عنوان آدرس :{" "}
        </label>
        <input
          type="text"
          placeholder="خانه"
          id="titleAddres"
          className="w-full rounded-md border-[1px] border-solid border-border-color bg-transparent px-4 py-[17px] placeholder:pl-2 placeholder:text-right placeholder:text-gray-300 focus:outline-none dark:border-main-dark dark:bg-dark-bg"
          value={userDetail.addresTitle}
          onChange={(e) =>
            setUserDetail({ ...userDetail, addresTitle: e.target.value })
          }
        />
      </div>
      {/*  بخش پنجم  آدرس کامل*/}
      <div className="mt-3 flex w-[343px] flex-col items-start gap-[17px] text-sm xl:w-[891px]">
        <label htmlFor="fullAddres" className="text-xs font-bold xl:text-base">
          آدرس کامل :{" "}
        </label>
        <textarea
          id="fullAddres"
          placeholder="آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)"
          className="h-[114px] w-full resize-none rounded-md border-[1px] border-solid border-border-color bg-transparent px-4 py-[17px] font-semibold text-text-color placeholder:pl-2 placeholder:text-right placeholder:text-gray-300 focus:outline-none dark:border-main-dark dark:bg-dark-bg dark:text-white xl:h-[113px] xl:text-sm"
          value={userDetail.address}
          onChange={(e) =>
            setUserDetail({ ...userDetail, address: e.target.value })
          }
        />
        {/* چک باکس */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              id="address-checkbox"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className={`peer hidden`}
            />
            <div
              onClick={handleChange}
              className={`flex h-5 w-5 items-center justify-center rounded ${checked ? "bg-orange-500" : "border-2 border-gray-300 bg-transparent"}`}
            >
              {checked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M15 4.5L6.75 12.75L3 9"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <label
            htmlFor="address-checkbox"
            className="cursor-pointer text-xs font-bold text-text-color dark:text-white xl:text-base"
          >
            در دفتر آدرس‌ها ذخیره شود
          </label>
        </div>
      </div>
      {/* دکمه ها */}
      <div className="mt-4 flex w-full items-center justify-between gap-[15px] text-xs font-semibold xl:mr-auto xl:mt-10 xl:w-max xl:justify-end xl:text-sm">
        {/* مرحله قبل */}
        <button className="flex w-full items-center justify-center rounded-[10px] bg-field6 px-4 py-3 text-gray-300 dark:bg-field3 dark:text-gray-400 xl:w-max xl:gap-2 xl:px-[18px]">
          <RightArrow width={24} height={24} stroke="currentColor" />
          <span className="dark:text-gray-400">مرحله قبل</span>
        </button>
        {/* مرحله بعد */}
        <button
          onClick={nextStepHandler}
          className="flex w-full items-center justify-center rounded-lg bg-main-orange px-4 py-3 text-white xl:w-max xl:gap-2 xl:px-[18px]"
        >
          <span className="text-white">مرحله بعد</span>
          <LeftArrow width={24} height={24} stroke="currentColor" />
        </button>
      </div>
    </div>
  );
}

export default DetailInput;
