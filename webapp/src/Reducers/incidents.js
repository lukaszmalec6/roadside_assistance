const initial = {
  incidents: [],
  error: false
};
const incidents = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_INCIDENTS":
      return {
        ...state
      };
    case "FETCH_INCIDENTS_SUCCESS":
      return {
        ...state,
        incidents: action.data
      };
    case "FETCH_INCIDENTS_FAIL":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default incidents;
