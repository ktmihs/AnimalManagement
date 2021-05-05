import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Topbar from "./Components/Topbar.js";
import Leftbar from "./Components/Leftbar.js";
import SearchPage from './Pages/SearchPage'
import Main from './Pages/Main'
import MyReservationPage from './Pages/MyReservationPage'
import CheckReservationPage from './Pages/CheckReservationPage'
import ConfirmReservationPage from './Pages/ConfirmReservationPage'
import ReservationPage from './Pages/ReservationPage'
import HospitalPage from './Pages/HospitalPage'
import ErrorPage from './Pages/ErrorPage'
export default class App extends Component {

  // function App() {
  render() {
    return (
      <>
        <Router>
            <Route path="*" component={Topbar} />
            <div className="sidebar-body">
              <Route path="*" component={Leftbar} />
              <div className="body">
                <Switch>
                  <Route path='/' exact component={Main}/>
                  <Route path='/main' component={Main}/>
                  <Route path='/hospitalPage' component={HospitalPage}/>
                  <Route path='/reservationPage' component={ReservationPage}/>
                  <Route path='/checkReservationPage' component={CheckReservationPage}/>
                  <Route path='/confirmReservationPage' component={ConfirmReservationPage}/>
                  <Route path='/myReservationPage' component={MyReservationPage}/>
                  <Route path='/searchPage' component={SearchPage}/>
                  
                  <Route render={()=><ErrorPage/>}/>
                  {/* 
                  <Route path="*" component={LeftSideBar} />
                  <Route path="/Reservation" component={Reservation} />
                  <Route path="/NewCustomer" component={NewCustomer} />
                  <Route path="/CustomerList" component={CustomerList} />
                  <Route path="/NewReservation" component={NewReservation} /> */}
                </Switch> 
                
              </div>
            </div>
        </Router>
      </>
    );
  }
}

