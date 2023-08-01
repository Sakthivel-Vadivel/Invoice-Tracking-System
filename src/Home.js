import React from "react";
import { useNavigate } from "react-router";
import Login from "./Login";
//import "./MainPage.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import Image from "material-ui-image";
import Typography from "@mui/material/Typography";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bgmain">
        <Login />
      </div>
    </>
  );
};

export default Home;
