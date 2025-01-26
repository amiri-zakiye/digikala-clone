"use client";
import Image from "next/image";
import Link from "next/link";

export default function GlobalError() {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <Image src="/page-not-found.png" alt="error" width={571} height={256} />
      <h1 className="text-2xl font-bold mb-5">خطایی رخ داده است</h1>
      <Link
        href="/"
        className="text-secondary-700 text-body-2 flex items-center"
      >
        صفحه اصلی
        <svg width={18} height={18} className="fill-secondary-700">
          <use xlinkHref="#chevronLeft"></use>
        </svg>
      </Link>
    </div>
  );
}
