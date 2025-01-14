"use client"

import React, {ForwardedRef, ReactElement, SetStateAction, useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import {Pagination, Navigation, Autoplay, FreeMode, Thumbs} from "swiper/modules";
import styles from "./slider.module.css"
// @ts-ignore
import 'swiper/css';


export interface SliderProps {
    children: ReactElement[];
    slidesPerView?: number | "auto";
    loop?: boolean;
    pagination?: boolean;
    navigation ?: boolean
    spaceBetween?: number;
    breakpoints?: Record<number, { slidesPerView: number; spaceBetween?: number }>;
    autoplay ?: {delay: number,disableOnInteraction: boolean} | undefined,
    thumbSwiper ?: SwiperType,
    onSwiper ?: SetStateAction<SwiperType> ,
    freeMode ?: boolean,
    watchSlidesProgress ?: boolean,
    className ?: string,
}

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
                                           className
                                       }) => {

    const swiperRef = useRef<SwiperType>(null);

    return (
        <div className={`relative overflow-hidden ${styles.swiper_container}`}>
            <Swiper
                modules={[Pagination, Navigation, Autoplay ,FreeMode, Thumbs]}
                slidesPerView={slidesPerView}
                loop={loop}
                onBeforeInit={(swiper) => {
                    if (!navigation) return
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
                thumbs={{ swiper: thumbSwiper }}
                onSwiper={onSwiper}
                freeMode={freeMode}
                watchSlidesProgress={watchSlidesProgress}
                className={className}
            >
                {React.Children.map(children, (child: ReactElement) => (
                    <SwiperSlide style={ slidesPerView === "auto" ? {width: "auto",height: "auto"} : {}} className={slidesPerView === "auto" ? "max-w-max" : ""} key={child.key}>
                            {child}
                    </SwiperSlide>
                ))}
                {
                    navigation && <SliderNavigation swiperRef={swiperRef} />
                }
            </Swiper>

        </div>
    );
};

const SliderNavigation = ({swiperRef}: {swiperRef: ForwardedRef<SwiperType>}) => {
    return (
        <div className={`absolute right-0 flex items-center z-1 ${styles.fullslider_nav}`}>
                <div onClick={() => swiperRef?.current?.slidePrev()} className={`${styles.swiper_btn}`}>
                    <svg width={24} height={24} className={"fill-icon-high-emphasis"}>
                        <use xlinkHref="#chevronRight"></use>
                    </svg>
                </div>
                <div onClick={() => swiperRef?.current?.slideNext()} className={`${styles.swiper_btn}`}>
                    <svg width={24} height={24} className={"fill-icon-high-emphasis"}>
                        <use xlinkHref="#chevronLeft"></use>
                    </svg>
                </div>
        </div>
    )
}

export default Slider;
