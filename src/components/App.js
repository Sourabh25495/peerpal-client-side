import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Register } from "./Register";
import { EditPage } from "./EditPage";
import { Login } from "./Login";
import axios from "axios";

require("./App.scss");

const App = () => {
  useEffect(() => {
    axios.get("http://localhost:8000/peerpal/todos");
  }, []);

  return (
    <div className="match-area">
      <Router>
        <div>
          <Route path="/signup" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/edit-page" component={EditPage} />
        </div>
      </Router>
    </div>
  );
};

export default connect(null, null)(App);
