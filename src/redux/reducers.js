import {
    GET_MOVIE_POPULAR,
    GET_MOVIE_DETAIL,
    GET_MOVIE_GENRE,
    SET_GENRE,
    REMOVE_GENRE,
    MOVIESBYGENRE
  } from "./actionTypes";
  
  const initialState = {
    movielist:[],
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
        return { ...state, movielist: action.movielist, totalPages:action.totalPages };
      case GET_MOVIE_DETAIL:
        return { ...state, moviedetail: action.moviedetail };
      case GET_MOVIE_GENRE:
        return { ...state,moviegenre: action.moviegenre };
      case SET_GENRE:
        return { ...state, id:state.id.concat(action.id)}
      case REMOVE_GENRE:
        return { ...state, id:state.id.splice(state.id.indexOf(action.id),1)}
      case MOVIESBYGENRE:
        return { ...state,movielist: action.movielist, totalPages:action.totalPages}
      default:
        return state;
    }
  };
  export default reducer;