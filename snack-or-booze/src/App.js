import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { useDrinks, useSnacks } from "./hooks";

function App() {
  const {snacks, isLoading: isSnackLoading} = useSnacks()
  const {drinks, isLoading: isDrinkLoading} = useDrinks()

  if (isSnackLoading || isDrinkLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} prefix={'snacks'} title="Snacks Menu" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} prefix={'drinks'} title="Drinks Menu" />
            </Route>
            <Route path="/drinks/:id">
              <MenuItem  items={drinks} cantFind="/snacks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
