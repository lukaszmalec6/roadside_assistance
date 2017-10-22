const initial = {
  live_incidents: [],
  error: false
};
const live_incidents = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_NEW_INCIDENTS":
      return {
        ...state
      };
    case "FETCH_NEW_INCIDENTS_SUCCESS":
      return {
        ...state,
        live_incidents: action.data
      };
    case "FETCH_NEW_INCIDENTS_FAIL":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default live_incidents;
