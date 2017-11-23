import {
  FETCH_CARS,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAIL
} from "../Actions/const";

import { put, takeLatest } from "redux-saga/effects";
import api from "../ApiService";

function* fetchCars(action) {
  try {
    const data = yield api.get("cars");
    yield put({ type: FETCH_CARS_SUCCESS, data });
  } catch (err) {
    yield put({ type: FETCH_CARS_FAIL });
  }
}
export function* cars_watch() {
  yield takeLatest(FETCH_CARS, fetchCars);
}
