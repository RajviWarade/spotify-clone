import React from "react";
import styles from "./section.module.css";

const section = ({ heading, rightheading }) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.heading}>{heading}</h2>
      <h3 className={styles.headingtwo}>{rightheading}</h3>
    </div>
  );
};

export default section;
