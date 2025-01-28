import { IIcon } from "@/types/icon";
import React from "react";

function FooterTopArrow({ width, height, stroke }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        opacity="0.4"
        d="M14.6563 5.3125L14.6562 24.0625"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.12625 12.875L14.6563 5.3125L22.1875 12.875"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FooterTopArrow;
