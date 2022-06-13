import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../utils/api/userPost";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";

import "./Register.css";
import { AccountCircleOutlined, ContactlessSharp, ContactMailSharp, PasswordSharp } from "@mui/icons-material";

export default function Resgiter(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /* <TextField id="filled-basic" label="Filled" variant="filled" sx={{input: {color: "#fdfdfd", backgroundColor: "#323644"} }}
      InputLabelProps={{style: {color: "grey"}}} /> */
  var navigate = useNavigate();

  var normalTextField = {
    input: { backgroundColor: "#f3f6fb", color: "#050516", pl: 1 },
  };
  var specialTextField = {
    input: { backgroundColor: "#FFF", color: "#050516", pl: 1 },
  };

  var normalLabel = { style: { color: "#7F8487" } };
  var specialLabel = { style: { color: "#11468F" } };

  const register = async (e) => {
    e.preventDefault();
    const res = await userRegister(username, password);
    if (res.response.status === 200 || res.response.status === 201) {
      localStorage.setItem("jwt", res.data.token);
      navigate("/");
    } else {
      console.log("error", res.data.msg);
    }
  };

  const logInButtonClick = (event) => {
    navigate("/login", { replace: true });
  };

  return (
    // Main container contains image and form
    <div className="register-container header">
      {/* Form Container contains logo and necessary textfield and buttons */}
      <div className="register-form-container">
        {/* Contains Logo and App Name */}
        <div className="register-header">
          <span className="logo">LOGO </span>
          <span className="heading">SENTIMO</span>
        </div>

        {/* Create Account Headings mv = margin vertical */}
        <div>
          <div className="register-text-container">
            <div className="medium-text mv">START FOR FREE</div>

            <div className="large-text heading mv">
              Create new account
              <span className="dot">.</span>
            </div>

            <div className="login-container mv">
              <span className="small-text">Already a member? </span>
              <Button
                variant="standard"
                onClick={logInButtonClick}
                sx={{ color: "#508afa", margin: "0", padding: "0" }}
              >
                Log In
              </Button>
            </div>
          </div>

          <div>
            <form>
              <div className="input-container">
                <div className="name-data-container">
                  <div className="fname-field mh">
                    <TextField
                      label="First name"
                      variant="outlined"
                      sx={normalTextField}
                      InputLabelProps={normalLabel}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </div>

                  <div className="lname-field mh">
                    <TextField
                      label="Last name"
                      variant="outlined"
                      sx={normalTextField}
                      InputLabelProps={normalLabel}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="username-field mh mv">
                  <TextField
                    label="Username"
                    variant="outlined"
                    autoComplete="false"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    sx={normalTextField}
                    InputLabelProps={normalLabel}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ContactMailSharp color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    fullWidth
                    required
                  />
                </div>

                <div className="password-field mh mv">
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    sx={specialTextField}
                    InputLabelProps={specialLabel}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PasswordSharp color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    fullWidth
                    required
                    value={password}
                  />
                </div>
              </div>

              <div className="button-container">
                <Button
                  variant="contained"
                  sx={{ pl: 7, pr: 7, pt: 2, pb: 2, mt: 2, fontSize: "15px", borderRadius: "30px"}}
                  color="primary"
                  onClick={register}
                >
                  SIGN UP
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Blank Div */}
        <div></div>
      </div>

      <section className="register-side-image"></section>
    </div>
  );
}
