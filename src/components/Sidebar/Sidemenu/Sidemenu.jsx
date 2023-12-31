import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LyricsOutlinedIcon from "@mui/icons-material/LyricsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./Sidemenu.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidemenu = () => {
  const menuItems = [
    {
      url: "/home",
      label: "Home",
      icon: HomeIcon,
    },
    {
      url: "/profile",
      label: "Profile",
      icon: AccountCircleOutlinedIcon,
    },
    {
      url: "/search",
      label: "Search",
      icon: SearchOutlinedIcon,
    },
    {
      url: "/featured-playlist",
      label: "Featured Playlist",
      icon: LyricsOutlinedIcon,
    },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {menuItems.map((menuItem, i) => {
        return (
          <NavLink
            to={menuItem.url}
            key={i}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <menuItem.icon className={styles.icon} />
            <h2 className={styles.menuname}>{menuItem.label}</h2>
          </NavLink>
        );
      })}

      <div className={styles.logout} onClick={handleLogout}>
        <LogoutIcon />
        <span className={styles.logoutContent}>Logout</span>
      </div>
    </>
  );
};

export default Sidemenu;
