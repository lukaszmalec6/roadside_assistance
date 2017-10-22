import { all, fork } from "redux-saga/effects";
import { drivers_watch } from "./drivers";
import { cars_watch } from "./cars";
import { incidents_watch } from "./incidents";
import { incident_watch } from "./incident";
import { live_incidents_watch } from "./live_incidents";
export default function* rootSaga() {
  yield all([
    fork(drivers_watch),
    fork(cars_watch),
    fork(incidents_watch),
    fork(live_incidents_watch),
    fork(incident_watch)
  ]);
}
