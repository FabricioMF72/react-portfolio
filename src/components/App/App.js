import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "../Header/Header";
import Home from "../Home/Home"
import Layout from '../Layout/Layout'
import Footer from "../Footer/Footer";
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
      <Footer/>
    </Router>
    </>
  );
}

export default App;
