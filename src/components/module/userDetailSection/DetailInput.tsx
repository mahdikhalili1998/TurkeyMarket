"use client";
import { useState, useRef } from "react";
import DownArrow from "../../../../public/icon/down.svg";
import { countries } from "@/constant/countryData";
import ImageTag from "@/components/element/ImageTag";
import Image from "next/image";

function DetailInput() {
  const [userDetail, setUserDetail] = useState({
    name: "",
    lastName: "",
    nationalId: "",
    email: "",
    phoneNumber: "",
    contry: "",
    city: "",
    PostalCode: "",
    addresTitle: "",
    address: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [countryDropdownOpen, setCountryDropdownOpen] =
    useState<boolean>(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState<boolean>(false);
  const [nextStep, setNextStep] = useState<boolean>(false);

  const [selectedCountry, setSelectedCountry] = useState({
    name: "ترکیه",
    flag: "/icon/turkyFlag.svg",
  });

  const [selectedPhoneCode, setSelectedPhoneCode] = useState({
    code: "90+",
    flag: "/icon/turkyFlag.svg",
  });

  const countryDropdownRef = useRef(null);
  const phoneDropdownRef = useRef(null);

  const handleSelectCountry = (country: { name: string; flag: string }) => {
    setSelectedCountry(country);
    setCountryDropdownOpen(false);
  };

  const handleSelectPhoneCode = (code: { code: string; flag: string }) => {
    setSelectedPhoneCode(code);
    setPhoneDropdownOpen(false);
  };

  const toggleCountryDropdown = () => {
    setCountryDropdownOpen((prev) => !prev);
    setPhoneDropdownOpen(false);
  };

  const togglePhoneDropdown = () => {
    setPhoneDropdownOpen((prev) => !prev);
    setCountryDropdownOpen(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
    <div className="mb-10 mr-4 space-y-8 text-text-color dark:text-white">
      {/* بخش اول */}
      <div className="flex w-[891px] items-center gap-8">
        <div className={`flex h-[97px] flex-col gap-2 text-sm`}>
          <label className="font-semibold">نام :</label>
          <input
            type="text"
            placeholder="مهدی"
            className={`${nextStep && userDetail.name === "" ? "border-red-500" : "border-gray-400"} h-[56px] w-[286.5px] rounded-md border-2 border-solid bg-transparent p-2 placeholder:text-gray-400`}
            value={userDetail.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetail({ ...userDetail, name: e.target.value })
            }
          />
          <span
            className={`${nextStep && userDetail.name === "" ? "block" : "hidden"} h-1 text-xs text-red-500`}
          >
            پر کردن این فیلد اجباری است
          </span>
        </div>
        <div className="flex h-[97px] flex-col gap-2">
          <label className="font-semibold">نام خانوادگی :</label>
          <input
            type="text"
            placeholder="خلیلی"
            className={`${nextStep && userDetail.lastName === "" ? "border-red-500" : "border-gray-400"} h-[56px] w-[286.5px] rounded-md border-2 border-solid border-gray-300 bg-transparent p-2 placeholder:text-gray-400`}
            value={userDetail.lastName}
            onChange={(e) =>
              setUserDetail({ ...userDetail, lastName: e.target.value })
            }
          />
          <span
            className={`${nextStep && userDetail.lastName === "" ? "block" : "hidden"} h-1 text-xs text-red-500`}
          >
            پر کردن این فیلد اجباری است
          </span>
        </div>
        <div className="flex h-[97px] flex-col gap-2">
          <label className="font-semibold">شماره ملی:</label>
          <input
            type="text"
            placeholder="271029xxx71"
            className="h-[56px] w-[256.5px] rounded-md border-2 border-solid border-gray-300 bg-transparent p-2 placeholder:text-gray-400 dark:border-gray-500"
            value={userDetail.nationalId}
            onChange={(e) =>
              setUserDetail({ ...userDetail, nationalId: e.target.value })
            }
          />
        </div>
      </div>
      {/* بخش دوم */}
      <div className="flex w-[891px] items-center gap-[24px]">
        <div className="flex h-[97px] flex-col items-end gap-2 text-sm">
          <label className="ml-auto font-semibold">آدرس ایمیل :</label>
          <div
            className={`${nextStep && userDetail.email === "" ? "border-red-500" : "border-gray-400"} flex h-[56px] w-[433.5px] items-center justify-end rounded-md border-2 border-solid border-gray-300 bg-transparent p-2`}
          >
            <input
              type="email"
              placeholder="mahdi@gamil.com"
              className={`pl-3 text-left placeholder:pl-2 placeholder:text-left placeholder:text-gray-400 focus:outline-none dark:bg-dark-bg dark:placeholder:bg-dark-bg`}
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
            className={`${nextStep && userDetail.email === "" ? "block" : "hidden"} ml-auto h-1 text-xs text-red-500`}
          >
            پر کردن این فیلد اجباری است
          </span>
        </div>
        <div className={"flex h-[97px] flex-col items-end gap-2 text-sm"}>
          <label className="ml-auto font-semibold">شماره تماس :</label>
          <div
            className={`${nextStep && userDetail.phoneNumber === "" ? "border-red-500" : "border-gray-400"} flex h-[56px] w-[433.5px] items-center justify-end rounded-md border-2 border-solid border-gray-300 bg-transparent p-2`}
          >
            <input
              placeholder="0912xxxxxxx"
              type="text"
              className={`pl-3 text-left placeholder:pl-2 placeholder:text-left placeholder:text-gray-400 focus:outline-none dark:bg-dark-bg dark:text-white`}
              value={userDetail.phoneNumber}
              onChange={(e) =>
                setUserDetail({ ...userDetail, phoneNumber: e.target.value })
              }
            />

            <div className="relative">
              <div
                className="flex cursor-pointer items-center gap-1 border-r-2 border-solid border-gray-300 pr-2"
                onClick={togglePhoneDropdown}
              >
                <span>{selectedPhoneCode.code}</span>
                <Image
                  src={selectedPhoneCode.flag || "/default-flag.svg"}
                  alt={selectedPhoneCode.code}
                  width={24}
                  height={16}
                  className="rounded"
                />
                <DownArrow className="text-gray-500 dark:text-white" />
              </div>
              {phoneDropdownOpen && (
                <div
                  ref={phoneDropdownRef}
                  className="absolute z-10 mt-2 w-full rounded-md border border-gray-300 bg-white shadow-md dark:border-gray-500 dark:bg-main-dark"
                >
                  <ul className="flex flex-col">
                    {countries.map((country, index) => (
                      <li
                        key={index}
                        className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() =>
                          handleSelectPhoneCode({
                            code: country.code,
                            flag: country.flag,
                          })
                        }
                      >
                        <Image
                          src={country.flag}
                          alt={country.name}
                          width={24}
                          height={16}
                          className="rounded"
                        />
                        <span className="dark:text-white">{country.code}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <span
            className={`${nextStep && userDetail.phoneNumber === "" ? "block" : "hidden"} ml-auto h-1 text-xs text-red-500`}
          >
            پر کردن این فیلد اجباری است
          </span>
        </div>
      </div>
      {/* بخش سوم */}
      <div className="flex w-[891px] items-center gap-9">
        <div className="relative h-[97px] w-[286.33px] space-y-4 text-sm">
          <label className="font-semibold">کشور :</label>
          <div
            className="flex h-[56px] cursor-pointer items-center justify-end rounded-md border-2 border-solid border-gray-300 bg-transparent p-2 dark:border-gray-500"
            onClick={toggleCountryDropdown}
          >
            <div className="flex w-full items-center justify-between">
              <span className="text-gray-400">{selectedCountry.name}</span>
              <div className="flex items-center gap-2">
                <Image
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  width={24}
                  height={16}
                  className="rounded"
                />
                <DownArrow className="text-gray-500 dark:text-white" />
              </div>
            </div>
          </div>
          {countryDropdownOpen && (
            <div
              ref={countryDropdownRef}
              className="absolute z-10 mt-2 w-full rounded-md border border-gray-300 bg-white shadow-md dark:border-gray-500 dark:bg-main-dark"
            >
              <ul className="flex flex-col">
                {countries.map((country, index) => (
                  <li
                    key={index}
                    className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleSelectCountry(country)}
                  >
                    <Image
                      src={country.flag}
                      alt={country.name}
                      width={24}
                      height={16}
                      className="rounded"
                    />
                    <span className="dark:text-white">{country.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex h-[97px] w-[286.33px] flex-col space-y-4 text-sm">
          <label className="font-semibold">شهر :</label>
          <div className="flex h-[56px] items-center rounded-md border-2 border-solid border-gray-300 bg-transparent p-2 dark:border-gray-500">
            <div className="flex gap-3">
              <select
                id="language"
                name="language"
                className="w-[10rem] text-gray-300 focus:outline-none dark:bg-dark-bg"
              >
                <option value={userDetail.contry}> استانبول</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex h-[97px] w-[286.33px] flex-col space-y-4 text-sm">
          <label className="font-semibold">کدپستی : </label>
          <div className="flex h-[56px] items-center rounded-md border-2 border-solid border-gray-300 bg-transparent p-2 dark:border-gray-500">
            <input
              placeholder="4416166400"
              className="w-[10rem] placeholder:pl-2 placeholder:text-right placeholder:text-gray-400 focus:outline-none dark:bg-dark-bg"
              value={userDetail.PostalCode}
              onChange={(e) =>
                setUserDetail({ ...userDetail, PostalCode: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      {/* بخش چهارم */}
      <div className="flex h-[97px] w-[891px] flex-col space-y-4 text-sm">
        <label className="font-semibold">عنوان آدرس : </label>
        <div className="flex h-[56px] items-center rounded-md border-2 border-solid border-gray-300 bg-transparent p-2 dark:border-gray-500">
          <input
            type="text"
            placeholder="خانه"
            className="w-full placeholder:pl-2 placeholder:text-right placeholder:text-gray-400 focus:outline-none dark:bg-dark-bg"
            value={userDetail.addresTitle}
            onChange={(e) =>
              setUserDetail({ ...userDetail, addresTitle: e.target.value })
            }
          />
        </div>
      </div>
      {/* بخش پنجم */}
      <div className="flex h-[193px] w-[891px] flex-col space-y-4 text-sm">
        <label className="font-semibold">آدرس کامل : </label>
        <div className="flex h-[111px] items-center rounded-md border-2 border-solid border-gray-300 bg-transparent p-2 dark:border-gray-500">
          <textarea
            placeholder="آدرس : تهران ، خیابان نلسون ماندلا و ..."
            className="w-full placeholder:pl-2 placeholder:text-right placeholder:text-gray-400 focus:outline-none dark:bg-dark-bg"
            value={userDetail.address}
            onChange={(e) =>
              setUserDetail({ ...userDetail, address: e.target.value })
            }
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            id="custom-checkbox"
            type="checkbox"
            checked={isChecked} // اتصال وضعیت به state
            onChange={handleCheckboxChange} // تغییر وضعیت با کلیک
            className="peer hidden"
          />
          <label
            htmlFor="custom-checkbox"
            className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-2 font-semibold ${isChecked ? "bg-orange-500 text-white dark:border-none" : "border-gray-600"}`}
          >
            {isChecked ? "✓" : ""}{" "}
          </label>
          <span className="ml-2 text-sm">در دفتر آدرس ها ذخیره شود</span>
        </div>
      </div>
      {/* دکمه ها */}
      <div className="flex items-center justify-end gap-4">
        <button className="flex h-[48px] w-[128px] items-center rounded-lg bg-bg-gray p-2 text-sm text-text-color dark:bg-main-dark dark:text-gray-400">
          <ImageTag src="right" width={24} height={24} />
          <span className="text-gray-300">مرحله قبل</span>
        </button>
        <button
          onClick={nextStepHandler}
          className="flex h-[48px] w-[128px] items-center justify-center rounded-lg bg-main-orange p-2 text-sm text-white"
        >
          <span className="text-white">مرحله بعد</span>
          <ImageTag src="left" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default DetailInput;
