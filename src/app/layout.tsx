import type { Metadata } from "next";
import Icons from "@/components/ui/Icons";
import Header from "@/components/layout/header";

import "@/styles/globals.css";
import { iranYekan, CubeFontIcon } from "@/styles/fonts";
import StoreProvider from "@/lib/store/provider";
import NavigationProgressBar from "@/components/ui/navigationProgressBar";
import { HeroUIProvider } from "@heroui/react";

export const metadata: Metadata = {
  title: "دیجی کالا",
  description: "دیجی کالا - توسعه داده شده توسط زکیه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl">
      <body className={`${iranYekan.className} ${CubeFontIcon.className}`}>
        <NavigationProgressBar />
        <HeroUIProvider>
          <StoreProvider>
            <Header />
            {children}
          </StoreProvider>
        </HeroUIProvider>
        <div id="modal-root" />
        <Icons />
      </body>
    </html>
  );
}
