import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import BookSearch from "./pages/BookSearch";
import BookList from "./pages/BooksList";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path = "/" component={BookSearch} />
          <Route exact path="/list" component={BookList} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
