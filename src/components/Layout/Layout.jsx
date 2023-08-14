import React from "react";
import styles from "./Layout.module.css";
import Sidebar from "./../Sidebar/Sidebar";
import Mainbar from "./../Mainbar/Mainbar";
import Player from "./../Player/Player";

const Layout = ({ children }) => {
  return (
    <div>
      <div className={styles.container}>
        <Sidebar />
        <Mainbar children={children} />
      </div>

      <Player />
    </div>
  );
};

export default Layout;
