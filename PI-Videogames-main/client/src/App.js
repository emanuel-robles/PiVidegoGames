import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import LandigPage from './components/LadinPage';
import CreateGame from "./components/CreateGame";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandigPage}/>
         <Route path= "/home" component={Home}/>
         <Route path="/Game" component={CreateGame}/>
         </Switch>
    </div>
  );
}

export default App