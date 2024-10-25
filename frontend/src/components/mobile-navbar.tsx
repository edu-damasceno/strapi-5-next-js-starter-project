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
      className="fixed inset-0 z-[9998] h-[calc(100vh)] w-full bg-black/40 lg:hidden"
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
      <button onClick={toggleMenu} className="relative z-50 flex items-center space-x-2 text-white">
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)}>{children}</MobileMenu>}
    </div>
  );
}
