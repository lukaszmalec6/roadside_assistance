import {
  FETCH_INCIDENTS,
  FETCH_INCIDENTS_SUCCESS,
  FETCH_INCIDENTS_FAIL
} from "../Actions/const";

import { put, takeLatest } from "redux-saga/effects";
import ApiService from "../ApiService";
const api = new ApiService();
function* fetchIncidents(action) {
  try {
    const data = yield api.GET("/incidents");
    yield put({ type: FETCH_INCIDENTS_SUCCESS, data });
  } catch (err) {
    yield put({ type: FETCH_INCIDENTS_FAIL });
  }
}
export function* incidents_watch() {
  yield takeLatest(FETCH_INCIDENTS, fetchIncidents);
}
