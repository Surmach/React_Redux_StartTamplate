import { combineReducers } from "redux";
import CarReduser from "./car";
import ActionCar from "./car-active";

const allRedusers = combineReducers({
  cars: CarReduser,
  action: ActionCar
});

export default allRedusers;
