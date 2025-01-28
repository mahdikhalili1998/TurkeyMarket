import { IIcon } from "@/types/icon";
import React from "react";

function FaceBook({ width, height, stroke }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
    >
      <g clipPath="url(#clip0_3893_8305)">
        <path
          d="M10 0.5C4.4772 0.5 0 4.9772 0 10.5C0 15.1896 3.2288 19.1248 7.5844 20.2056V13.556H5.5224V10.5H7.5844V9.1832C7.5844 5.7796 9.1248 4.202 12.4664 4.202C13.1 4.202 14.1932 4.3264 14.6404 4.4504V7.2204C14.4044 7.1956 13.9944 7.1832 13.4852 7.1832C11.8456 7.1832 11.212 7.8044 11.212 9.4192V10.5H14.4784L13.9172 13.556H11.212V20.4268C16.1636 19.8288 20.0004 15.6128 20.0004 10.5C20 4.9772 15.5228 0.5 10 0.5Z"
          fill={stroke}
        />
      </g>
      <defs>
        <clipPath id="clip0_3893_8305">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default FaceBook;
