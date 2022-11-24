import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: "",
  error: "",
  id: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER:
    case types.LOGIN_USER:
    case types.LOGOUT_USER:
    case types.GET_USER:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_USER_SUCCESS:
    case types.REGISTER_USER_SUCCESS:
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case types.REGISTER_USER_FAULURE:
    case types.LOGIN_USER_FAILURE:
    case types.GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
