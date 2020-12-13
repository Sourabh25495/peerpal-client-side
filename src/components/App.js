import React from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Register } from "./Register";
import { TodoList } from "./TodoList";
import { Login } from "./Login";

require("./App.scss");

const App = () => {

  return (
    <div className="match-area">
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
