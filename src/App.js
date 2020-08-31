import React from "react";
import Personajes from "./components/Contenido/Personajes/Personajes";
import Episodios from "./components/Contenido/Episodios/Episodios";
import Lugares from "./components/Contenido/Lugares/Lugares";
import RightNav from "./components/Navbar/RightNav"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <RightNav />
      <Switch>
        
        <Route exact path="/episodios">
          <Episodios />
        </Route>
        <Route exact path="/lugares">
          <Lugares />
        </Route>
        <Route exact path="/">
          <Personajes />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;