import * as types from "../types";

const initialState = {
  isLoading: false,
  plants: [],
  error: "",
};

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLANTS:
    case types.ADD_PLANT:
    case types.UPDATE_PLANT:
    case types.WATER_PLANT:
    case types.DELETE_PLANT:
      return {
        ...state,
        isLoading: true,
      };
    case types.WATER_PLANT_FAILURE:
    case types.GET_PLANTS_FAILURE:
    case types.ADD_PLANT_FAILURE:
    case types.UPDATE_PLANT_FAILURE:
    case types.DELETE_PLANT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default plantReducer;
