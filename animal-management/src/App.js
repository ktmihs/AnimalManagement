import logo from './logo.svg'
import React from 'react'
import './App.css'
import SearchPage from './Pages/SearchPage'
import Background from './Components/Background'
import Content from './Components/Content'
import Footer from './Components/Footer'
//import MyReservationPage from './Pages/MyReservationPage'
//import CheckReservationPage from './Pages/CheckReservationPage'
//import ReservationPage from './Pages/ReservationPage'
//import HospitalPage from './Pages/HospitalPage'

function App() {
  return (
    <Background>
      <Content>
      <SearchPage/>
        {/*
        <HospitalPage/>
        <ReservationPage/>
        <CheckReservationPage/>
        <MyReservationPage/>
        <SearchPage/>*/}
      </Content>
      <Footer/>
    </Background>
  )
}

export default App
