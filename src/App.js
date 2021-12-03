import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";
import Lab5 from "./pages/Lab5";
import Lab6 from "./pages/Lab6";
import Lab7 from "./pages/Lab7";
import Lab8 from "./pages/Lab8";

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
          <Route exact path="/lab5">
            <Lab5 />
          </Route>
          <Route exact path="/lab6">
            <Lab6 />
          </Route>
          <Route exact path="/lab7">
            <Lab7 />
          </Route>
          <Route exact path="/lab8">
            <Lab8 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
