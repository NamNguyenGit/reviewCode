import logo from "./logo.svg";
import "./main.css";
import { BrowserRouter as Routers, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TodoDetail from "./components/listTodo/todoDetail";

function App() {
  return (
    <>
      <Routers>
        <Switch>
          <Route path="/todoDetail/:id" component={TodoDetail} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Routers>
    </>
  );
}

export default App;
