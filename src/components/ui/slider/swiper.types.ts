import { ReactElement } from "react";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import Swiper from "swiper";

export type SliderType = Swiper;

export interface SliderProps {
  children?: ReactElement[] | [ReactElement];
  slidesPerView?: number | "auto";
  loop?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  breakpoints?: Record<
    number,
    { slidesPerView: number; spaceBetween?: number }
  >;
  autoplay?: { delay: number; disableOnInteraction: boolean } | undefined;
  thumbSwiper?: SliderType | null;
  onSwiper?: Dispatch<SetStateAction<SliderType | null>>;
  freeMode?: boolean;
  watchSlidesProgress?: boolean;
  className?: string;
}
