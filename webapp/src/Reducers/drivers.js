const initial = {
  drivers: [],
  error: false
};
const drivers = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_DRIVERS":
      return {
        ...state
      };
    case "FETCH_DRIVERS_SUCCESS":
      console.log(action.data);
      return {
        ...state,
        drivers: action.data
      };
    case "FETCH_DRIVERS_FAIL":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default drivers;
