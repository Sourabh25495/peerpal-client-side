import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { useStyles } from "../styles";
import { processObjectToPopulateText } from "../utils";
import { START_OVER } from "../../madlibs";

export const EditPage = ({ setShowEditPage }) => {
  const classes = useStyles();
  const populateText = useSelector((state) => state.essayText);
  const editFieldValue = processObjectToPopulateText({ populateText });
  const dispatch = useDispatch();
  let history = useHistory();

  const handleShowEditPage = () => {
    // setShowEditPage("essay");
    history.push("/home");
    // dispatch({
    //   type: START_OVER,
    // });
  };

  return (
    <div className="edit-container">
      <div className="label">
        <b>Your essay text</b>
      </div>
      <div className="essay-edit-display">
        <TextField
          id="edit-my-essay"
          multiline
          rows={8}
          variant="outlined"
          fullWidth
          defaultValue={editFieldValue}
        />
      </div>
      <div className="button">
        <Button
          variant="contained"
          className={classes.muiButton}
          onClick={handleShowEditPage}
        >
          Start Over
        </Button>
      </div>
    </div>
  );
};
