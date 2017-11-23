import {
  FETCH_INCIDENT,
  FETCH_INCIDENT_SUCCESS,
  FETCH_INCIDENT_FAIL
} from "../Actions/const";

import { put, takeLatest } from "redux-saga/effects";
import api from "../ApiService";

function* fetchIncident(action) {
  try {
    const data = yield api.get("incidents/" + action.id);
    yield put({ type: FETCH_INCIDENT_SUCCESS, data });
  } catch (err) {
    yield put({ type: FETCH_INCIDENT_FAIL });
  }
}
export function* incident_watch() {
  yield takeLatest(FETCH_INCIDENT, fetchIncident);
}
