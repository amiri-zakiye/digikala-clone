"use client";
import { useState } from "react";
import ProductGallery from "./components/productGallery";
import ProductPopOver from "./components/productPopOver";
import { ProductGallery as TProductGallery } from "@/types/product.types";

const ProductSliders = ({ items }: { items?: TProductGallery }) => {
  const [isPopOvervisible, setIsPopOverVisible] = useState(false);

  const setPopOverVisible = () => {
    setIsPopOverVisible(true);
  };

  const setPopOverNotVisible = () => {
    setIsPopOverVisible(false);
  };

  return (
    <>
      <ProductGallery
        items={items?.slice(0, 4)}
        openGalleryPopOver={setPopOverVisible}
      />
      {isPopOvervisible && (
        <ProductPopOver
          items={items}
          closeGalleryPopOver={setPopOverNotVisible}
        />
      )}
    </>
  );
};

export default ProductSliders;
