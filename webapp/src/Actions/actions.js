import {
  FETCH_DRIVERS,
  FETCH_CARS,
  FETCH_INCIDENTS,
  FETCH_NEW_INCIDENTS
} from "./const";

export const fetchDrivers = () => {
  return {
    type: FETCH_DRIVERS
  };
};
export const fetchCars = () => {
  return {
    type: FETCH_CARS
  };
};
export const fetchIncidents = () => {
  return {
    type: FETCH_INCIDENTS
  };
};

export const fetchNewIncidents = () => {
  return {
    type: FETCH_NEW_INCIDENTS
  };
};
