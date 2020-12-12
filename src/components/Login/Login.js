import React from "react";
import { InputComponent } from "../InputComponent";
import { LOGIN } from "../../constants";
import { Card, CardContent, CardActions, Fab } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useStyles } from "../styles";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useSnackbar } from 'notistack';

export const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const formValues = useSelector((state) => state.fieldAnswers);
  const { enqueueSnackbar } = useSnackbar();

  const continueToSignup = () => {
    history.push("/signup");
  };

  const handleLogin = () => {
    const obj = {
      emailId: formValues["Email ID"],
      password: formValues["Password"],
    };
    axios
      .post("http://localhost:8000/peerpal/auth-login", obj)
      .then((response) => {
        if(response && response.data) {
          console.log(response.data.message);
          enqueueSnackbar('Login Successful!', { variant: 'success' });
        }
      })
      .catch((e) => {
        enqueueSnackbar('Login Failed! Please check credentials', { variant: 'error' });
      });
  };

  return (
    <div className={classes.formContainer}>
      <Card className={classes.root}>
        <CardContent>
          <div className="label">
            <b>Login to manage your Todo's!</b>
          </div>
          <div>
            {Array.isArray(LOGIN) &&
              LOGIN.map((currentLabel) => (
                <div key={currentLabel.label}>
                  <InputComponent
                    label={currentLabel}
                    id={currentLabel}
                    staticText={currentLabel}
                  />
                </div>
              ))}
          </div>
        </CardContent>
        <div>
          <CardActions className={classes.buttonPanel}>
            <div className={classes.login}>
              <b>Do not have an account?</b>
              <button onClick={continueToSignup}>
                <b>Sign Up</b>
              </button>
            </div>
            <div className={classes.register}>
              <Fab
                aria-label="add"
                className={classes.muiButton}
                onClick={handleLogin}
              >
                <ArrowForwardIosIcon />
              </Fab>
            </div>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};
