export default (state = null, action) => {
  switch (action.type) {
    case "CAR_NAME":
      return action.data;
      break;

    default:
      return state;
      break;
  }
};
