import { JSX } from "react";

export interface IStoryData {
  id: string;
  name: string;
  post: { id: number; src: string }[];
}

export interface ICountry {
  name: string;
  code: string;
  flag: JSX.Element;
}
