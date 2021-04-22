import React from 'react'
import Background from './Background'
import Content from './Content'
import Footer from './Footer'

function Components({children}) {
  {/*
  만약 해당 기능을 보이고 싶지 않은 페이지가 있을 경우
  if (location.pathname==='/페이지 이름'){
    return nill
  }
  */}
  
  return (
    <Background>
      <Content>
        {children}
      </Content>
      <Footer/>
    </Background>
  )
}

export default Components
