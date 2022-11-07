import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import LandigPage from './components/LadinPage';
import CreateGame from "./components/CreateGame";
import GameDetail from "./components/GameDetail"
function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact component={LandigPage} />
        <Route path="/home" component={Home} />
        <Route path="/Game" component={CreateGame} />
        <Route path="/videogames" component={GameDetail} />
      </Switch>
    </div>
  );
}

export default App