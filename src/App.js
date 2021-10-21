import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
