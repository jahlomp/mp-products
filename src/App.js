import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

const Products = lazy(() => import("./pages/Products"));

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route name="Products" exact path="/" component={Products} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </ConnectedRouter>
);

export default App;
