import React from "react";
import { InputComponent } from "../InputComponent";
import { LOGIN } from "../../constants";
import { Card, CardContent, CardActions, Button, Fab } from "@material-ui/core";
import { useStyles } from "../styles";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';

const labelArray = ["Password"];

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
    if (obj.emailId && obj.password) {
      axios
        .post("http://localhost:8000/peerpal/auth-login", obj)
        .then((response) => {
          if (response && response.data) {
            console.log(response.data.message);
            history.push("/my-todo-list");
            sessionStorage.setItem("login", obj.emailId);
            enqueueSnackbar("Login Successful!", { variant: "success" });
          }
        })
        .catch((e) => {
          enqueueSnackbar("Login Failed! Please check credentials.", {
            variant: "error",
          });
        });
    } else {
      enqueueSnackbar("Please Enter Credentials", {
        variant: "error",
      });
    }
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
                    type={labelArray.includes(currentLabel) ? "password" : 'text'}
                    staticText={currentLabel}
                  />
                </div>
              ))}
            <div className={classes.loginButton}>
              <Button
                aria-label="add"
                className={classes.muiButton}
                onClick={handleLogin}
                // disabled={disable}
                fullWidth
              >
                Login
              </Button>
            </div>
          </div>
        </CardContent>
        <div>
          <CardActions className={classes.buttonPanel}>
            <div className={classes.login}>
              <b>Do not have an account?......Please Register Here!!!</b>
              <Fab
                  aria-label="add"
                  className={classes.muiButton}
                  onClick={continueToSignup}
                >
                  <ArrowForwardIosTwoToneIcon />
                </Fab>
            </div>
            <div className={classes.register}></div>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};
