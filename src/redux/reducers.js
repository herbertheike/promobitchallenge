import {
    GET_MOVIE_POPULAR,
    GET_MOVIE_DETAIL,
    GET_MOVIE_GENRE,
    SET_ID_DETAIL,
    MOVIESBYGENRE
  } from "./actionTypes";
  
  const initialState = {
    movielist:[],
    moviedetail:[],
    totalPages:0,
    totalPagesg:0,
    moviegenre:[],
    id:'',
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
      case SET_ID_DETAIL:
        return { ...state, id:state.id}
      case MOVIESBYGENRE:
        return { ...state,moviebygenre: action.moviebygenre, totalPagesg:action.totalPagesg}
      default:
        return state;
    }
  };
  export default reducer;