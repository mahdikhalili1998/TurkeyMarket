import { IIcon } from "@/types/icon";
import React from "react";

function Location({ width, height, stroke }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M16.6667 8.83329C16.6667 12.5152 10 18.8333 10 18.8333C10 18.8333 3.33337 12.5152 3.33337 8.83329C3.33337 5.15139 6.31814 2.16663 10 2.16663C13.6819 2.16663 16.6667 5.15139 16.6667 8.83329Z"
        stroke={stroke}
        strokeWidth="1.25"
      />
      <path
        d="M12.5 8.83329C12.5 10.214 11.3808 11.3333 10 11.3333C8.61933 11.3333 7.50004 10.214 7.50004 8.83329C7.50004 7.45258 8.61933 6.33329 10 6.33329C11.3808 6.33329 12.5 7.45258 12.5 8.83329Z"
        stroke={stroke}
        strokeWidth="1.25"
      />
    </svg>
  );
}

export default Location;
