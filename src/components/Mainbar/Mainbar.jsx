import React from "react";
import styles from "./Mainbar.module.css";

const Mainbar = ({ children }) => {
  return <div className={styles.mainbar}>{children}</div>;
};

export default Mainbar;
