import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Image from "next/image";

function NavBar() {
  return (
    <>
      <Image
        src="/dh_header.png"
        alt="Dream Home Header Image"
        width={100}
        height={100}
      />
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className=" flex items-center gap-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/members">Members</Link>
          <Link href="/projects">Projects</Link>
        </div>
        <div>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
