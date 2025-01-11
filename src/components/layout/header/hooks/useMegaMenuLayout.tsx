"use client"
import { useLayoutEffect } from "react";
import { MegaMenuContextRefsType } from "../context/types";

export const useMegaMenuLayout = ({menuWithDropDownRef,mainCategoriesRef,dispatch }: MegaMenuContextRefsType) => {
  
  useLayoutEffect(() => {
    const updateHeight = () => {
        if (menuWithDropDownRef?.current) {
            const elementTop = menuWithDropDownRef.current.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            const newHeight = viewportHeight - elementTop - 100;
            dispatch({ type: "SET_MEGA_MENU_HEIGHT", payload: `${newHeight}px` });
        }
        if(mainCategoriesRef?.current){
            const elementHeight = mainCategoriesRef.current.scrollHeight;
            dispatch({ type: "SET_SUB_CATEGORIES_HEIGHT", payload: `${elementHeight}px` });
        }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
        window.removeEventListener("resize", updateHeight);
    };

    }, []);
};