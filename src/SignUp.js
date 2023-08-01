import React, { useRef } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
//import Navbar from "./Navbar";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PhoneInput from "react-phone-input-2";
import Snackbar from "@mui/material/Snackbar";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [role, setRole] = useState("");
  const [value, setValue] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!valid) {
      setOpen(true);
    }
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const userNameRef = useRef("");
  const passwordRef = useRef("");
  const emailRef = useRef("");

  // const passwordCheck = () => {
  //   if (passwordRef.current.value === confirmpasswordRef.current.value) {
  //     setIsValid(true);
  //   } else {
  //     alert("password is not matched");
  //   }
  // };

  const valid =
    userNameRef.current.value === "" ||
    emailRef.current.value === "" ||
    passwordRef.current.value === "" ||
    role === "" ||
    phoneNumber.length < 9;

  const handleInputChange = (event) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
    // Format the phone number as XXX-XXX-XXXX
    const formattedPhoneNumber = inputPhoneNumber.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "$1-$2-$3"
    );
    setPhoneNumber(formattedPhoneNumber);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: emailRef.current.value,
      username: userNameRef.current.value,
      password: passwordRef.current.value,
      role: role,
      mobile: phoneNumber,
    };
    console.log(userData.mobile);
    if (valid) {
      alert("please fill all the mandatory field");
      return;
    } else {
      setIsValid(true);
    }
    console.log("won the valid", valid);
    if (role === "user") {
      const response = await fetch(
        "https://food-order-cc4b7-default-rtdb.firebaseio.com/invoiceuser.json",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("UPDATE user", data);
      navigate("/login");
    } else {
      const response1 = await fetch(
        "https://food-order-cc4b7-default-rtdb.firebaseio.com/invoicemanager.json",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = await response1.json();
      console.log("UPDATE manager", data);
      navigate("/login");
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#339ba5" }}>
        <Toolbar sx={{ color: "success" }}>
          {/* <HouseSidingIcon /> {"   "} */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}
          >
            <img
              src="image4.png"
              style={{ width: "12%", marginTop: "0px", marginLeft: "10px" }}
            />
          </Typography>

          <Button
            variant="outlined"
            // startIcon={<AccountCircleOutlinedIcon />}
            onClick={() => navigate("/Login")}
            sx={{ backgroundColor: "#dce775", color: "#880e4f" }}
          >
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
      <div className="good">
        <div className="auth-form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <h1 style={{ color: "#a84466" }}>REGISTER</h1>
              <input
                id="name"
                ref={userNameRef}
                name="name"
                type="text"
                placeholder="User Name"
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                ref={passwordRef}
                name="password"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email Id"
                ref={emailRef}
                name="email"
                required
              />
              {/* <Stack spacing={3}>
                <div className="mobile">
                  <Box>
                    <PhoneInput
                      specialLabel={"Mobile:"}
                      country={"in"}
                      variant="standard"
                      placeholder="enter the mobile number with code"
                    />
                  </Box>
                </div>
              </Stack> */}
              <input
                type="text"
                value={phoneNumber}
                onChange={handleInputChange}
                maxLength="10"
                placeholder="mobile number"
                required
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="role"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value={"user"}>User</MenuItem>
                  <MenuItem value={"Manager"}>Manager</MenuItem>
                </Select>
              </FormControl>
              {/* <FormControlLabel
                value="start"
                control={<Switch />}
                label="Terms and Conditions"
                labelPlacement="start"
              /> */}

              <Stack direction="row" spacing={35}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  onClick={handleClick}
                >
                  SignUp
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  message="Successfully Registered"
                />
              </Stack>
            </Stack>
            <Button className="link-btn" onClick={() => navigate("/Login")}>
              Already have an account? Click here to login.
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
