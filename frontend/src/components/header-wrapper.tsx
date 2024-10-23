"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/header";

interface HeaderWrapperProps {
  data: any; // Use the actual type from your Header component
}

export function HeaderWrapper({ data }: HeaderWrapperProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Header data={data} isHomePage={isHomePage} isScrolled={isScrolled} />;
}
