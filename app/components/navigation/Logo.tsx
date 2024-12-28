import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo({
  width = 65,
  height = 65,
  orientation = "horizondal",
}: {
  width?: number;
  height?: number;
  orientation?: "vertical" | "horizondal";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "items-center gap-2 inline-flex",
        orientation === "vertical" ? "flex-col justify-center gap-1" : ""
      )}
    >
      <Image
        src="/dream_home_icon.png"
        alt="logo icon"
        width={width}
        height={height}
      />
      <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 font-[family-name:var(--font-alfa-slab)] tracking-wider">
        DREAM HOME
      </p>
    </Link>
  );
}

export default Logo;
