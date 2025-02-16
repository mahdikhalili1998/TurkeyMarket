import { IIcon } from "@/types/icon";
import React from "react";

function Turky({ width, height }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 31 22"
      fill="none"
    >
      <g clipPath="url(#clip0_681_4272)">
        <path
          d="M0.666626 1.00018H30.6666V20.9998H0.666626V1.00018Z"
          fill="#D80027"
        />
        <path
          d="M15.1518 8.70233L16.1827 10.123L17.8522 9.58165L16.8197 11.001L17.8505 12.4216L16.1815 11.8782L15.149 13.2976L15.1501 11.5424L13.4811 10.999L15.1506 10.4576L15.1518 8.70233Z"
          fill="white"
        />
        <path
          d="M12.3386 14.5509C10.3776 14.5509 8.78774 12.961 8.78774 11C8.78774 9.0389 10.3776 7.44907 12.3386 7.44907C12.9501 7.44907 13.5254 7.6037 14.0277 7.87587C13.2398 7.10524 12.1621 6.62964 10.9729 6.62964C8.55928 6.62964 6.60266 8.58632 6.60266 10.9999C6.60266 13.4135 8.55934 15.3702 10.9729 15.3702C12.1621 15.3702 13.2398 14.8946 14.0277 14.124C13.5255 14.3962 12.9501 14.5509 12.3386 14.5509Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_681_4272">
          <rect
            width="30"
            height="20.0391"
            fill="white"
            transform="translate(0.666626 0.980469)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Turky;
