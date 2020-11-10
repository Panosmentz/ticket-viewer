export default (state, action) => {
  switch (action.type) {
    case "SET_TICKETS":
      return {
        ...state,
        tickets: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
