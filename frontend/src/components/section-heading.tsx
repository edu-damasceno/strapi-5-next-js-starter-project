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
        <h2 className="text-3xl font-semibold sm:text-4xl text-primary-foreground mb-3">
          {heading}
        </h2>
        <h3 className="text-1xl font-semibold sm:text-2xl text-primary-foreground mb-5">
          {subHeading}
        </h3>
      </div>
      <p className="text-lg text-muted-foreground">{text}</p>
    </div>
  );
}
