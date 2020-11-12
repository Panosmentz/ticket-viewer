export default (state, action) => {
  switch (action.type) {
    case "SET_TICKETS":
      return {
        ...state,
        tickets: action.payload, //the payload is tickets.json returned from the API call. tickets can now be accessed by all components in the APP
        isAuthenticated: true, //only true if API response status is 200 OK
      };
    default:
      return state;
  }
};
