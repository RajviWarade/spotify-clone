import React from "react";
import styles from "./Sidebar.module.css";
import Sidemenu from "./sidemenu";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img src="src/assets/whitelogo.png" alt="" />

      <Sidemenu />
    </div>
  );
};

export default Sidebar;
