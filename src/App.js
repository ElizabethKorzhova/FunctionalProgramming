import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/lab1">
            <Lab1 />
          </Route>
          <Route exact path="/lab2">
            <Lab2 />
          </Route>
          <Route exact path="/lab3">
            <Lab3 />
          </Route>
          <Route exact path="/lab4">
            <Lab4 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
