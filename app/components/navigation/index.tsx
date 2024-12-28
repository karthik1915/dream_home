"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  shouldHide?: boolean; // The prop to control the hiding behavior
}

function NavBar({ shouldHide = false }: NavBarProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  useEffect(() => {
    if (shouldHide) {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setShowNav(scrollTop > 100); // Show navbar after scrolling 100px
      };

      // Only apply the scroll logic for screens above the 'md' breakpoint
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          window.addEventListener("scroll", handleScroll);
        } else {
          setShowNav(true); // Always show the navbar on smaller screens
          window.removeEventListener("scroll", handleScroll);
        }
      };

      handleResize(); // Call on mount to set the initial state
      window.addEventListener("resize", handleResize); // Handle resizing

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    } else {
      setShowNav(true); // If shouldHide is false, keep the navbar always visible
    }
  }, [shouldHide]);

  return (
    <div className="fixed text-white w-full z-50">
      {/* For large screens, apply the scroll behavior */}
      {shouldHide ? (
        <motion.nav
          className="w-screen relative z-50 backdrop-blur-sm bg-zinc-700 mx-auto py-2 flex items-center px-4 lg:px-24 justify-between"
          initial={{ y: "-100%" }}
          animate={{ y: showNav ? 0 : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            <Link className="navLink" href="/">
              Home
            </Link>
            <Link className="navLink" href="/about">
              About
            </Link>
            <Link className="navLink" href="/members">
              Members
            </Link>
            <Link className="navLink" href="/projects">
              Projects
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="inline-block md:hidden">
            <span onClick={() => setOpen((prev) => !prev)}>
              {open ? <X /> : <Menu />}
            </span>
          </div>
        </motion.nav>
      ) : (
        <div className="w-screen relative backdrop-blur-sm bg-zinc-700 mx-auto py-2 flex items-center px-4 lg:px-24 justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            <Link className="navLink" href="/">
              Home
            </Link>
            <Link className="navLink" href="/about">
              About
            </Link>
            <Link className="navLink" href="/members">
              Members
            </Link>
            <Link className="navLink" href="/projects">
              Projects
            </Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="hidden md:flex">
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="inline-block md:hidden">
            <span onClick={() => setOpen((prev) => !prev)}>
              {open ? <X /> : <Menu />}
            </span>
          </div>
        </div>
      )}

      {/* Mobile Menu (only visible for screens below 'md') */}
      <motion.div
        initial={{ y: "-150%" }}
        animate={{ y: open ? 0 : "-150%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute w-full h-auto z-0 flex flex-col gap-4 p-4 bg-zinc-700 md:hidden"
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/members">Members</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
      </motion.div>
    </div>
  );
}

export default NavBar;
