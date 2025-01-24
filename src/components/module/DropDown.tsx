"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";

// داده‌های کشورها
const countries = [
  {
    name: "ایران",
    code: "98+",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
  },
  {
    name: "آمریکا",
    code: "1+",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
  },
  {
    name: "ترکیه",
    code: "90+",
    flag: "/icon/turkyFlag.svg", // مطمئن شوید این مسیر درست است و فایل در فولدر public قرار دارد
  },
];

const CountryDropdown = () => {
  const [isClient, setIsClient] = useState(false); // برای اطمینان از اجرای کد در سمت کلاینت

  useEffect(() => {
    setIsClient(true); // مشخص کردن اینکه کد در کلاینت اجرا شود
  }, []);

  // جلوگیری از رندر در سمت سرور
  if (!isClient) return null;

  // تبدیل داده‌ها به فرمت موردنیاز react-select
  const options = countries.map((country) => ({
    value: country.code,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={country.flag}
          alt={country.name}
          style={{
            width: "20px",
            height: "15px",
            marginRight: "10px",
          }}
        />
        <span>{country.name}</span>
      </div>
    ),
  }));

  // تنظیم استایل‌های سفارشی برای react-select
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
      padding: "5px",
      fontSize: "14px",
      height: "40px",
      borderColor: "#ccc",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#aaa",
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#999",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    option: (provided: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      padding: "10px",
    }),
  };

  const handleChange = (selectedOption: any) => {
    console.log("Selected Country:", selectedOption);
  };

  // مقدار پیش‌فرض برای کشور ترکیه
  const defaultValue = options.find((option) => option.value === "90+");

  return (
    <div>
      <Select
        options={options}
        styles={customStyles}
        onChange={handleChange}
        placeholder="کشور را انتخاب کنید"
        isSearchable={true}
        defaultValue={defaultValue} // تنظیم مقدار پیش‌فرض
      />
    </div>
  );
};

export default CountryDropdown;
