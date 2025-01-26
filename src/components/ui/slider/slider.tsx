"use client";

import React, { ForwardedRef, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import {
  Pagination,
  Navigation,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import styles from "./slider.module.css";
import "swiper/css";
import { SliderProps } from "./swiper.types";

const Slider: React.FC<SliderProps> = ({
  children,
  slidesPerView = 1,
  loop = false,
  autoplay = false,
  pagination = false,
  navigation = false,
  spaceBetween = 0,
  breakpoints,
  thumbSwiper,
  onSwiper,
  freeMode,
  watchSlidesProgress,
  className,
}) => {
  const swiperRef = useRef<SwiperType>(null);

  const modules = [];
  if (pagination) modules.push(Pagination);
  if (navigation) modules.push(Navigation);
  if (autoplay) modules.push(Autoplay);
  if (freeMode) modules.push(FreeMode);
  if (thumbSwiper !== undefined || onSwiper !== undefined) modules.push(Thumbs);

  return (
    <div className={`relative overflow-hidden ${styles.swiper_container}`}>
      <Swiper
        modules={modules}
        slidesPerView={slidesPerView}
        loop={loop}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={autoplay}
        pagination={
          pagination
            ? {
                clickable: true,
                bulletClass: "pagination-bullet",
                bulletActiveClass: "pagination-bulletActive",
              }
            : false
        }
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        thumbs={{
          swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
        }}
        onSwiper={onSwiper}
        freeMode={freeMode}
        watchSlidesProgress={watchSlidesProgress}
        className={className}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide
            style={
              slidesPerView === "auto" ? { width: "auto", height: "auto" } : {}
            }
            className={slidesPerView === "auto" ? "max-w-max" : ""}
            key={child?.key}
          >
            {child}
          </SwiperSlide>
        ))}
        {navigation && <SliderNavigation swiperRef={swiperRef} />}
      </Swiper>
    </div>
  );
};

const SliderNavigation = ({
  swiperRef,
}: {
  swiperRef: React.RefObject<SwiperType | null>;
}) => {
  return (
    <div
      className={`absolute right-0 flex items-center z-1 ${styles.fullslider_nav}`}
    >
      <div
        onClick={() => swiperRef?.current?.slidePrev()}
        className={`${styles.swiper_btn}`}
      >
        <svg width={24} height={24} className={"fill-icon-high-emphasis"}>
          <use xlinkHref="#chevronRight"></use>
        </svg>
      </div>
      <div
        onClick={() => swiperRef?.current?.slideNext()}
        className={`${styles.swiper_btn}`}
      >
        <svg width={24} height={24} className={"fill-icon-high-emphasis"}>
          <use xlinkHref="#chevronLeft"></use>
        </svg>
      </div>
    </div>
  );
};

export default Slider;
