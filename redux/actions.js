import axios from "axios";
import { auth_URL, api_URL } from "../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAILURE,
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
import { Alert } from "react-native";

// ============================================================
// User Authenctication and Authorization Actions
// ============================================================

const setLoginState = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

const setRegisterState = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload: payload,
  };
};

const setRegisterStateFalse = (payload) => {
  return {
    type: REGISTER_FAIL,
    payload: payload,
  };
};

const setLogoutState = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

const setLoadUserState = (payload) => {
  return {
    type: USER_LOADED_SUCCESS,
    payload: payload,
  };
};

const setLoadUserStateFail = (payload) => {
  return {
    type: USER_LOADED_FAILURE,
    payload: payload,
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    console.log(auth_URL.AUTH_URI);
    try {
      const res = await axios.post(`${auth_URL.AUTH_URI}/token/login/`, {
        username,
        password,
      });
      // console.log(res.data);
      
      const token = res.data.auth_token;
      AsyncStorage.setItem("@token", "Token " + token);
      dispatch(setLoginState("Token " + token));
    } catch (e) {
      console.log(e.response.data);
      Alert.alert("Login Failed", "Please check your credentials");
    }
  };
};

export const register = (username, email, password, re_password) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        username: username,
        email: email,
        password: password,
        re_password: re_password,
      });
      const res = await axios.post(`${auth_URL.AUTH_URI}/users/`, body, config);
      if (res.status === 201) {
        dispatch(setRegisterState(res.data));
        Alert.alert(
          "Success",
          "Registration Successful Please verify your email"
        );
      }
    } catch (e) {
      console.log(e);
      if (e.response.data) {
        if (e.response.data.username) {
          Alert.alert("Username already exists");
        }
        if (e.response.data.email) {
          Alert.alert("Email already exists");
        }
        dispatch(setRegisterStateFalse(e.response.data));
      } else {
        Alert.alert("Register Failed", "Please try again later.");
      }
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem("@token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      const res = await axios.post(
        `${auth_URL.AUTH_URI}/token/logout/`,
        {},
        config
      );
      if (res.status === 204) {
        AsyncStorage.removeItem("@token");
        dispatch(setLogoutState());
      }
    } catch {
      AsyncStorage.removeItem("@token");
      dispatch(setLogoutState());
    }
  };
};

export const loadUser = () => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem("@token");
      console.log(token);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      const res = await axios.get(`${auth_URL.AUTH_URI}/users/me/`, config);
      if (res.status === 200) {
        dispatch(setLoadUserState(res.data));
      }
    } catch (e) {
      console.log(e.response);
      AsyncStorage.removeItem("@token");
      dispatch(setLoadUserStateFail());
    }
  };
};

// ===================xxxxxxxxxx==============================
// User Authenctication and Authorization Actions
// ===================xxxxxxxxxx==============================

// ============================================================
// User and WatchList Interaction
// ============================================================

const setLoadWatchlist = (payload) => {
  return {
    type: WATCHLIST_LOADED,
    payload: payload,
  };
};

const setLoadWatchlistFail = () => {
  return {
    type: WATCHLIST_LOADED_FAILED,
    payload: "Failed to load watchlist",
  };
};
export const loadUserWatchlist = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${api_URL.API_URI}/watchlist/`);
      if (res.status === 200) {
        dispatch(setLoadWatchlist(res.data));
      }
    } catch (e) {
      console.log(e.response.data);
      dispatch(setLoadWatchlistFail());
    }
  };
};

const setAddToWatchlist = (payload) => {
  alert("Added to watchlist");
  return {
    type: ADD_TO_WATCHLIST_SUCCESS,
    payload: payload,
  };
};

const setAddToWatchlistFail = (payload) => {
  alert("Movie is already in watchlist");
  return {
    type: ADD_TO_WATCHLIST_FAILED,
    payload: payload,
  };
};

export const addToWatchList = (id) => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem("@token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      const res = await axios.post(`${api_URL.API_URI}/watchlist/`, {
        movie_id: id,
      }, config);
      if (res.status === 201) {
        dispatch(setAddToWatchlist(res.data));
      }
    } catch (e) {
      console.log(e.response.data);
      dispatch(setAddToWatchlistFail(e.response.data));
    }
  };
};

const setRemoveFromWatchlist = (payload) => {
  return {
    type: REMOVE_FROM_WATCHLIST_SUCCESS,
    payload: payload,
  };
};

const setRemoveFromWatchlistFailed = (payload) => {
  return {
    type: REMOVE_FROM_WATCHLIST_FAILED,
    payload: payload,
  };
};

export const removeFromWatchlist = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`${api_URL.API_URI}/watchlist/`, {
        movie_id: id,
      });
      if (res.status === 204) {
        dispatch(setRemoveFromWatchlist(res.data));
      }
    } catch (e) {
      console.log(e.response.data);
      dispatch(setRemoveFromWatchlistFailed(e.response.data));
    }
  };
};
// ===================xxxxxxxxxx==============================
// User and WatchList Interaction
// ===================xxxxxxxxxx==============================

// ============================================================
// User and Movies Interaction
// ============================================================
const setAddComment = (payload) => {
  return {
    type: ADD_COMMENT_SUCCESS,
    payload: payload,
  };
};

const setAddCommentFailed = (payload) => {
  return {
    type: ADD_COMMENT_FAILED,
    payload: payload,
  };
};

export const AddComments = (id, comment) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${api_URL.API_URI}/movies/add_comments/${id}`,
        {
          comment: comment,
        }
      );
      if (res.status === 200) {
        dispatch(setAddComment(res.data));
      }
    } catch (e) {
      console.log(e.response.data);
      dispatch(setAddCommentFailed(e.response.data));
    }
  };
};

const setRateMovieSuccess = (payload) => {
  return {
    type: RATE_MOVIE_SUCCESS,
    payload: payload,
  };
};

const setRateMovieFailed = (payload) => {
  return {
    type: RATE_MOVIE_FAILED,
    payload: payload,
  };
};

export const rateMovie = (id, rating, review) => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem("@token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };

      const res = await axios.post(
        `${api_URL.API_URI}/movies/rate_movie/${id}`,
        {
          rating: rating,
          review: review,
        },
        config
      );
      if (res.status === 200) {
        console.log("Success")
        dispatch(setRateMovieSuccess(res.data));
      }
    } catch (e) {
      console.log(e.response.data);
      dispatch(setRateMovieFailed(e.response.data));
    }
  };
};


// ===================xxxxxxxxxx==============================
// User and Movies Interaction
// ===================xxxxxxxxxx==============================
