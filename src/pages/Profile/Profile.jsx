import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Avatar from "@mui/material/Avatar";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styles from "../Profile/Profile.module.css";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import axios from "axios";

const StyledButton = styled(Button)`
  background-color: #1ed760;
  border-radius: 15px;
`;

const Profile = () => {
  const [userData, setUserData] = useState({ images: [] });
  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("https://api.spotify.com/v1/me", config)
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleButtonClicked = () => {
    window.location.href =
      "https://open.spotify.com/user/31hzdzeh2u44r7gllgxypyrgxpaq";
  };
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <h1>Profile</h1>
        <div className={styles.profileContainer}>
          <Avatar
            alt="Cindy Baker"
            src={userData?.images[1]?.url}
            className={styles.image}
            sx={{ width: 120, height: 120 }}
          />
          <div>
            <h4>{userData.display_name}</h4>
            <h6>{userData.email}</h6>
            <StyledButton
              onClick={handleButtonClicked}
              variant="contained"
              endIcon={<OpenInNewIcon />}
            >
              Open in Spotify
            </StyledButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
