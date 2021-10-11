import {
    GET_MOVIE_POPULAR
  } from "./actionTypes";
  
  const initialState = {
    movies_popular:[]
  };
  const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case GET_MOVIE_POPULAR:
        return { ...state, moviespopular: action.moviespopular };
      default:
        return state;
    }
  };
  export default reducer;