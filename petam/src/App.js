import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
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

import PostListPage from './Pages/PostListPage'
import WritePostPage from "./Pages/WritePostPage"


export default class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Route path="*" component={Topbar} />
          <div className="sidebar-body">
            <Route path="*" component={Leftbar} />
            <div className="body">
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/main" component={Main} />
                <Route path="/hospitalPage" component={HospitalPage} />
                <Route path="/reservationPage" component={ReservationPage} />
                <Route
                  path="/checkReservationPage"
                  component={CheckReservationPage}
                />
                <Route
                  path="/confirmReservationPage"
                  component={ConfirmReservationPage}
                />
                <Route
                  path="/myReservationPage"
                  component={MyReservationPage}
                />
                <Route path="/searchPage" component={SearchPage} />
                <Route path="/PostListPage" component={PostListPage} />
                <Route path="/WritePostPage" component={WritePostPage} />

                <Route render={() => <ErrorPage />} />
              </Switch>

            </div>
          </div>
        </Router>
      </>
    );
  }
}

