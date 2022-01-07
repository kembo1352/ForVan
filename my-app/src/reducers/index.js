import { combineReducers } from "redux";
import countMoneyReducer from "./countMoney";

const allReducers = combineReducers({
  countMoney: countMoneyReducer,
});

export default allReducers;
