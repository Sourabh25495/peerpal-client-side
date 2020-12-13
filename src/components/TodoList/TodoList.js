import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  Card,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Divider,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddTodos } from "../AddTodos";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
  todoItems: {
    padding: 10,
    fontSize: 20,
  },
}));

export const TodoList = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  const callGetService = (loginData) => {
    axios
      .get("http://localhost:8000/peerpal/get-by-user?emailId=" + loginData)
      .then((response) => {
        if (response && response.data) {
          setTodos(response.data[0].todoItem);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateToDoList = () => {
    const obj = {
      emailId: "sourabh.kulkarni@bcbsfl.com",
      password: "123",
      todoItem: [
        {
          item: "text",
        },
        {
          item: "text",
        },
      ],
    };
    axios
      .put("http://localhost:8000/peerpal/update-todos", obj)
      .then((response) => {
        if (response && response.data) {
          setTodos(response.data[0].todoItem);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addTodos = () => {
    console.log("Here");
    updateToDoList();
  };

  useEffect(() => {
    const loginData = sessionStorage.getItem("login");
    callGetService(loginData);
  }, []);

  return (
    <div style={{ paddingTop: 30, paddingLeft: "35%" }}>
      <AddTodos handleAddTodos={addTodos} />
      <Card className={classes.root}>
        <List className={classes.root}>
          {console.log(todos)}
          {Array.isArray(todos) && todos.length > 0 ? (
            todos.map((todoItem, index) => {
              const labelId = `checkbox-list-label-${todoItem}`;

              return (
                <>
                  <ListItem key={todoItem} role={undefined} dense button>
                    <ListItemIcon>
                      <AddCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText id={labelId}>
                      <div className={classes.todoItems}>
                        <b>{todoItem.item}</b>
                      </div>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="comments">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {index !== todos.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                </>
              );
            })
          ) : (
            <div style={{ marginLeft: "40%" }}>Start Adding your tasks</div>
          )}
        </List>
      </Card>
    </div>
  );
};
