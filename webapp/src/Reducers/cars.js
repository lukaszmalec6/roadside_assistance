const initial = {
  cars: [],
  error: false
};
const cars = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_CARS":
      return {
        ...state
      };
    case "FETCH_CARS_SUCCESS":
      return {
        ...state,
        cars: action.data
      };
    case "FETCH_CARS_FAIL":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default cars;
