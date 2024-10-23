"use client";

import { useEffect, useState } from "react";

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  const [isFixed, setIsFixed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.01; // 50% of viewport height
      if (!isMobile) {
        setIsFixed(window.scrollY < scrollThreshold);
      } else {
        setIsFixed(false);
      }
    };

    checkMobile();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      checkMobile();
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <section
      className={`text-4xl md:text-6xl font-bold text-white py-4 md:py-8 transition-all duration-300
        ${
          !isMobile && isFixed
            ? "fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent"
            : "relative bg-black/90"
        }`}
    >
      <h1 className="container ">{title}</h1>
    </section>
  );
}
