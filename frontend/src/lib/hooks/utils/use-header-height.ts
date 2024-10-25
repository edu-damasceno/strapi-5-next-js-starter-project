"use client";

import { useState, useEffect } from "react";

export function useHeaderHeight() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    function updateHeaderHeight() {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
        console.log("HEADER HEIGHT",header.offsetHeight);
      }
    }

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return headerHeight;
}
