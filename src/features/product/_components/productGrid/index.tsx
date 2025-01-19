"use client"
import { useEffect, useRef } from "react"
import { useShop } from "@/app/products/context"
import { Filter } from "@/app/products/_components/filtersSidebar/types"
import { Pager } from "@/app/products/context/types"
import styles from "@/features/product/_components/productGrid/styles.module.css";
import { Product } from "@/features/product/types"
import { useSearchParams } from "next/navigation"
import useInfiniteScroll from "./hooks/inifineScroll"
import ProductItem from "./_components/productItem"
import ProductShimmer from "./_components/productShimmer"
import {getProducts} from "@/features/product/apiLayer/product"

const ProductGrid = ({initialProducts,initialPager,initialFilters}:{initialProducts:Product[],initialPager:Pager,initialFilters: Filter}) => {

    const searchParams = useSearchParams()
    const ref = useRef(null)
    const {products, appendProducts,setUpInitialProducts,replaceProducts,resetProducts, pager,isLoading,setloading} = useShop()

    useEffect(() => {
        setUpInitialProducts(initialProducts,initialPager,initialFilters)
    },[])


    useEffect(() => {
        (async() => {
            resetProducts()
            const {data} = await getProducts(1,searchParams)
            const {products: newProducts, pager: newPager, filters: newFilters} = data
            replaceProducts(newProducts,newPager,newFilters)
        })()
    },[searchParams])


    useInfiniteScroll({
        onIntersect: async() => {
            if (pager?.current_page && pager.current_page < pager.total_pages && !isLoading) {
                setloading(true)
                const { current_page } = pager
                const {data} = await getProducts(current_page +  1)
                const {products: newProducts, pager: newPager} = data
                appendProducts(newProducts,newPager)
            }
        },
        root: ref,
        rootMargin: "60px",
        threshold: 0.1,
    })

    return(
        <>
            <div className={styles.productGrid}>
                {
                        products.map((product) => {
                        return (
                            <ProductItem key={`${product.id}`} product={product}/>
                        )
                    })
                }
                {
                    isLoading ?
                        <ProductShimmer />
                        : null
                }
            </div>
            <div ref={ref} style={{ width: "100%",height:'1px',visibility:"hidden" }}/>                 
        </>
    )
}
export default ProductGrid