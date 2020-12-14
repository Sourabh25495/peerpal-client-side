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
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import AdjustIcon from "@material-ui/icons/Adjust";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
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
  const loginData = sessionStorage.getItem("login");

  const iconArray = [
    <AddCircleOutlineIcon />,
    <AccessibilityIcon />,
    <AddAlertIcon />,
    <AdjustIcon />,
    <AddShoppingCartIcon />,
    <AudiotrackIcon />
  ];

  const callGetService = (loginData) => {
    axios
      .get("http://localhost:8000/peerpal/get-by-user?emailId=" + loginData)
      .then((response) => {
        if (response && response.data) {
          setTodos(response.data[0]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateToDoList = (newTodoList) => {
    todos.todoItem.push({ item: newTodoList });
    const obj = todos;
    axios
      .put("http://localhost:8000/peerpal/update-todos", obj)
      .then((response) => {
        if (response && response.data) {
          callGetService(loginData);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTodos = (todos) => {
    axios
      .put("http://localhost:8000/peerpal/update-todos", todos)
      .then((response) => {
        if (response && response.data) {
          callGetService(loginData);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addTodos = (task) => {
    updateToDoList(task);
  };

  useEffect(() => {
    const loginData = sessionStorage.getItem("login");
    callGetService(loginData);
  }, []);

  const removeElement = (array, element) => {
    return array.filter((currentItem) => currentItem.item !== element);
  };

  const randomize = () => {
     let random = Math.floor(Math.random() * 10 + 1)/2;
     random = Math.ceil(random)
     return iconArray[random];
  };

  const handleDelete = (index, todoList) => {
    const updatedTodos = { ...todos, todoItem: removeElement(todoList, index) };
    deleteTodos(updatedTodos);
  };

  return (
    <div style={{ paddingTop: 30, paddingLeft: "35%" }}>
      <AddTodos handleAddTodos={addTodos} />
      <Card className={classes.root}>
        <List className={classes.root}>
          {todos &&
          Array.isArray(todos.todoItem) &&
          todos.todoItem &&
          todos.todoItem.length > 0 ? (
            todos.todoItem.map((todoItem, index) => {
              const labelId = `checkbox-list-label-${todoItem}`;

              return (
                <>
                  <ListItem key={todoItem} role={undefined} dense button>
                    <ListItemIcon>
                      {randomize()}
                    </ListItemIcon>
                    <ListItemText id={labelId}>
                      <div className={classes.todoItems}>
                        <b>{todoItem.item}</b>
                      </div>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="comments"
                        onClick={() =>
                          handleDelete(todoItem.item, todos.todoItem)
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {index !== todos.todoItem.length -1 && (
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
