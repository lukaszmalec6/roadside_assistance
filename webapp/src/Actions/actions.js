import {
  FETCH_DRIVERS,
  FETCH_CARS,
  FETCH_INCIDENTS,
  FETCH_NEW_INCIDENTS,
  FETCH_INCIDENT,
  FETCH_CAR,
  FETCH_DRIVER
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
export const fetchIncident = id => {
  return {
    type: FETCH_INCIDENT,
    id
  };
};
export const fetchCar = id => {
  return {
    type: FETCH_CAR,
    id
  };
};

export const fetchDriver = id => {
  return {
    type: FETCH_DRIVER,
    id
  };
};

export const fetchNewIncidents = () => {
  return {
    type: FETCH_NEW_INCIDENTS
  };
};
