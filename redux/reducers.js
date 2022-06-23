import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED_FAILURE,
  USER_LOADED_SUCCESS,
  WATCHLIST_LOADED,
  WATCHLIST_LOADED_FAILED,
  ADD_TO_WATCHLIST_SUCCESS,
  ADD_TO_WATCHLIST_FAILED,
  REMOVE_FROM_WATCHLIST_FAILED,
  REMOVE_FROM_WATCHLIST_SUCCESS,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILED,
  RATE_MOVIE_SUCCESS,
  RATE_MOVIE_FAILED,
} from "./types";

const initialState = {
  token: null,
  isLoggedIn: null,
  loading: true,
  user: null,
  error: null,
  registerState: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
      };
    case REGISTER_SUCCESS:
      console.log("REGISTER_SUCCESS", action.payload);
      return {
        ...state,
        registerState: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        registerState: false,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case USER_LOADED_FAILURE:
      return {
        ...state,
        error: action.payload,
        user: null,
      };

    default:
      return state;
  }
};

const usermovie = {
  inWatchList: null,
  addToWatchList: null,
  removeFromWatchList: null,
  addComments: null,
  rateMovie: null,
  error: null,
};

export const userMovies = (state = usermovie, action) => {
  switch (action.type) {
    case WATCHLIST_LOADED:
      return {
        ...state,
        inWatchList: action.payload,
      };

    case WATCHLIST_LOADED_FAILED:
      return {
        ...state,
        inWatchList: null,
      };
    case ADD_TO_WATCHLIST_SUCCESS:
      return {
        ...state,
        addToWatchList: action.payload,
      };
    case ADD_TO_WATCHLIST_FAILED:
      return {
        ...state,
        addToWatchList: null,
        error: action.payload,
      };
    case REMOVE_FROM_WATCHLIST_SUCCESS:
      return {
        ...state,
        removeFromWatchList: action.payload,
      };
    case REMOVE_FROM_WATCHLIST_FAILED:
      return {
        ...state,
        removeFromWatchList: null,
        error: action.payload,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addComments: action.payload,
      };
    case ADD_COMMENT_FAILED:
      return {
        ...state,
        addComments: null,
        error: action.payload,
      };
    case RATE_MOVIE_SUCCESS:
      
      return {
        ...state,
        rateMovie: action.payload,
      };
    case RATE_MOVIE_FAILED:
      return {
        ...state,
        rateMovie: null,
        error: action.payload,
      };
  }
};
