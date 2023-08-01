import React, { useState } from "react";
import { useNavigate } from "react-router";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Typography from "@mui/material/Typography";

import AuthContext from "./context/auth-context";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const AddBussiness = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const categories = [
    "science",
    "sports",
    "business",
    "politics",
    "entertainment",
    "technology",
    "world",
    "all",
  ];
  const logOutHandler = () => {
    localStorage.setItem("isSubmitted", "0");

    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        onLogout: logOutHandler,
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#00bcd4" }}>
        <Toolbar>
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
            variant="contained"
            startIcon={<AccountCircleOutlinedIcon />}
            onClick={logOutHandler}
            backgroundColor="#00bcd4"
          >
            LogOut
          </Button>
        </Toolbar>
      </AppBar>

      <p>Businnes Adding</p>
      <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
        <Box sx={{ paddingLeft: 10, paddingRight: 10 }}>
          <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
            ADD BUSSINESS
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={8} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Title
              </InputLabel>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                required
                id="title"
                name="title"
                label="Title"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Content
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label="Content"
                multiline
                fullWidth
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                URL
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="url"
                name="url"
                label="URL"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Category
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  {categories.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Author
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="author"
                name="author"
                label="Author"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Img Upload
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button>
                <UploadFileIcon />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button variant="contained" sx={{ color: "#ff781f" }}>
                Save
              </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
          </Grid>
        </Box>
      </Paper>
    </AuthContext.Provider>
  );
};

export default AddBussiness;
