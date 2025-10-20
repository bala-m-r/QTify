import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.heading}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.heading}>Over thousands podcast episodes</h1>
      </div>
      <div>
        <svg width="212" height="212" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12v7a3 3 0 003 3h1a2 2 0 002-2v-5a2 2 0 00-2-2H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-1a2 2 0 00-2 2v5a2 2 0 002 2h1a3 3 0 003-3v-7c0-5.52-4.48-10-10-10z" fill="#34c94b"/>
        </svg>
      </div>
    </div>
  );
}


