import { REGISTER_USER, LOGIN_USER } from "./types";
import axios from 'axios'
// import { request } from "../utils/axios";

const USER_URL = "/api/user";

export function registerUser(dataToSubmit) {
    const data = axios.post('api/auth/', dataToSubmit);
//   const data = request("post", USER_URL + "/register", dataToSubmit);

  return {
    type: REGISTER_USER,
    payload: data,
  };
}
export function loginUser(dataToSubmit) {
    console.log(dataToSubmit)
    const data = axios.post('api/auth/login', dataToSubmit);
    
//   const data = request("post", USER_URL + "/login", dataToSubmit);
  return {
    type: LOGIN_USER,
    payload: data,
  };
}


export function authUser() {
  const request = axios.get("/api/auth/auth").then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: data,
  };
}
