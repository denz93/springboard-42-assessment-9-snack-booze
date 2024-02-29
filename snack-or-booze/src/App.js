import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { useDrinks, useSnacks } from "./hooks";
import NotFound from "./NotFound";
import NewItem from "./NewItem";

function App() {
  const {snacks, isLoading: isSnackLoading, refetch: refetchSnacks} = useSnacks()
  const {drinks, isLoading: isDrinkLoading, refetch: refetchDrinks} = useDrinks()

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
              <MenuItem  items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/new-item">
              <NewItem onNewItemCreated={() => {
                refetchDrinks()
                refetchSnacks()
              }}/>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
