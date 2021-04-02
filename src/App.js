import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home/Home"
import Layout from './components/Layout/Layout'
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
    </>
  );
}

export default App;
