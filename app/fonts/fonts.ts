import localFont from "next/font/local";

export const geistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const alfaSlab = localFont({
  src: "./AlfaSlab.ttf",
  variable: "--font-alfa-slab",
  weight: "100 900",
});

export const humantBold = localFont({
  src: "./humant/Humant-Bold.otf",
  variable: "--font-humant-bold",
});