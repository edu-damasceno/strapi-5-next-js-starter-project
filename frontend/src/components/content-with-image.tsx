import React from "react";
import type { ContentWithImageProps } from "@/types";
import { cn } from "@/lib/utils";
import { StrapiImage } from "./strapi-image";
import { Button } from "./ui/button";
import Link from "next/link";

export function ContentWithImage(data: Readonly<ContentWithImageProps>) {
  if (!data) return null;
  const { reverse, image, heading, subHeading, text, buttonLink } = data;
  const revereStyle = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section
      className={cn("container flex flex-col gap-10 py-12 md:items-center md:gap-12", revereStyle)}
    >
      <div className="relative flex-1">
        <StrapiImage
          src={image.url}
          alt={image.name}
          width={713}
          height={497.7}
          className="rounded-xl border border-border shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="text-left text-2xl font-semibold text-primary-foreground sm:text-3xl">
            {heading}
          </h2>
          <span>{subHeading}</span>
        </div>
        <p className="max-w-lg text-left text-lg text-muted-foreground">{text}</p>
        <div className="flex w-full justify-start gap-3">
          {buttonLink &&
            buttonLink.map((link) => (
              <Button
                key={link.text}
                size="lg"
                variant={link.isPrimary ? "default" : "secondary"}
                asChild
                className="h-12 cursor-pointer border-border text-base font-bold sm:h-14 sm:px-10"
              >
                <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
                  {link.text}
                </Link>
              </Button>
            ))}
        </div>
      </div>
    </section>
  );
}
