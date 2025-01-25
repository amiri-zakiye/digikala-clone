import { useRef, useState } from "react";

const useCartDropDownToggle = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const displayCartDropdown = () => {
    clearTimeout(timeoutRef.current ?? undefined);
    setIsDropdownVisible(true);
  };

  const hideCartDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 300);
  };

  return { isDropdownVisible, displayCartDropdown, hideCartDropdown };
};
export default useCartDropDownToggle;
