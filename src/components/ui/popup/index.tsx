import { createPortal } from "react-dom";
import { ReactNode } from "react";

const Popup = ({ children }: { children: ReactNode }) => {
  const modalRoot = document.getElementById("modal-root")!;
  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/30 z-20" />
      <div
        className={
          "fixed top-1/2 z-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[150px]"
        }
      >
        {children}
      </div>
    </>,
    modalRoot
  );
};
export default Popup;
