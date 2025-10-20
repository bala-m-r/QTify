import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, onClick, type = "button", ...rest }) {
  return (
    <button type={type} onClick={onClick} className={styles.button} {...rest}>
      {children}
    </button>
  );
}


