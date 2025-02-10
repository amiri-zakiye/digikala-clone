"use client";
import { useState } from "react";
import Slider from "@/components/ui/slider/slider";
import { SliderType } from "@/components/ui/slider/swiper.types";
import { ProductGallery } from "@/types/product.types";
import Image from "next/image";
const ProductPopOver = ({
  items,
  closeGalleryPopOver,
}: {
  items?: ProductGallery;
  closeGalleryPopOver: () => void;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SliderType | null>(null);

  return (
    <div className="fixed inset-0 bg-black z-40">
      <button
        onClick={closeGalleryPopOver}
        className={
          "cursor-pointer top-large left-large z-10 absolute w-[30px] h-[30px]"
        }
      >
        <svg width={24} height={24} className={"fill-white"}>
          <use xlinkHref="#close"></use>
        </svg>
      </button>
      <div className={"flex flex-col justify-between h-full py-5"}>
        <Slider
          pagination={false}
          navigation={true}
          thumbSwiper={thumbsSwiper}
          className={"gallerySwiper"}
        >
          {items?.map((item) => {
            return (
              <div
                className={
                  "flex justify-center items-center mx-auto max-w-lg h-full relative w-full lg:w-[75vh] lg:max-w-[75vw]"
                }
                key={item.url?.[0]}
              >
                <Image width="600" height="600" src={item.url?.[0]} alt="" />
              </div>
            );
          })}
        </Slider>
        <Slider
          onSwiper={setThumbsSwiper}
          spaceBetween={2}
          slidesPerView={"auto"}
          pagination={false}
          freeMode={true}
          watchSlidesProgress={true}
          className={"thumbsSwiper mt-5"}
        >
          {items?.map((item) => {
            return (
              <div
                className={
                  "flex cursor-pointer justify-center items-center w-[70px] h-[70px] relative"
                }
                key={`thumb_${item.url?.[0]}`}
              >
                <Image width="100" height="100" src={item.url?.[0]} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default ProductPopOver;
