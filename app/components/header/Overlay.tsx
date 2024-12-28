import React from "react";
import Image from "next/image";

import styles from "./Overlay.module.css";

function Overlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.first}>
        <Image
          src="/dream_home_icon.png"
          alt="Dream Home Icon"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.second}></div>
      <div className={styles.third}></div>
    </div>
  );
}

export default Overlay;
