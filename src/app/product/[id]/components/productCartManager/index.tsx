"use client";

import Popup from "@/components/ui/popup";
import { addToCart } from "@/lib/store/slices/cart/cartSlice";
import { Product } from "@/types/product.types";
import { useState } from "react";
import ProductAddedToCartAlert from "../ProductAddedToCartAlert";
import { useAppDispatch } from "@/lib/store/hooks";

const ProductCartManager = ({ product }: { product: Product }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      {
        <button
          onClick={() => {
            dispatch(addToCart(product));
            setShowModal(true);
          }}
          className="relative px-2 py-2 flex items-center justify-center text-button-2 user-select-none bg-primary-500 text-white rounded-lg w-full"
        >
          افزودن به سبد
        </button>
      }
      {showModal && (
        <Popup>
          <ProductAddedToCartAlert
            product={product}
            onClose={() => setShowModal(false)}
          />
        </Popup>
      )}
    </>
  );
};
export default ProductCartManager;
