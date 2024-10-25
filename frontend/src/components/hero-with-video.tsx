"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { HeroWithVideoProps } from "@/types";
import { YouTubeBackground } from "./youtube-background";

export function HeroWithVideo(data: Readonly<HeroWithVideoProps>) {
  if (!data) return null;
  const { heading, text, youtubeVideoId, buttonLink } = data;

  return (
    <section className="relative flex h-[50vh] w-full items-center justify-center md:h-screen">
      <YouTubeBackground videoId={youtubeVideoId} />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container relative z-10 mx-auto px-4 py-8 sm:py-16">
        <div className="mx-auto max-w-3xl p-4 sm:p-8">
          <h1 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {heading}
          </h1>
          {text && (
            <p className="mt-2 hidden text-center text-base text-gray-300 sm:mt-4 sm:text-lg md:block md:text-xl">
              {text}
            </p>
          )}
          <div className="mt-6 flex w-full justify-center">
            {buttonLink &&
              buttonLink.map((link) => (
                <Button
                  key={link.text}
                  size="lg"
                  variant={link.isPrimary ? "default" : "outline"}
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
      </div>
    </section>
  );
}
