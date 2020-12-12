import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { ComposeEssay } from "./ComposeEssay";
import { EditPage } from "./EditPage";
import axios from "axios";

require("./App.scss");

const App = () => {
  const [showEditPage, setShowEditPage] = useState("essay");

  useEffect(() => {
    axios.get("http://localhost:8000/peerpal/todos");
  }, []);

  return (
    <div className="match-area">
      <Router>
        <div>
          <Route path="/home" component={ComposeEssay} />
          <Route path="/edit-page" component={EditPage} />
        </div>
      </Router>
    </div>
  );
};

export default connect(null, null)(App);
