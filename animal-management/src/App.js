import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SearchPage from './Pages/SearchPage'
import Background from './Components/Background'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Main from './Pages/Main'
import MyReservationPage from './Pages/MyReservationPage'
import CheckReservationPage from './Pages/CheckReservationPage'
import ReservationPage from './Pages/ReservationPage'
import HospitalPage from './Pages/HospitalPage'
import ErrorPage from './Pages/ErrorPage'

function App() {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/petAm' component={Main}/>
          <Route path='/HospitalPage' component={HospitalPage}/>
          <Route path='/ReservationPage' component={ReservationPage}/>
          <Route path='/CheckReservationPage' component={CheckReservationPage}/>
          <Route path='/MyReservationPage' component={MyReservationPage}/>
          <Route path='/SearchPage' component={SearchPage}/>
          <Route render={()=><ErrorPage/>}/>
        </Switch>
      </Router>      
    </>    
  )
}
export default App
