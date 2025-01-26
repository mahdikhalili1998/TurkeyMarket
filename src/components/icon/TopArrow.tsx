import { IIcon } from "@/types/icon";
import React from "react";

function TopArrow({width,height,stroke}:IIcon) {
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
        d="M7.79289 14.2071C8.18342 14.5976 8.81658 14.5976 9.20711 14.2071L12 11.4142L14.7929 14.2071C15.1834 14.5976 15.8166 14.5976 16.2071 14.2071C16.5976 13.8166 16.5976 13.1834 16.2071 12.7929L12.7071 9.29289C12.3166 8.90237 11.6834 8.90237 11.2929 9.29289L7.79289 12.7929C7.40237 13.1834 7.40237 13.8166 7.79289 14.2071Z"
        fill={stroke}
      />
    </svg>
  );
}

export default TopArrow;
