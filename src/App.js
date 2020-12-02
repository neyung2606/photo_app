import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo_app">
      <Suspense fallback="Loading...">
        <Router>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            {/*<Route component={NotFound} />*/}
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
