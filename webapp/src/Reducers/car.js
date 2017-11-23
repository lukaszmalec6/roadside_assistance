const initial = {
  car: {},
  error: false
};
const car = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_CAR":
      return {
        ...state
      };
    case "FETCH_CAR_SUCCESS":
      return {
        ...state,
        car: action.data
      };
    case "FETCH_CAR_FAIL":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default car;
