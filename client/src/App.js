import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Books} />
            <Route exact path='/books' component={Books} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
