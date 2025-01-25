import { IIcon } from "@/types/icon";
import React from "react";

function RightArrow({ width, height, stroke }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0232 14.8565C13.3812 14.4985 13.3812 13.9181 13.0232 13.5602L10.463 11L13.0232 8.43985C13.3812 8.08187 13.3812 7.50147 13.0232 7.14349C12.6652 6.7855 12.0848 6.7855 11.7268 7.14349L8.51849 10.3518C8.16051 10.7098 8.16051 11.2902 8.51849 11.6482L11.7268 14.8565C12.0848 15.2145 12.6652 15.2145 13.0232 14.8565Z"
        fill={stroke}
      />
    </svg>
  );
}

export default RightArrow;
