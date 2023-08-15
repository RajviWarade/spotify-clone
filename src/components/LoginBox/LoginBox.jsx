import React, { useEffect } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Paper,
  InputBase,
  Typography,
  FormGroup,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import { AlternateEmail } from "@mui/icons-material";

const BigDiv = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginContainer = styled(Paper)`
  background-color: #242424;
  padding: 70px 57px;
  height: 20rem;
  width: 45%;
  border-radius: 15px;
`;

const LogoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginName = styled(Typography)`
  color: #fff;
  font-family: "Raleway-SemiBold", "Helvetica", sans-serif;
  font-size: 20px;
  margin-top: 10px;
`;

const InputBox = styled(InputBase)`
  background-color: #0e0e0e;
  color: white;
  padding: 1rem;
  width: 100%;
  border-radius: 40px;
  margin-top: 10px;
  height: 5vh;
`;

const LoginBtn = styled(Button)`
  background-color: #1ed760;
  border-radius: 30px;
  margin: 2rem auto;
`;

const LoginBox = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }

    const urlAfterHash = window.location.hash.slice(1);

    if (urlAfterHash) {
      const tokenDetails = urlAfterHash.split("&");
      const tokenPair = tokenDetails[0];
      const tokenValue = tokenPair.split("=")[1];
      localStorage.setItem("token", tokenValue);

      navigate("/home");
    }
  });

  const baseURI = "https://accounts.spotify.com";
  const clientId = "bc4bd0c283d44bc1a7b458fdcdabd5ee";
  const redirectUri = "http://localhost:5173/";
  const scopes = [
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-email",
    "user-read-private",
  ];

  const spotifyAuthLink = `${baseURI}/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scopes}`;

  return (
    <BigDiv>
      <LoginContainer elevation={3}>
        <LogoContainer>
          <img src="src/assets/logo.png" alt="spotify logo" />
        </LogoContainer>

        <LoginName>Login</LoginName>

        <FormGroup>
          <InputBox
            startAdornment={
              <AccountCircleOutlinedIcon
                sx={{ padding: "5px", fontSize: "20px" }}
              />
            }
            placeholder="Username"
          />
          <InputBox
            startAdornment={
              <LockIcon sx={{ padding: "5px", fontSize: "20px" }} />
            }
            placeholder="Password"
          />

          <Link to={spotifyAuthLink} style={{ margin: "auto" }}>
            <LoginBtn variant="contained">Login With Spotify!</LoginBtn>
          </Link>
        </FormGroup>
      </LoginContainer>
    </BigDiv>
  );
};

export default LoginBox;
