import React from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Register } from "./Register";
import { TodoList } from "./TodoList";
import { Login } from "./Login";

require("./App.scss");

const App = () => {
  return (
    <div className="match-area">
      <div style={{ fontSize: 40, color: "red", padding: 10, fontFamily: 'Arial' }}>
        <b>Welcome to Your Todo List Portal!</b>
      </div>
      <Router>
        <div>
          <Route exact path="/" component={Register} />
          <Route path="/signup" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/my-todo-list" component={TodoList} />
        </div>
      </Router>
    </div>
  );
};

export default connect(null, null)(App);
