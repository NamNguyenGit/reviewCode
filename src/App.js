import logo from "./logo.svg";
import "./main.css";
import { BrowserRouter as Routers, Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import TodoDetail from "./components/listTodo/todoDetail";
import { RouteBase } from "./constants/routeUrl";

function App() {
  return (
    <>
      <Routers>
        <Switch>
          <Route path={RouteBase.Detail} component={TodoDetail} />
          <Route path={RouteBase.Home} exact component={Home} />
        </Switch>
      </Routers>
    </>
  );
}

export default App;
