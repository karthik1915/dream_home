import React from "react";
import Image from "next/image";
// import Overlay from "./Overlay";

function Header() {
  return (
    <header>
      <Image
        src="/group_picture.jpg"
        alt="group picture"
        width={1920} // Set a large width to ensure proper scaling
        height={1000}
        className="w-full h-[34vh] lg:h-screen object-cover"
      />
      {/* <Overlay /> */}
    </header>
  );
}

export default Header;
