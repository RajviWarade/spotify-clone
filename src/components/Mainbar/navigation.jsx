import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import mainstyles from "../../pages/Home/Home.module.css";
import navstyles from "../Mainbar/navigation.module.css";

const navigation = () => {
  return (
    <div className={mainstyles.mainContainer}>
      <div className={navstyles.navbar}>
        <h1>Good Evening!</h1>

        <div>
          <NotificationsIcon sx={{ marginRight: 3, marginTop: 1 }} />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default navigation;
