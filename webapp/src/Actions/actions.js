import {
  FETCH_DRIVERS,
  FETCH_DRIVER_DETAILS,
  FETCH_CARS,
  FETCH_INCIDENTS,
  FETCH_NEW_INCIDENTS,
  FETCH_INCIDENT
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
  console.log(id);
  return {
    type: FETCH_INCIDENT,
    id
  };
};

export const fetchNewIncidents = () => {
  return {
    type: FETCH_NEW_INCIDENTS
  };
};
