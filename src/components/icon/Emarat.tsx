import { IIcon } from "@/types/icon";
import React from "react";

function Emarat({ width, height }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 19"
      fill="none"
    >
      <g clipPath="url(#clip0_1159_5374)">
        <path
          d="M-0.144287 -0.395834H30.1442V19.3958H-0.144287V-0.395834Z"
          fill="#FBFBFB"
        />
        <path
          d="M-0.144287 -0.395834H30.1442V6.03646H-0.144287V-0.395834Z"
          fill="#32AB45"
        />
        <path
          d="M-0.144287 12.9635H30.1442V19.3958H-0.144287V12.9635Z"
          fill="#1D1D1D"
        />
        <path
          d="M-0.144287 -0.395834H8.50956V19.3958H-0.144287V-0.395834Z"
          fill="#E92B2B"
        />
      </g>
      <defs>
        <clipPath id="clip0_1159_5374">
          <rect width="30" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Emarat;
