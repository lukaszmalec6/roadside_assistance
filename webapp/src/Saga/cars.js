import {
  FETCH_CARS,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAIL
} from "../Actions/const";

import { put, takeLatest } from "redux-saga/effects";
import ApiService from "../ApiService";
const api = new ApiService();
function* fetchCars(action) {
  try {
    const data = yield api.GET("/cars");
    yield put({ type: FETCH_CARS_SUCCESS, data });
  } catch (err) {
    yield put({ type: FETCH_CARS_FAIL });
  }
}
export function* cars_watch() {
  yield takeLatest(FETCH_CARS, fetchCars);
}
