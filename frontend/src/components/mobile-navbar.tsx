"use client";

import { Menu, X } from "lucide-react";
import { ReactNode, useState, useEffect } from "react";

import { useLockBody } from "@/lib/hooks/utils/use-lock-body";

function MobileMenu({ onClose, children }: { onClose: () => void; children: ReactNode }) {
  useLockBody();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <div
      className="absolute w-full left-0 right-0 top-0 h-[calc(100vh)] inset-x-0 bottom-0 z-50 bg-black/40 lg:hidden"
      style={{ top: `${headerHeight}px` }}
      onClick={onClose}
    >
      {children}
    </div>
  );
}

export function MobileNavbar({ children }: { children: ReactNode }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <button
        className="flex items-center space-x-2 lg:hidden text-white"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <X /> : <Menu />}
      </button>
      {showMobileMenu && (
        <MobileMenu onClose={() => setShowMobileMenu(false)}>{children}</MobileMenu>
      )}
    </>
  );
}
