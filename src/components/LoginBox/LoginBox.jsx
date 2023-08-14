import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router-dom";
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
  justify-content:center;
  align-items:center;
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

  const handleLogin = () => {
    navigate('/home');
  }


  return (
    <BigDiv>
      <LoginContainer elevation={3}>
        <LogoContainer>
            <img src="src/assets/logo.png" alt="spotify logo" />
        </LogoContainer>


        <LoginName>Login</LoginName>

        <FormGroup>
        <InputBox startAdornment={<AccountCircleOutlinedIcon sx={{padding: "5px", fontSize: "20px", }} />} placeholder="Username" />
        <InputBox startAdornment={<LockIcon sx={{padding: "5px", fontSize: "20px", }} />} placeholder="Password" />

        <LoginBtn variant="contained" onClick={handleLogin}>Log in</LoginBtn>
        </FormGroup>
      </LoginContainer>
    </BigDiv>
  );
};

export default LoginBox;
