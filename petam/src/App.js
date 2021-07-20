import React, { Component, useUserState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Topbar from "./Components/Topbar.js";
import Leftbar from "./Components/Leftbar.js";
import SearchPage from "./Pages/SearchPage";
import Main from "./Pages/Main";
import MyReservationPage from "./Pages/MyReservationPage";
import CheckReservationPage from "./Pages/CheckReservationPage";
import ConfirmReservationPage from "./Pages/ConfirmReservationPage";
import ReservationPage from "./Pages/ReservationPage";
import HospitalPage from "./Pages/HospitalPage";
import ErrorPage from "./Pages/ErrorPage";
import MyPostListPage from "./Pages/MyPostListPage";

import Login from "./Components/sign/Login";
import Register from "./Components/sign/Register";
import RegisterForm from "./Components/sign/RegisterForm"
import PostListPage from "./Pages/PostListPage";
import PostViewPage from "./Pages/PostViewPage";
import WritePostPage from "./Pages/WritePostPage";
import WriteProductPage from "./Pages/WriteProductPage";
import AllProductListPage from "./Pages/AllProductListPage";
import ProductViewPage from "./Pages/ProductViewPage";

import Axios from "axios";
import Information from "./Components/mypage/Information";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import LandingPage from "./Pages/LandingPage";
import Test from "./Pages/Test";

import Auth from "./hoc/auth";

const App=()=> {
// export default class App extends Component {
  // const submitReview = () => {
  //   Axios.post('https://localhost:4000/api/posts', {
  //     title: '',
  //     content: ''
  //   }).then(() => {
  //     alert('등록 완료!');
  //   })
  // }
  // const { user } = useUserState(); 
// const isLogin = false;
  // render() {
    return (
      <>
        <Router>
          <Route path="*" component={Topbar} />
          <div className="sidebar-body">
            <Route path="*" component={Leftbar} />
            <div className="body">
              <Switch>
                <Route path="/test" component={Test} />
                <Route path="/" exact component={Main} />
                <Route path="/main" component={Main} />
                <Route path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="/register/hospital" component={RegisterForm} />
                <Route path="/register/common" component={RegisterForm} />
                <Route path="/hospital/:name" component={HospitalPage} />
                {/* <Route path="/hospital/:_id" component={HospitalPage} /> */}
                <Route path="/reservationPage" component={ReservationPage} />

                <Route
                  path="/checkReservationPage"
                  component={CheckReservationPage}
                />
                <Route
                  path="/reservation/:_id"
                  component={ConfirmReservationPage}
                />
                <Route
                  exact
                  path="/reservation"
                  component={MyReservationPage}
                />
                <Route path="/information" component={Information} />
                {/*                <Route path="/information/:_id" component={Information} />*/}

                <Route exact path="/hospital" component={SearchPage} />
                <Route path="/PostListPage" component={PostListPage} />
                <Route path="/MyPostListPage" component={MyPostListPage} />
                <Route path="/WritePostPage" component={WritePostPage} />
                <Route path="/writeproductpage" component={WriteProductPage} />
                <Route
                  path="/AllProductListPage"
                  component={AllProductListPage}
                />
                <Route
                  path="/product/detail/:_id"
                  component={ProductViewPage}
                />

                <Route exact path="/j" component={Auth(LandingPage, null)} />
                <Route exact path="/jlogin" component={Auth(LoginPage, false)} />
                <Route
                  exact
                  path="/jregister"
                  component={Auth(RegisterPage, false)}
                />
                {/* <Route path="/j" component={LandingPage} />
                <Route path="/jlogin" component={LoginPage} />
                <Route path="/jregister" component={RegisterPage} /> */}
                <Route path="/PostView/:_id" component={PostViewPage} />
                <Route render={() => <ErrorPage />} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
export default App;

