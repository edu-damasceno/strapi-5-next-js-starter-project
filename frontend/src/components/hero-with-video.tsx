"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { HeroWithVideoProps } from "@/types";
import { YouTubeBackground } from "./youtube-background";

export function HeroWithVideo(data: Readonly<HeroWithVideoProps>) {
  if (!data) return null;
  const { heading, text, youtubeVideoId, buttonLink } = data;

  return (
    <section className="relative w-full h-[50vh] md:h-screen flex items-center justify-center">
      <YouTubeBackground videoId={youtubeVideoId} />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="container mx-auto px-4 py-8 sm:py-16 relative z-10">
        <div className="p-4 sm:p-8 max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
            {heading}
          </h1>
          {text && (
            <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-center text-gray-300 hidden md:block">
              {text}
            </p>
          )}
          <div className="w-full flex justify-center mt-6">
            {buttonLink &&
              buttonLink.map((link) => (
                <Button
                  key={link.text}
                  size="lg"
                  variant={link.isPrimary ? "default" : "outline"}
                  asChild
                  className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10 font-bold"
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
