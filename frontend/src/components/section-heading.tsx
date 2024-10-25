import React from "react";
import { cn } from "@/lib/utils";
import type { SectionHeadingProps } from "@/types";

export function SectionHeading(data: Readonly<SectionHeadingProps>) {
  if (!data) return null;
  const { heading, subHeading, text, centered } = data;

  const headingStyle = centered ? "flex flex-col text-center" : "";

  return (
    <div className={cn("container items-center justify-between gap-2 py-12", headingStyle)}>
      <div className="flex flex-col gap-3">
        <h2 className="mb-3 text-3xl font-semibold text-primary-foreground sm:text-4xl">
          {heading}
        </h2>
        <h3 className="mb-5 text-xl font-semibold text-primary-foreground sm:text-2xl">
          {subHeading}
        </h3>
      </div>
      <p className="text-lg text-muted-foreground">{text}</p>
    </div>
  );
}
