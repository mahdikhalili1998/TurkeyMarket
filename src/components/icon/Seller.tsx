import { IIcon } from "@/types/icon";
import React from "react";

function Seller({ width, height, stroke }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_1256_13237)">
        <path
          d="M19.3375 12.6562C19.225 12.1687 18.9062 11.7625 18.45 11.55C17.8313 11.2625 17.1 11.3937 16.6375 11.8562L14.475 13.8812L13.1062 11.8187C12.4875 10.8812 11.4438 10.325 10.325 10.325H9.79375C8.68125 10.325 7.65625 10.875 7.0375 11.775H5.59375C5.4375 10.9 4.675 10.2312 3.75 10.2312H1.25C0.90625 10.2312 0.625 10.5125 0.625 10.8562V18.3562C0.625 18.7 0.90625 18.9812 1.25 18.9812H3.75C4.6125 18.9812 5.33125 18.3937 5.55 17.6H6.875L7.41875 18.25C8.0125 18.9625 8.8875 19.3687 9.8125 19.3687H13.1375C14.075 19.3687 14.9562 18.95 15.55 18.225L19 14.025C19.3188 13.6375 19.4375 13.1375 19.325 12.6437L19.3375 12.6562ZM3.75 17.7312H1.875V11.4812H3.75C4.09375 11.4812 4.375 11.7625 4.375 12.1062V17.1062C4.375 17.45 4.09375 17.7312 3.75 17.7312ZM18.0438 13.2375L14.5938 17.4375C14.2375 17.875 13.7063 18.125 13.1438 18.125H9.81875C9.2625 18.125 8.7375 17.8812 8.38125 17.4562L7.65 16.5812C7.53125 16.4375 7.35625 16.3562 7.16875 16.3562H5.625V13.025H7.3875C7.61875 13.025 7.83125 12.8937 7.94375 12.6875C8.30625 12 9.0125 11.5687 9.79375 11.5687H10.325C11.025 11.5687 11.675 11.9187 12.0625 12.5062L13.55 14.75L13.1187 15.15C12.9937 15.2687 12.8313 15.3312 12.6625 15.3187C12.4938 15.3125 12.3375 15.2375 12.225 15.1062L11.4313 14.2C11.2063 13.9375 10.8062 13.9125 10.55 14.1437C10.2937 14.375 10.2625 14.7687 10.4938 15.025L11.2875 15.9312C11.625 16.3187 12.0938 16.5437 12.6062 16.5687C13.1187 16.5937 13.6063 16.4125 13.9813 16.0625L17.5125 12.7562C17.6187 12.65 17.7875 12.6187 17.925 12.6812C18.0625 12.7437 18.1125 12.8625 18.125 12.9312C18.1375 13 18.15 13.1187 18.05 13.2437L18.0438 13.2375Z"
          fill={stroke}
        />
        <path
          d="M10.9375 9.375H17.1875C18.05 9.375 18.75 8.675 18.75 7.8125V2.1875C18.75 1.325 18.05 0.625 17.1875 0.625H10.9375C10.075 0.625 9.375 1.325 9.375 2.1875V7.8125C9.375 8.675 10.075 9.375 10.9375 9.375ZM17.1875 8.125H10.9375C10.7625 8.125 10.625 7.9875 10.625 7.8125V4.375H12.0312V5.625C12.0312 5.8375 12.1375 6.03125 12.3187 6.15C12.4937 6.2625 12.7188 6.28125 12.9125 6.2L14.0625 5.6875L15.2125 6.2C15.2938 6.2375 15.3812 6.25625 15.4688 6.25625C15.5875 6.25625 15.7063 6.225 15.8063 6.15625C15.9813 6.04375 16.0938 5.84375 16.0938 5.63125V4.38125H17.5V7.81875C17.5 7.99375 17.3625 8.13125 17.1875 8.13125V8.125ZM13.2812 1.875H14.8438V4.6625L14.3187 4.425C14.1562 4.35 13.975 4.35 13.8125 4.425L13.2875 4.6625V1.875H13.2812ZM17.5 2.1875V3.125H16.0938V1.875H17.1875C17.3625 1.875 17.5 2.0125 17.5 2.1875ZM10.9375 1.875H12.0312V3.125H10.625V2.1875C10.625 2.0125 10.7625 1.875 10.9375 1.875Z"
          fill={stroke}
        />
        <path
          d="M3.125 12.1062C2.78125 12.1062 2.5 12.3875 2.5 12.7312V13.3562C2.5 13.7 2.78125 13.9812 3.125 13.9812C3.46875 13.9812 3.75 13.7 3.75 13.3562V12.7312C3.75 12.3875 3.46875 12.1062 3.125 12.1062Z"
          fill={stroke}
        />
      </g>
      <defs>
        <clipPath id="clip0_1256_13237">
          <rect width="20" height="20" fill={stroke} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Seller;
