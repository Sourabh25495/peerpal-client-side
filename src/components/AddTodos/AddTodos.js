import React from "react";
import { TextField, Button, Fab } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useStyles } from "../styles";

export const AddTodos = ({handleAddTodos}) => {
  const classes = useStyles();
  return (
    <div style={{ display: "inline-flex", paddingBottom: 15 }}>
      <div className="essay-edit-display">
        <TextField id="add-todo" variant="outlined" fullWidth />
      </div>
      <div className="button">
        <Fab variant="contained" className={classes.muiButton} onClick={handleAddTodos}>
          <AddCircleOutlineIcon />
        </Fab>
      </div>
    </div>
  );
};
