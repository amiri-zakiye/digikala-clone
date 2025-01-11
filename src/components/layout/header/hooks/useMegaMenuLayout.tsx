"use client";
import {useLayoutEffect, useRef, useState} from "react";

const useMegaMenuLayout = () => {
    
    const [megaMenuHeight, setMegaMenuHeight] = useState("auto");
    const [subCategoriesContainerHeight, setSubCategoriesContainerHeight] = useState("auto");

    const menuWithDropDownRef = useRef<HTMLAnchorElement | null>(null);
    const mainCategoriesRef = useRef<HTMLUListElement | null>(null)

    useLayoutEffect(() => {
        const updateHeight = () => {
            if (menuWithDropDownRef.current) {
                const elementTop = menuWithDropDownRef.current.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;
                const newHeight = viewportHeight - elementTop - 100;
                setMegaMenuHeight(`${newHeight}px`);
            }
            if(mainCategoriesRef.current){
                const elementHeight = mainCategoriesRef.current.scrollHeight;
                setSubCategoriesContainerHeight(`${elementHeight}px`);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
        };

    }, []);
    

    return {mainCategoriesRef,menuWithDropDownRef,subCategoriesContainerHeight,megaMenuHeight};
}
export default useMegaMenuLayout