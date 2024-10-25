import type { NavLink } from "@/types";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { useMenu } from "@/contexts/menu-context";

interface HeaderProps {
  data: {
    logoImage: {
      url: string;
      alternativeText: string | null;
      width: number;
      height: number;
    };
    logoText: string;
    navItems: NavLink[];
    cta: NavLink;
  };
  isHomePage: boolean;
  isScrolled: boolean;
}

export function Header({ data, isHomePage, isScrolled }: Readonly<HeaderProps>) {
  if (!data) return null;
  const { logoImage, logoText, navItems, cta } = data;
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? isMenuOpen
            ? "bg-black/90"
            : "bg-black/70 shadow-md"
          : isHomePage && !isMenuOpen
            ? "bg-black/15"
            : "bg-black/90"
      }`}
    >
      <div className="container flex items-center justify-between gap-10 py-4 transition-all duration-300 ease-in-out">
        <Link href="/" className="flex w-24 sm:w-36" onClick={() => setIsMenuOpen(false)}>
          {logoImage && (
            <Image
              src={`http://localhost:1337${logoImage.url}`}
              alt={logoImage.alternativeText || "SurfSup"}
              width={logoImage.width}
              height={logoImage.height}
            />
          )}

          {logoText && (
            <span className="font-heading text-xl font-bold text-white">{logoText}</span>
          )}
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          <nav className="hidden items-center gap-10 lg:flex justify-end">
            {navItems &&
              navItems.map((item) => (
                <Link
                  href={item.href}
                  className="flex cursor-pointer items-center text-lg text-white transition-colors hover:text-gray-200 sm:text-sm font-bold tracking-wider"
                  key={item.text}
                  target={item.isExternal ? "_blank" : "_self"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
          </nav>
          {cta && (
            <div className="hidden items-center gap-2 lg:flex">
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black font-bold tracking-wider"
              >
                <Link
                  href={cta.href}
                  className="cursor-pointer font-bold"
                  target={cta.isExternal ? "_blank" : "_self"}
                >
                  {cta.text}
                </Link>
              </Button>
            </div>
          )}
        </div>
        <MobileNavbar>
          <div className="absolute flex items-center gap-10 bg-white left-0 right-0 top-0 rounded-b-lg py-4 container text-black shadow-xl text-sm">
            <nav className="flex flex-col gap-1 pt-2 w-full">
              {navItems &&
                navItems.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    className="flex w-full cursor-pointer items-center rounded-md p-2 text-gray-600 hover:text-black justify-center font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}

              {cta && (
                <Button asChild size="lg" className="mt-2 font-bold">
                  <Link
                    href={cta.href}
                    className="cursor-pointer"
                    target={cta.isExternal ? "_blank" : "_self"}
                  >
                    {cta.text}
                  </Link>
                </Button>
              )}
            </nav>
          </div>
        </MobileNavbar>
      </div>
    </header>
  );
}
