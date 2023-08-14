import React from "react";
import Layout from "../../components/Layout/Layout";
import Avatar from "@mui/material/Avatar";
import profileStyles from "../Profile/Profile.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import mainStyles from "../Profile/Profile.module.css";
import imageStyles from "../Profile/Profile.module.css";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  background-color: #1ed760;
  border-radius: 15px;
`;

const Profile = () => {
  return (
    <Layout>
      <div className={mainStyles.mainContainer}>
        <h1>Profile</h1>
        <div className={profileStyles.profileContainer}>
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/2.jpg"
            className={imageStyles.image}
          />
          <div>
            <h4>User Display Name</h4>
            <h6>user234@gmail.com</h6>
            <StyledButton variant="contained" endIcon={<OpenInNewIcon />}>
              Open in Spotify
            </StyledButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
