import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';
import TopBar from "./Components/Topbar.js";
import PostList from "./Components/PostList.js";
import Test from "./Components/test";
export default class App extends Component {
  
  // function App() {
  render() {
    return (
      <div>
        <Router>
          <Route path="*" component={TopBar} />
          <Route path="/postlist" component={PostList} />
          <Route path="/main" component={Test} />
          {/* <Route path="*" component={LeftSideBar} />
        <Route path="/Reservation" component={Reservation} />
        <Route path="/NewCustomer" component={NewCustomer} />
        <Route path="/CustomerList" component={CustomerList} />
        <Route path="/NewReservation" component={NewReservation} /> */}
          
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

// export default App;
