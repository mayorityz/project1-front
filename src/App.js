import { Switch, Route, Link } from "react-router";
import Dashboard from "./component/Dashboard";
import Landing from "./component/Landing";

function App() {
  return (
    <>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/:status">
          <Landing />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </>
  );
}

export default App;
