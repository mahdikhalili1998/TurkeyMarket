import { IIcon } from "@/types/icon";
import React from "react";

function RightArrow({ width, height, stroke }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.79289 7.79289C9.40237 8.18342 9.40237 8.81658 9.79289 9.20711L12.5858 12L9.79289 14.7929C9.40237 15.1834 9.40237 15.8166 9.79289 16.2071C10.1834 16.5976 10.8166 16.5976 11.2071 16.2071L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L11.2071 7.79289C10.8166 7.40237 10.1834 7.40237 9.79289 7.79289Z"
        fill={stroke}
      />
    </svg>
  );
}

export default RightArrow;
