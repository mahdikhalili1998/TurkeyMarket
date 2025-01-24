import { IImage } from "@/types/prop";
import Image from "next/image";
import React, { FC } from "react";

const ImageTag: FC<IImage> = ({ src, height, width, proprty }) => {
  return (
    <Image
      src={`/icon/${src}.svg`}
      alt={src}
      height={height}
      width={width}
      priority
      className={proprty}
    />
  );
};

export default ImageTag;
