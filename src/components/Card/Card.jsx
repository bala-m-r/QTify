import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card({ image, title, follows, likes, showLikes = false }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.bottom}>
        <p className={styles.title}>{title}</p>
        <Chip label={`${showLikes ? likes : follows} ${showLikes ? "Likes" : "Follows"}`} size="small" />
      </div>
    </div>
  );
}


