import {
    GET_MOVIE_POPULAR
  } from "./actionTypes";
  import api from "../api/index";
  
  export function getData() {
    return async function (dispatch) {
      return await api
        .get("/movie/popular?api_key="+api_key, {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          dispatch(getDataSuccess(response));
        });
    };
  }

  const getDataSuccess = (data) => {
    return {
      type: GET_MOVIE_POPULAR,
      movies_popular: data,
      length: data.length,
    };
  };

  const api_key = "95fd72b0a390903e28731f934a0b094e"