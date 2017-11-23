const initial = {
  driver: {},
  error: false
};
const driver = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_DRIVER":
      return {
        ...state
      };
    case "FETCH_DRIVER_SUCCESS":
      return {
        ...state,
        driver: action.data
      };
    case "FETCH_DRIVER_FAIL":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default driver;
