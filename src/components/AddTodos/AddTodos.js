import React, { useState } from "react";
import { TextField, Fab } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useStyles } from "../styles";

export const AddTodos = ({ handleAddTodos }) => {
  const classes = useStyles();
  const [task, setTask] = useState("");
  const [disable, setDisable] = useState(true)

  const handleTextChange = (e, value) => {
    setDisable(false);
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    setTask('')
    setDisable(true);
    handleAddTodos(task)
  }
  return (
    <div style={{ display: "inline-flex", paddingBottom: 15 }}>
      <div className="essay-edit-display">
        <TextField
          id="add-todo"
          variant="outlined"
          placeholder="Add your Todo's...."
          fullWidth
          value={task}
          onChange={(e) => handleTextChange(e)}
        />
      </div>
      <div className="button">
        <Fab
          variant="contained"
          className={classes.muiButton}
          onClick={handleSubmit}
          disabled={disable}
        >
          <AddCircleOutlineIcon />
        </Fab>
      </div>
    </div>
  );
};
