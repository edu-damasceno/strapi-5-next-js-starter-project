"use client";

import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";
import { useHeaderHeight } from "@/lib/hooks/utils/use-header-height";
import { useLockBody } from "@/lib/hooks/utils/use-lock-body";

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

export function MobileNavbar({
  children,
  setMenuOpen,
}: {
  children: ReactNode;
  setMenuOpen: (open: boolean) => void;
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    const newState = !showMobileMenu;
    setShowMobileMenu(newState);
    setMenuOpen(newState);
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="flex items-center space-x-2 text-white z-50 relative">
        {showMobileMenu ? <X /> : <Menu />}
      </button>
      {showMobileMenu && <MobileMenu onClose={() => toggleMenu()}>{children}</MobileMenu>}
    </div>
  );
}
