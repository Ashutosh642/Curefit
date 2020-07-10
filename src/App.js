import React from 'react';
import './App.css';
import Header from './Curefit/Header';
import Footer from './Curefit/Footer';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './Curefit/Home/Home';
import Live from './Curefit/Live/Live';
import Mind from './Curefit/Mind/Mind';
import Eat from './Curefit/Eat/Eat';
import Gear from './Curefit/Gear/Gear';
import Cart from './Curefit/Cart/Cart'
import LiveDetails from './Curefit/Live/LiveDetails';
import Membership from './Curefit/Membership'
function App() {
  return (
    <div>
   
      <Router>
        <Header></Header>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/live" component={Live}></Route>
        <Route exact path="/mind" component={Mind}></Route>
        <Route exact path="/eat" component={Eat}></Route>
        <Route exact path="/gear" component={Gear}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/liveDetails" component={LiveDetails}></Route>
        <Route exact path="/membership" component={Membership}></Route>
      </Router>
       <Footer></Footer> 
    </div>
  )
}

export default App;
