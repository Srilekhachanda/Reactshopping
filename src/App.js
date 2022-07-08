import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
// import Header from "./components/Header";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import Signin from "./components/Signin";
// import Signout from "./components/Signout";
// import Create from "./components/Create";
// import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Navbar/>
        <Hero/>
        {/* <Filter/> */}
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer/>
        {/* <Signin/>
        <Signout/>
        <Create/> */}
      </Router>
    </div>
  );
}

export default App;
