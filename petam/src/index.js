import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import board_reducer from './App_reducer';
import { UserProvider } from "./context/UserContext";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import reducer from "./_reducers";
// import board_reducer from "./App_reducer";

// let store = createStore(board_reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const createStoreWidthMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);


// const s = createStoreWidthMiddleware(
//         reducer,
//         //개발자 도구를 사용하기 위한 설정
//         window.__REDUX_DEVTOOLS_EXTENSION__ &&
//           window.__REDUX_DEVTOOLS_EXTENSION__()
// )
//       console.log("------", s.getStatae)
// import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWidthMiddleware(
        reducer,
        //개발자 도구를 사용하기 위한 설정
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById("root"),
  // console.log("---", reducer)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
