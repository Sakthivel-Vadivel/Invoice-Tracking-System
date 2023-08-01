import React, { useState } from "react";
//import "./Login.css";
import { useNavigate } from "react-router";
//import Navbar from "./Navbar";
import { useEffect, useContext } from "react";
import AddInvoice from "./AddBusiness";
import AuthContext from "./context/auth-context";
//import Logout from "../Logout.js";
//import UserSearch from "./UserSearch";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPass] = useState("");
  // const [userLogin, setUserLogin] = useState(true);
  // const [managerLogin, setManagerLogin] = useState(false);

  const [userLogin, setUserLogin] = useState("USER");

  // const handleClick = () => {
  //   if () {
  //     setOpen(true);
  //   }
  // };

  const handleChange = (event) => {
    if (userLogin === "USER") {
      setUserLogin("MANAGER");
    } else if (userLogin === "MANAGER") {
      setUserLogin("USER");
    }
  };
  console.log(userLogin);

  const navigate = useNavigate();
  //const obj = useContext(AuthContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInfo = localStorage.getItem("isSubmitted", "1");

  //   if (storedUserLoggedInInfo === "1") {
  //     setIsSubmitted(true);
  //     // console.log("logged in");
  //   } else {
  //     // console.log("logged out");
  //     // setIsLoggedIn(false);   //default  restart
  //   }
  // }, []);

  // const userLoginHandler = () => {
  //   console.log("heloo user");
  //   setUserLogin(true);
  // };
  // const managerLoginHandler = () => {
  //   console.log("heloo manager");
  //   setManagerLogin(true);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loadedData = [];

    if (userLogin === "USER") {
      const fetchData = async () => {
        const response = await fetch(
          "https://food-order-cc4b7-default-rtdb.firebaseio.com/invoiceuser.json"
        );

        if (!response.ok) {
          throw new Error("couldn't fetch data from db");
        }

        const data = await response.json();
        console.log("userlogin fetch", data);

        for (const key in data) {
          loadedData.push({
            id: key,
            email: data[key].email,
            password: data[key].password,
            username: data[key].username,
            role: data[key].role,
          });
        }

        const usersData = loadedData.find((user) => user.username === username);

        if (usersData) {
          if (usersData.password !== password) {
            alert("password is invalid");
          } else {
            localStorage.setItem("isSubmitted", "1");
            setIsSubmitted(true);

            navigate("/manager");
          }
        } else {
          alert("Entered username is invalid");
        }
      };
      fetchData();
    } else if (userLogin === "MANAGER") {
      const fetchData1 = async () => {
        const response = await fetch(
          "https://food-order-cc4b7-default-rtdb.firebaseio.com/invoicemanager.json"
        );

        if (!response.ok) {
          throw new Error("couldn't fetch data from db");
        }

        const data = await response.json();
        console.log("ManagerLogin fetch", data);

        for (const key in data) {
          loadedData.push({
            id: key,
            email: data[key].email,
            password: data[key].password,
            username: data[key].username,
            role: data[key].role,
          });
        }

        const usersData = loadedData.find((user) => user.username === username);

        if (usersData) {
          if (usersData.password !== password) {
            alert("password is invalid");
          } else {
            localStorage.setItem("isSubmitted", "1");
            setIsSubmitted(true);

            navigate("/Admin");
          }
        } else {
          alert("username is invalid");
        }
      };
      fetchData1();
    } else {
      alert("select any role");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isSubmitted: isSubmitted,
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#339ba5" }}>
        <Toolbar>
          {/* <HouseSidingIcon /> {"   "} */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img
              src="image4.png"
              style={{ width: "12%", marginTop: "0px", marginLeft: "10px" }}
            />
          </Typography>
          <Button
            variant="contained"
            // startIcon={<AccountCircleOutlinedIcon />}
            onClick={() => navigate("/Signup")}
            sx={{ backgroundColor: "#dce775", color: "#880e4f" }}
          >
            REGISTER
          </Button>
        </Toolbar>
      </AppBar>
      <div className="userhome-container">
        {/* <Navbar /> */}
        {/* {isSubmitted && (
          <>
            

            <p> hello {username}</p>

            <AddInvoice />
          </>
        )} */}
        {!isSubmitted && (
          <div className="good">
            <div className="auth-form-container">
              {/* <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  label="User"
                  onClick={userLoginHandler}
                />
                <BottomNavigationAction
                  label="Manager"
                  onClick={managerLoginHandler}
                />
              </BottomNavigation> */}

              {/* <ToggleButtonGroup
                color="primary"
                value={value}
                exclusive
                onChange={(event, newAlignment) => {
                  setValue(!newAlignment);
                }}
                aria-label="Platform"
              >
                <ToggleButton defaultChecked value="true">
                  USER
                </ToggleButton>
                <ToggleButton value="false">MANAGER</ToggleButton>
              </ToggleButtonGroup> */}

              <FormControl sx={{ alignItems: "center" }}>
                {/* <FormLabel>Select Role</FormLabel> */}
                <FormHelperText>Select Role</FormHelperText>
                <FormGroup>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>USER</Typography>
                    <Switch
                      inputProps={{ "aria-label": "ant design" }}
                      onChange={handleChange}
                      color="primary"
                    />
                    <Typography>MANAGER</Typography>
                  </Stack>
                </FormGroup>
              </FormControl>
              <form className="login-form" onSubmit={handleSubmit}>
                <Stack spacing={5}>
                  <h1 style={{ color: "#a84466" }}>{userLogin} LOGIN</h1>
                  <TextField
                    id="name"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    name="name"
                    type="text"
                    required
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    required
                  />

                  <Stack direction="row" spacing={35}>
                    <Button type="submit" variant="contained" color="success">
                      Login
                    </Button>
                  </Stack>
                </Stack>
                <Button
                  className="link-btn"
                  onClick={() => navigate("/Signup")}
                >
                  Don't have an account? Register here.
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </AuthContext.Provider>
  );
};
export default Login;
