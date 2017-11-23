import { FETCH_CAR, FETCH_CAR_FAIL, FETCH_CAR_SUCCESS } from "../Actions/const";

import { put, takeLatest } from "redux-saga/effects";
import api from "../ApiService";

function* fetchCar(action) {
  try {
    const data = yield api.get("cars/" + action.id);
    yield put({ type: FETCH_CAR_SUCCESS, data });
  } catch (err) {
    yield put({ type: FETCH_CAR_FAIL });
  }
}
export function* car_watch() {
  yield takeLatest(FETCH_CAR, fetchCar);
}
