import { IIcon } from "@/types/icon";
import React from "react";

function Moon({ stroke, width, height }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9852 16.4559C22.0399 16.3559 21.9326 16.2467 21.8292 16.2945C20.4732 16.9209 18.9631 17.2704 17.3713 17.2704C11.4941 17.2704 6.72963 12.5059 6.72963 6.6287C6.72963 5.03694 7.07911 3.5268 7.70553 2.17083C7.75333 2.06735 7.64407 1.96009 7.54406 2.01477C4.24056 3.8209 2 7.32796 2 11.3583C2 17.2356 6.76444 22 12.6417 22C16.672 22 20.1791 19.7594 21.9852 16.4559Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default Moon;
