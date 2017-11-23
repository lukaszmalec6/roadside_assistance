import {
  FETCH_DRIVERS,
  FETCH_DRIVERS_SUCCESS,
  FETCH_DRIVERS_FAIL
} from "../Actions/const";

import { put, takeLatest } from "redux-saga/effects";
import api from "../ApiService";

function* fetchDrivers(action) {
  try {
    const data = yield api.get("drivers");
    yield put({ type: FETCH_DRIVERS_SUCCESS, data });
  } catch (err) {
    yield put({ type: FETCH_DRIVERS_FAIL });
  }
}
export function* drivers_watch() {
  yield takeLatest(FETCH_DRIVERS, fetchDrivers);
}
