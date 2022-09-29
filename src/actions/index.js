import axios from "axios";

import {GET_ALL_INFO} from "./name";
const  {getInfo}  = require("../actions/controller")

export function getAllinfo() {
    return async function (dispatch) {
  
      try {
        let res = await getInfo();
        
        return dispatch({ type: GET_ALL_INFO, payload: res.data });
      } catch (error) {
        console.log(error);
      }
    };
  }