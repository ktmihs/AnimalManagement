import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import './App.css';
import Topbar from "./Components/Topbar.js";
import Leftbar from "./Components/Leftbar.js";
import PostList from "./Components/PostList.js";
import SearchPage from './Pages/SearchPage'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Main from './Pages/Main'
import MyReservationPage from './Pages/MyReservationPage'
import CheckReservationPage from './Pages/CheckReservationPage'
import ReservationPage from './Pages/ReservationPage'
import HospitalPage from './Pages/HospitalPage'
import ErrorPage from './Pages/ErrorPage'
export default class App extends Component {

  // function App() {
  render() {
    return (
      <div id="light-bg">
        <Router>
            <Route path="*" component={Topbar} />
            <div className="body">
              <Route path="*" component={Leftbar} />
              <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/main' component={Main}/>
                <Route path='/HospitalPage' component={HospitalPage}/>
                <Route path='/ReservationPage' component={ReservationPage}/>
                <Route path='/CheckReservationPage' component={CheckReservationPage}/>
                <Route path='/MyReservationPage' component={MyReservationPage}/>
                <Route path='/SearchPage' component={SearchPage}/>
                
                <Route render={()=><ErrorPage/>}/>
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

