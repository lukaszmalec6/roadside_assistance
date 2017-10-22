import { combineReducers } from "redux";
import drivers from "./drivers";
import cars from "./cars";
import incidents from "./incidents";
import incident from "./incident";
import live_incidents from "./live_incidents";
export const reducers = combineReducers({
  drivers,
  cars,
  incidents,
  live_incidents,
  incident
});
