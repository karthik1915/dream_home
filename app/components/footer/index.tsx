import React from "react";
import Logo from "../navigation/Logo";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-zinc-800 text-slate-100">
      <div className="flex items-center justify-between  p-4">
        <div>
          <Logo width={100} height={100} orientation="vertical" />
        </div>
        <div className="flex flex-col gap-3  w-28 md:40">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#details">Details</Link>
        </div>
        <div className="flex flex-col gap-3  w-28 md:40">
          <Link href="/projects">Projects</Link>
          <Link href="/members">Members</Link>
          <Link href="/achievements">Acheivements</Link>
        </div>
      </div>
      <hr />
      <p className="text-sm text-center py-2">
        &copy; 2025 all rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
