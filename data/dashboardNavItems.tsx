import React from "react";

export type NavItem = {
  icon: React.ReactNode;
  title: string;
  url: string;
};

export default [
  {
    icon: (
      <svg width={24} height={24}>
        <use xlinkHref="#order"></use>
      </svg>
    ),
    title: "سفارش‌ها",
    url: "#",
  },
  {
    icon: (
      <svg width={24} height={24}>
        <use xlinkHref="#time"></use>
      </svg>
    ),
    title: "بازدید‌های‌ اخیر",
    url: "#",
  },
  {
    icon: (
      <svg width={24} height={24}>
        <use xlinkHref="#street"></use>
      </svg>
    ),
    title: "آدرس‌ها",
    url: "#",
  },
  {
    icon: (
      <svg width={24} height={24}>
        <use xlinkHref="#cardGift"></use>
      </svg>
    ),
    title: "کارت هدیه",
    url: "#",
  },
] as NavItem[];
