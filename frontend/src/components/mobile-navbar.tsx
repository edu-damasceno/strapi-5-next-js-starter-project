"use client";

import { Menu, X } from "lucide-react";
import { ReactNode } from "react";
import { useHeaderHeight } from "@/lib/hooks/utils/use-header-height";
import { useLockBody } from "@/lib/hooks/utils/use-lock-body";
import { useMenu } from "@/contexts/menu-context";

function MobileMenu({ onClose, children }: { onClose: () => void; children: ReactNode }) {
  useLockBody();
  const headerHeight = useHeaderHeight();

  return (
    <div
      className="fixed w-full left-0 right-0 top-0 h-[calc(100vh)] inset-x-0 bottom-0 z-[9998] bg-black/40 lg:hidden"
      style={{ top: `${headerHeight}px` }}
      onClick={onClose}
    >
      <div className="relative z-[9999]" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function MobileNavbar({ children }: { children: ReactNode }) {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="flex items-center space-x-2 text-white z-50 relative">
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)}>{children}</MobileMenu>}
    </div>
  );
}
