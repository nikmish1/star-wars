import { Provider } from "react-redux";

import store from "../src/store";
import Login from "../src/components/login";
import Dashboard from "../src/components/dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path={["/", "/login"]} component={Login} exact />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
