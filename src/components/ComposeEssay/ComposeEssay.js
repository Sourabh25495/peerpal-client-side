import React from "react";
import { InputComponent } from "../InputComponent";
import { LOGIN_FIELDS } from "../../constants";
import { Button, Card, CardContent, CardActions, Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from "../styles";
import { processInputFieldParams } from "../utils";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ComposeEssay = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <Card className={classes.root}>
        <CardContent>
          <div className="label">
            <b>Login to access your Todo's....</b>
          </div>
          <div>
            {Array.isArray(LOGIN_FIELDS) &&
              LOGIN_FIELDS.map((currentLabel) => (
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
        <CardActions>
          <Button variant="contained" className={classes.muiButton}>
            Register
          </Button>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </CardActions>
      </Card>
    </div>
  );
};
