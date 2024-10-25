"use client";

import React from "react";
import { useHeaderHeight } from "@/lib/hooks/utils/use-header-height";

interface MainProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Main({ children, className = "", noPadding = false }: MainProps) {
  const headerHeight = useHeaderHeight();

  const style = noPadding ? {} : { paddingTop: `${headerHeight}px` };

  return (
    <main className={className} style={style}>
      {children}
    </main>
  );
}
