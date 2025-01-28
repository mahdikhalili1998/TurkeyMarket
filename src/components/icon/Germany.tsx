import { IIcon } from "@/types/icon";
import React from "react";

function Germany({width,height}:IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 20"
      fill="none"
    >
      <g clipPath="url(#clip0_1159_5399)">
        <path
          d="M29.9999 6.72419H0V0.689689C1.55368e-05 0.552506 0.0545179 0.420947 0.15152 0.323945C0.248523 0.226942 0.380082 0.17244 0.517265 0.172424H29.4827C29.6199 0.17244 29.7515 0.226942 29.8485 0.323945C29.9455 0.420947 30 0.552506 30 0.689689L29.9999 6.72419Z"
          fill="#464655"
        />
        <path
          d="M29.4827 19.8276H0.517265C0.380082 19.8276 0.248523 19.7731 0.15152 19.6761C0.0545179 19.5791 1.55368e-05 19.4475 0 19.3103L0 13.2759H29.9999V19.3103C29.9999 19.4475 29.9454 19.5791 29.8484 19.6761C29.7514 19.7731 29.6199 19.8276 29.4827 19.8276Z"
          fill="#FFE15A"
        />
        <path d="M0 6.72406H29.9999V13.2754H0V6.72406Z" fill="#FF4B55" />
      </g>
      <defs>
        <clipPath id="clip0_1159_5399">
          <rect width="30" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Germany;
