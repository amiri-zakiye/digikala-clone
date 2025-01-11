"use client"
import { useRef } from "react";

export const useToggleMegaMenu = (dispatch: React.Dispatch<any>) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const displayMegaMenu = () => {
    clearTimeout(timeoutRef.current ?? undefined);
    dispatch({ type: "SET_IS_MEGA_MENU_VISIBLE", payload: true });
  };

  const hideMegaMenu = () => {
    timeoutRef.current = setTimeout(() => {
      dispatch({ type: "SET_IS_MEGA_MENU_VISIBLE", payload: false });
    }, 300);
  };

  return { displayMegaMenu, hideMegaMenu };
};