import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import './App.css';
import Topbar from "./Components/Topbar.js";
import Leftbar from "./Components/Leftbar.js";
import SearchPage from './Pages/SearchPage'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Main from './Pages/Main'
import MyReservationPage from './Pages/MyReservationPage'
import CheckReservationPage from './Pages/CheckReservationPage'
import ReservationPage from './Pages/ReservationPage'
import HospitalPage from './Pages/HospitalPage'
import ErrorPage from './Pages/ErrorPage'
import PostListPage from './Pages/PostListPage'
export default class App extends Component {
  // function App() {

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }
  render() {
    return (
      <div id="light-bg">
        <Router>
          <Route path="*" component={Topbar} />
          <div className="body">
            <Route path="*" component={Leftbar} />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/main" component={Main} />
              <Route path="/postlistpage" component={PostListPage} />
              <Route path="/hospitalpage" component={HospitalPage} />
              <Route path="/reservationpage" component={ReservationPage} />
              <Route
                path="/checkceservationpage"
                component={CheckReservationPage}
              />
              <Route path="/myreservationpage" component={MyReservationPage} />
              <Route path="/searchpage" component={SearchPage} />

              <Route render={() => <ErrorPage />} />
              {/* 
                <Route path="*" component={LeftSideBar} />
                <Route path="/Reservation" component={Reservation} />
                <Route path="/NewCustomer" component={NewCustomer} />
                <Route path="/CustomerList" component={CustomerList} />
                <Route path="/NewReservation" component={NewReservation} /> */}
            </Switch>
          </div>
        </Router>
      </div>

      //   <div className="App">
      //     <header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <p>
      //         Edit <code>src/App.js</code> and save to reload.
      //       </p>
      //       <a
      //         className="App-link"
      //         href="https://reactjs.org"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Learn React
      //       </a>
      //     </header>
      //   </div>
    );
  }
}

