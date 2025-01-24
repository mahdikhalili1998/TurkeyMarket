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
    <div className="mb-10 space-y-8 text-text-color dark:text-white xl:mr-4">
      {/* بخش اول */}
      <div className="flex flex-col items-start gap-8 xl:w-[891px] xl:flex-row">
        <div className={`flex h-[72px] flex-col gap-2 text-sm xl:h-[97px]`}>
          <label className="text-xs font-bold xl:text-base">نام :</label>
          <input
            type="text"
            placeholder="مهدی"
            value={userDetail.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetail({ ...userDetail, name: e.target.value })
            }
            className={`${nextStep && userDetail.name === "" ? "border-red-500" : "border-input-border"} h-[48px] w-[343px] rounded-md border-2 border-solid bg-transparent p-2 placeholder:text-gray-400 xl:h-[56px] xl:w-[286.5px]`}
          />
          <span
            className={`${nextStep && userDetail.name === "" ? "block" : "hidden"} h-1 text-xs text-red-500`}
          >
            پر کردن این فیلد اجباری است
          </span>
        </div>
        <div className="flex h-[72px] flex-col gap-2 text-sm xl:h-[97px]">
          <label className="text-xs font-bold xl:text-base">
            نام خانوادگی :
          </label>
          <input
            type="text"
            placeholder="خلیلی"
            className={`${nextStep && userDetail.lastName === "" ? "border-red-500" : "border-input-border"} h-[48px] w-[343px] rounded-md border-2 border-solid bg-transparent p-2 placeholder:text-gray-400 xl:h-[56px] xl:w-[286.5px]`}
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
        <div className="flex h-[72px] flex-col gap-2 text-sm xl:h-[97px]">
          <label className="text-xs font-bold xl:text-base">شماره ملی : </label>
          <input
            type="text"
            placeholder="271029xxx71"
            className="border-input-border h-[48px] w-[343px] rounded-md border-2 border-solid bg-transparent p-2 placeholder:text-gray-400 dark:border-gray-500 xl:h-[56px] xl:w-[256.5px]"
            value={userDetail.nationalId}
            onChange={(e) =>
              setUserDetail({ ...userDetail, nationalId: e.target.value })
            }
          />
        </div>
      </div>
      {/* بخش دوم */}
      <div className="flex flex-col items-center gap-6 xl:w-[891px] xl:flex-row">
        <div className="ml-auto flex h-[72px] flex-col gap-2 text-sm xl:h-[97px] xl:items-end">
          <label className="ml-auto text-xs font-bold xl:text-base">
            آدرس ایمیل :
          </label>
          <div
            className={`${nextStep && userDetail.email === "" ? "border-red-500" : "border-input-border"} flex h-[48px] w-[343px] items-center justify-end rounded-md border-2 border-solid border-gray-300 bg-transparent p-2 xl:h-[56px] xl:w-[433.5px]`}
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
        <div className="ml-auto flex h-[72px] flex-col gap-2 text-sm xl:h-[97px] xl:items-end">
          <label className="ml-auto text-xs font-bold xl:text-base">
            شماره تماس :
          </label>
          <div
            className={`${nextStep && userDetail.phoneNumber === "" ? "border-red-500" : "border-input-border"} flex h-[48px] w-[343px] items-center justify-end rounded-md border-2 border-solid border-gray-300 bg-transparent p-2 xl:h-[56px] xl:w-[433.5px]`}
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
      <div className="flex flex-col items-center gap-9 xl:w-[891px] xl:flex-row">
        <div className="relative ml-auto h-[72px] w-[343px] space-y-4 text-sm xl:h-[97px] xl:w-[286.33px]">
          <label className="text-xs font-bold xl:text-base">کشور :</label>
          <div
            className="flex h-[48px] cursor-pointer rounded-md border-2 border-solid border-gray-300 bg-transparent p-2 dark:border-gray-500 xl:h-[56px] xl:items-center xl:justify-end"
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
        <div className="ml-auto flex h-[72px] w-[343px] flex-col space-y-4 text-sm xl:h-[97px] xl:w-[286.33px]">
          <label className="text-xs font-bold xl:text-base">شهر :</label>
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
        <div className="ml-auto flex h-[72px] w-[343px] flex-col space-y-4 text-sm xl:h-[97px] xl:w-[286.33px]">
          <label className="text-xs font-bold xl:text-base">کدپستی : </label>
          <div className="border-input-border flex items-center rounded-md border-2 border-solid bg-transparent dark:border-gray-500">
            <input
              placeholder="4416166400"
              className="h-[48px] placeholder:px-2 placeholder:text-right placeholder:text-gray-400 focus:outline-none dark:bg-dark-bg xl:w-[10rem]"
              value={userDetail.PostalCode}
              onChange={(e) =>
                setUserDetail({ ...userDetail, PostalCode: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      {/* بخش چهارم */}
      <div className="flex h-[89px] w-[343px] flex-col space-y-4 text-sm xl:h-[97px] xl:w-[891px]">
        <label className="text-xs font-bold">عنوان آدرس : </label>
        <div className="border-input-border flex h-[56px] items-center rounded-md border-2 border-solid bg-transparent p-2 dark:border-gray-500">
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
      <div className="flex h-[200px] w-[343px] flex-col space-y-4 text-sm xl:h-[193px] xl:w-[891px]">
        <label className="text-xs font-bold xl:text-base">آدرس کامل : </label>
        <div className="border-input-border flex items-center rounded-md border-2 border-solid bg-transparent dark:border-gray-500">
          <input
            placeholder="آدرس : تهران ، خیابان نلسون ماندلا و ..."
            className="h-[148px] placeholder:px-2 placeholder:text-right placeholder:text-gray-400 focus:outline-none dark:bg-dark-bg xl:h-[111px] xl:w-[891px]"
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
          <span className="ml-2 text-xs font-bold xl:text-sm">
            در دفتر آدرس ها ذخیره شود
          </span>
        </div>
      </div>
      {/* دکمه ها */}
      <div className="flex w-[343] items-center justify-center gap-4 xl:justify-end">
        <button className="flex h-[48px] w-[164px] items-center rounded-lg bg-bg-gray p-2 text-xs text-text-color dark:bg-main-dark dark:text-gray-400 xl:w-[128px] xl:text-sm">
          <ImageTag src="right" width={24} height={24} />
          <span className="text-gray-300">مرحله قبل</span>
        </button>
        <button
          onClick={nextStepHandler}
          className="flex h-[48px] w-[164px] items-center justify-center rounded-lg bg-main-orange p-2 text-xs text-white xl:w-[128px] xl:text-sm"
        >
          <span className="text-white">مرحله بعد</span>
          <ImageTag src="left" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default DetailInput;
