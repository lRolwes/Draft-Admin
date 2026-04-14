"use client";

import Image from "next/image";

const LOGO_FULL_COLOR_LIGHT =
  "/images/go-raise-dough-logo/03-svg/go-raise-dough-logo_A1_FullColor_Light%20Background.svg";

const LOGO_WHITE =
  "/images/go-raise-dough-logo/03-svg/go-raise-dough-logo_A6_SingleColor_White.svg";

type BrandLogoProps = {
  variant: "light" | "onDark";
  className?: string;
  priority?: boolean;
};

/**
 * Logos from `public/images/go-raise-dough-logo`. Light = full color on pale surfaces; onDark = white mark on midnight teal.
 */
export function BrandLogo({ variant, className, priority }: BrandLogoProps) {
  const src = variant === "onDark" ? LOGO_WHITE : LOGO_FULL_COLOR_LIGHT;
  return (
    <Image
      src={src}
      alt="Go Raise Dough"
      width={200}
      height={56}
      className={className}
      priority={priority}
    />
  );
}
