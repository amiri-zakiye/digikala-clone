"use client";
import { RefObject, useEffect } from "react";

const useInfiniteScroll = ({
  onIntersect,
  root,
  rootMargin = "30px",
  threshold = 0.1,
}: {
  onIntersect: () => void;
  root: RefObject<Element>;
  rootMargin?: string;
  threshold?: number;
}) => {
  useEffect(() => {
    const currentRoot = root.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { root: null, rootMargin: "30px", threshold: 0.01 }
    );

    observer.observe(currentRoot);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect]);
};

export default useInfiniteScroll;
