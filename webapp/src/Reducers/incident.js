const initial = {
  incident: {},
  error: false
};
const incident = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_INCIDENT":
      return {
        ...state
      };
    case "FETCH_INCIDENT_SUCCESS":
      return {
        ...state,
        incident: action.data
      };
    case "FETCH_INCIDENT_FAIL":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default incident;
