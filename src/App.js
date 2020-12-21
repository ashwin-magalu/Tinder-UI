import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SwipingCards from "./components/SwipingCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import Conversation from "./components/Conversation";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats/:person">
            <Header backButton="/chats" />
            <Conversation />
          </Route>

          <Route path="/chats">
            {/* Header */}
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/" exact={true}>
            {/* Header */}
            <Header />
            {/* Swiping cards */}
            <SwipingCards />
            {/* Buttons below swiping cards */}
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
