"use client"
import { Product } from "@/features/product/types"
import ProductItem from "../productItem"
import { useRef, useState } from "react"
import useInfiniteScroll from "../../hooks/inifineScroll"

const ProductGrid = ({initialProducts}: {initialProducts: Product[]}) => {

    const [products,setProducts] = useState(initialProducts)
    const observerRef = useRef<HTMLDivElement>(null);

    useInfiniteScroll({
        onIntersect: () => {
          
        },
        root: observerRef,
        rootMargin: "60px",
        threshold: 0.1,
    })

    return(
        <>
        {
            products?.map((product) => {
                return (
                    <ProductItem key={`${product.id}`} product={product} />
                )
            })
        }
        <div ref={observerRef} style={{ width: "100%",height:'1px',visibility:"hidden" }}/>
        </>
    )
}
export default ProductGrid