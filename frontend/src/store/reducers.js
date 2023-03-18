import { combineReducers } from "redux";
import * as types from "./types";

const initialState = {
  signer: null,
};
const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACCOUNT:
      return {
        ...state,
        signer: action.payload,
      };
  }
};

const rootReducer = combineReducers({
  account: accountReducer,
});

export default accountReducer;
