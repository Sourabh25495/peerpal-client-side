import React, {useState} from "react";
import { InputComponent } from "../InputComponent";
import { REGISTER } from "../../constants";
import { Button, Card, CardContent, CardActions, Fab } from "@material-ui/core";
import { useStyles } from "../styles";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";

export const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  const formValues = useSelector((state) => state.fieldAnswers);
  const { enqueueSnackbar } = useSnackbar();
  const [errorState, setErrorState] = useState('')

  const continueToLogin = () => {
    history.push("/login");
  };

  const handleAddNewUser = () => {
    console.log("Form values", formValues);
    const obj = {
      name: formValues.Name,
      emailId: formValues["Email ID"],
      password: formValues["Create Password"],
      todoItem: [],
    };
    if (formValues["Create Password"] === formValues["Verify Password"]) {
      setErrorState('')
      axios
        .post("http://localhost:8000/peerpal/add-user", obj)
        .then((response) => {
          enqueueSnackbar("Account created successfully. Please Login.", {
            variant: "success",
          });
          history.push("/login");
        })
        .catch((e) => {
          enqueueSnackbar("Failed to create Account", { variant: "error" });
        });
    } else {
      setErrorState("Password do not Match")
      enqueueSnackbar("Password do not Match", { variant: "error" });
    }
  };

  return (
    <div className={classes.formContainer}>
      <Card className={classes.root}>
        <CardContent>
          <div className="label">
            <b>Sign up to manage your Todo's....</b>
          </div>
          <div>
            {Array.isArray(REGISTER) &&
              REGISTER.map((currentLabel) => (
                <div key={currentLabel.label}>
                  <InputComponent
                    label={currentLabel}
                    id={currentLabel}
                    staticText={currentLabel}
                  />
                </div>
              ))}
              {errorState && <div style={{color: 'red', marginLeft: 15}}>{errorState}</div>}
          </div>
        </CardContent>
        <div>
          <CardActions className={classes.buttonPanel}>
            <div className={classes.login}>
              <b>Existing User?.....Please Log In.</b>
              <div>
                <Fab
                  aria-label="add"
                  className={classes.muiButton}
                  onClick={continueToLogin}
                >
                  <ArrowForwardIosTwoToneIcon />
                </Fab>
              </div>
            </div>
            <div className={classes.register}>
              <Button
                variant="contained"
                className={classes.muiButton}
                onClick={handleAddNewUser}
              >
                Register
              </Button>
            </div>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};
