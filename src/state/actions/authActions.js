import axios from "axios";
import * as types from "../types";
import axiosWithAuth from '../../utils/axiosWithAuth';

export const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_USER });
  try {
    const loggedUser = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users/login`,
      {
        email,
        password,
      }
    );
    localStorage.setItem("token", loggedUser.data.token);
    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: loggedUser.data });
  } catch (error) {
    dispatch({ type: types.LOGIN_USER_FAILURE, payload: error.message });
  }
};

export const registerUser = (name, email, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_USER });
  try {
    const newUser = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users/`,
      {
        name,
        email,
        password,
      }
    );
    localStorage.setItem("token", newUser.data.token);
    dispatch({ type: types.REGISTER_USER_SUCCESS, payload: newUser.data });
  } catch (error) {
    dispatch({ type: types.REGISTER_USER_FAULURE, payload: error.message });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({type: types.GET_USER});
  try {
    const user = await axiosWithAuth().get(`${process.env.REACT_APP_BACKEND_URL}/users/me`);
    dispatch({type: types.GET_USER_SUCCESS, payload: user.data});
  } catch (error) {
    dispatch({ type: types.GET_USER_FAILURE, payload: error.message});
  }
};