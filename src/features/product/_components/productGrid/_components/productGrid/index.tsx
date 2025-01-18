"use client"
import ProductItem from "../productItem"
import { useEffect, useRef } from "react"
import useInfiniteScroll from "../../hooks/inifineScroll"
import ProductShimmer from "../productShimmer"
import { useShop } from "@/app/products/context"
import productApiClient from "../../../../apiLayer/product"
import { Filter } from "@/app/products/_components/filtersSidebar/types"
import { Pager } from "@/app/products/context/types"
import styles from "@/features/product/_components/productGrid/styles.module.css";

const ProductGrid = ({initialPager,initialFilters}:{initialPager:Pager,initialFilters: Filter}) => {

    const ref = useRef(null)
    const {products, appendProducts,setUpInitialProducts, pager,isLoading,setloading} = useShop()

    useEffect(() => {
        setUpInitialProducts(initialPager,initialFilters)
    },[])


    useInfiniteScroll({
        onIntersect: async() => {
            if (pager?.current_page && pager.current_page < pager.total_pages && !isLoading) {
                setloading(true)
                const { current_page } = pager
                const {data} = await productApiClient.getProducts(current_page +  1)
                const {products: newProducts, pager: newPager} = data
                appendProducts(newProducts,newPager)
                setloading(false)
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
                            products?.map((product) => {
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