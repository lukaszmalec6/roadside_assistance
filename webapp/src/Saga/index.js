import { all, fork } from "redux-saga/effects";
import { drivers_watch } from "./drivers";
export default function* rootSaga() {
  yield all([fork(drivers_watch)]);
}
