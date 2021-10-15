import {
    GET_MOVIE_POPULAR,
    GET_MOVIE_DETAIL,
    GET_MOVIE_GENRE,
    SET_GENRE,
    REMOVE_GENRE
  } from "./actionTypes";
  
  const initialState = {
    moviespopular:[],
    moviedetail:[],
    totalPages:0,
    moviegenre:[],
    id:[],
    moviebygenre:[]
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
      case SET_GENRE:
        return { ...state, id:state.id.concat(action.id)}

      default:
        return state;
    }
  };
  export default reducer;