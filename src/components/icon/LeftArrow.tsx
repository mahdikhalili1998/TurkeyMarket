import { IIcon } from "@/types/icon";
import React from "react";

function LeftArrow({ width, height, stroke }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 23"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0232 15.3592C13.3812 15.0012 13.3812 14.4208 13.0232 14.0628L10.463 11.5027L13.0232 8.94253C13.3812 8.58455 13.3812 8.00415 13.0232 7.64617C12.6652 7.28819 12.0848 7.28819 11.7268 7.64617L8.51849 10.8545C8.16051 11.2125 8.16051 11.7929 8.51849 12.1509L11.7268 15.3592C12.0848 15.7172 12.6652 15.7172 13.0232 15.3592Z"
        fill={stroke}
      />
    </svg>
  );
}

export default LeftArrow;
