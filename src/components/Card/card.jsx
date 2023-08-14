import React from "react";
import styles from "./card.module.css";

const Card = ({ imageSrc, playlistName, description }) => {
  return (
    <div className={styles.card}>
      <img alt="Girl Image" src={imageSrc} />
      <div className={styles.frame}>
        <div className={styles.textname}>{playlistName}</div>
        <p className={styles.para}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
