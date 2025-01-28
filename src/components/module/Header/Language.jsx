import DownArrow from "@/components/icon/DownArrow";
import Iran from "@/components/icon/Iran";
import TurkyFlag from "@/components/icon/Turky";

import dynamic from "next/dynamic";
import { useState } from "react";

// بارگذاری react-select فقط در محیط کلاینت
const Select = dynamic(() => import("react-select"), { ssr: false });

const Language = () => {
  const options = [
    {
      value: "iran",
      label: "ایران",
      icon: <Iran />,
      money: "Iranian Rial",
      sign: "IRR",
    },
    {
      value: "turkey",
      label: "ترکیه",
      icon: <TurkyFlag />,
      money: "Turkish Lira",
      sign: "₺",
    },
  ];

  // استیت برای انتخاب زبان و واحد پول
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [selectedCurrency, setSelectedCurrency] = useState({
    money: options[0].money,
    sign: options[0].sign,
  });

  // مدیریت انتخاب زبان
  const handleLanguageChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedLanguage(selectedOption); // به‌روزرسانی زبان
    }
  };

  // مدیریت انتخاب واحد پول
  const handleCurrencyChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedCurrency(selectedOption); // به‌روزرسانی واحد پول
    }
  };

  // سفارشی‌سازی نحوه نمایش گزینه‌های زبان
  const customOptionLabel = (data) => {
    return (
      <div className="flex items-center gap-2">
        <span>{data.icon}</span>
        <span>{data.label}</span>
      </div>
    );
  };

  // سفارشی‌سازی نحوه نمایش گزینه‌های واحد پول
  const customOptionLabelCurrency = (data) => {
    return (
      <div className="flex items-center gap-2">
        <span>{data.money}</span>
        <span>({data.sign})</span>
      </div>
    );
  };

  // استایل‌های سفارشی برای Select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#F6F6F6",
      color: "black",
      borderRadius: "8px",
      padding: "4px",
      border: "1px solid #ddd",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "gray",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#E8E8E8" : "#F6F6F6",
      color: "black",
      cursor: "pointer",
    }),
  };

  return (
    <div className="absolute left-0 z-40 rounded-md bg-white dark:bg-main-dark xl:-left-20 xl:top-8">
      <div className="flex w-[276px] flex-col gap-2 p-3">
        <label className="text-sm font-semibold">زبان</label>
        <Select
          styles={customStyles}
          options={options}
          value={selectedLanguage}
          onChange={handleLanguageChange} // تغییر زبان
          placeholder="انتخاب زبان"
          components={{
            DropdownIndicator: () => (
              <div className="dropdown-indicator">
                <DownArrow width={24} height={24} stroke="currentColor" />
              </div>
            ),
          }}
          formatOptionLabel={customOptionLabel}
        />
      </div>
      <div className="flex w-[276px] flex-col gap-2 p-3">
        <label className="text-sm font-semibold">واحد پول</label>
        <Select
          styles={customStyles}
          options={options.map(({ money, sign }) => ({ money, sign }))}
          value={selectedCurrency}
          onChange={handleCurrencyChange} // تغییر واحد پول
          placeholder="انتخاب واحد پول"
          components={{
            DropdownIndicator: () => (
              <div className="dropdown-indicator">
                <DownArrow width={24} height={24} stroke="currentColor" />
              </div>
            ),
          }}
          formatOptionLabel={customOptionLabelCurrency}
        />
      </div>
    </div>
  );
};

export default Language;
