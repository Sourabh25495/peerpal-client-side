import React from "react";
import { InputComponent } from "../InputComponent";
import { REGISTER } from "../../constants";
import { Button, Card, CardContent, CardActions } from "@material-ui/core";
import { useStyles } from "../styles";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const classes = useStyles();
  const history = useHistory();

  const continueToLogin = () => {
    history.push('/login')
  }

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
          </div>
        </CardContent>
        <div>
          <CardActions className={classes.buttonPanel}>
            <div className={classes.login}>
              <b>Already have an account?</b>
              <button onClick={continueToLogin}>
                <b>Log in</b>
              </button>
            </div>
            <div className={classes.register}>
              <Button variant="contained" className={classes.muiButton}>
                Register
              </Button>
            </div>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};
