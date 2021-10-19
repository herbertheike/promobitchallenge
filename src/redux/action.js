import {
    GET_MOVIE_POPULAR,
    GET_MOVIE_DETAIL,
    GET_MOVIE_GENRE,
    SET_ID_DETAIL,
    MOVIESBYGENRE
  } from "./actionTypes";
  import api from "../api/index";
  
  export function getData(page) {
    return async function (dispatch) {
      return await 
      api.get("/movie/popular?api_key="+api_key+"&language=pt-BR&page="+page+"&region=BR", {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response)
          dispatch(getDataSuccess(response.data));
        });
    };
  }

  const getDataSuccess = (data) => {
    return {
      type: GET_MOVIE_POPULAR,
      movielist: data,
      totalPages:data.total_pages
    };
  };

  export function getDetail(movieid) {
    return async function (dispatch) {
      return await api
        .get("/movie/"+movieid+"?api_key="+api_key+"&language=pt-BR&append_to_response=release_dates,credits,similar", 
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
         // console.log(response)
          dispatch(getMovieDetail(response.data));
        });
    };
  }

  const getMovieDetail = (data) => {
    return {
      type: GET_MOVIE_DETAIL,
      moviedetail: data,
    };
  };

  export function getGenre() {
    return async function (dispatch) {
      return await api
        .get("genre/movie/list?api_key="+api_key+"&language=pt-BR", {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          dispatch(getGenreSuccess(response.data));
        });
    };
  }

  const getGenreSuccess= (data) => {
    return {
      type: GET_MOVIE_GENRE,
      moviegenre: data
    };
  };

  export function movieByGenre(id, page){
    console.log(id)
    return async function (dispatch) {
      return await api
        .get("discover/movie?api_key="
        +api_key+
        "&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_genres="
        +id, {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          dispatch(movieGenre(response.data));
        });
    };
  }

  export function movieGenre(data){
    return{
      type:MOVIESBYGENRE,
      moviebygenre:data,
      totalPages:data.total_pages
    }
  }

  export function setId(id){
    return{
      type: SET_ID_DETAIL,
      id:id
    }
  }

  const api_key = "95fd72b0a390903e28731f934a0b094e"