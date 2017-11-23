import {
  FETCH_DRIVER,
  FETCH_DRIVER_SUCCESS,
  FETCH_DRIVER_FAIL
} from "../Actions/const";

import { put, takeLatest } from "redux-saga/effects";
import api from "../ApiService";

function* fetchDriver(action) {
  try {
    const data = yield api.get("drivers/" + action.id);
    yield put({ type: FETCH_DRIVER_SUCCESS, data });
  } catch (err) {
    yield put({ type: FETCH_DRIVER_FAIL });
  }
}
export function* driver_watch() {
  yield takeLatest(FETCH_DRIVER, fetchDriver);
}
