"use client";

import React from "react";
import Image from "next/image";

import styles from "./Overlay.module.css";
import { FloatingDock } from "@/components/aceternity/floating-dock";
import { Box } from "lucide-react";
import Link from "next/link";

function Overlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.first}>
        <div className="flex items-center justify-evenly">
          <Image
            src="/dream_home_icon.png"
            alt="Dream Home Icon"
            width={200}
            height={200}
          />
          <div className="flex flex-col gap-2">
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
        </div>
        <Image
          src="/dh_header.png"
          alt="Dream Home Icon"
          width={600}
          height={300}
        />
        <p>pictures and other quotes or anything small that can be displayed</p>
      </div>
      <div className={styles.second}>
        <p>Any Announcement poster or details can we view here</p>
        <p>Any featured things to prioritize first</p>
      </div>
      <div className={styles.third}>
        <FloatingDock
          items={[
            { title: "Social Link 1", icon: <Box />, href: "" },
            { title: "Social Link 2", icon: <Box />, href: "" },
            { title: "Social Link 3", icon: <Box />, href: "" },
            { title: "Social Link 4", icon: <Box />, href: "" },
            { title: "Social Link 5", icon: <Box />, href: "" },
            { title: "Social Link 6", icon: <Box />, href: "" },
          ]}
        />
      </div>
    </div>
  );
}

export default Overlay;
