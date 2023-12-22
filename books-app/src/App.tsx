import React from 'react';
import logo from './logo.svg';
import './App.css';

// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Author } from "./Author";
import { Home } from "./Home";

function AppRouter() {
//  const { loading } = useAppInit();
  return (
    <div id="wrapper">
      {/* <Router>
        <Header />
        { {loading ? (
          <p>Reticulating splines...</p>
        ) : (
          <Switch>
            <Route path="/author">
              <Author />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
        <Footer />
      </Router> */}
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

function App() {
  return (
        <AppRouter />
  );
}

export default App;
