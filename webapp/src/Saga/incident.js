import {
  FETCH_INCIDENT,
  FETCH_INCIDENT_SUCCESS,
  FETCH_INCIDENT_FAIL
} from "../Actions/const";

import { put, takeLatest } from "redux-saga/effects";
import ApiService from "../ApiService";
const api = new ApiService();
function* fetchIncident(action) {
  try {
    const data = yield api.GET("/incidents/" + action.id);
    yield put({ type: FETCH_INCIDENT_SUCCESS, data });
  } catch (err) {
    yield put({ type: FETCH_INCIDENT_FAIL });
  }
}
export function* incident_watch() {
  yield takeLatest(FETCH_INCIDENT, fetchIncident);
}
