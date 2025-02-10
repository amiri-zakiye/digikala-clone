"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NavigationProgressBar = () => {
  return (
    <ProgressBar
      height="2px"
      color="var(--primary-700)"
      options={{ showSpinner: false }}
      shallowRouting={false}
    />
  );
};
export default NavigationProgressBar;
