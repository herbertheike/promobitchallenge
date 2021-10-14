import {
    GET_MOVIE_POPULAR,
    GET_MOVIE_DETAIL,
    GET_MOVIE_GENRE
  } from "./actionTypes";
  
  const initialState = {
    moviespopular:[],
    moviedetail:[],
    totalPages:0,
    moviegenre:[]
  };
  const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case GET_MOVIE_POPULAR:
        return { ...state, moviespopular: action.moviespopular, totalPages:action.totalPages };
      case GET_MOVIE_DETAIL:
        return { ...state, moviedetail: action.moviedetail };
      case GET_MOVIE_GENRE:
        return { ...state,moviegenre: action.moviegenre };
      default:
        return state;
    }
  };
  export default reducer;