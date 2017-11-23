import {
  FETCH_NEW_INCIDENTS,
  FETCH_NEW_INCIDENTS_SUCCESS,
  FETCH_NEW_INCIDENTS_FAIL
} from "../Actions/const";

import { put, takeLatest } from "redux-saga/effects";
import api from "../ApiService";

function* fetchLiveIncidents(action) {
  try {
    const data = yield api.get("liveincidents");
    yield put({ type: FETCH_NEW_INCIDENTS_SUCCESS, data });
  } catch (err) {
    yield put({ type: FETCH_NEW_INCIDENTS_FAIL });
  }
}
export function* live_incidents_watch() {
  yield takeLatest(FETCH_NEW_INCIDENTS, fetchLiveIncidents);
}
