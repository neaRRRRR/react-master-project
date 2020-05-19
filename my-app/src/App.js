import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const EaPage = () => (
  <div>
    <h1>EA PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ea" component={EaPage} />
      </Switch>
    </div>
  );
}

export default App;
