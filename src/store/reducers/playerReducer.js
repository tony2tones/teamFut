const initState = {}
/*eslint-disable */
const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case "PLAYER_ADDED":
      console.log("created user", action.user);
      return state;
    case "PLAYER_ADDED_ERROR":
      console.log("create user error", action.err);
      return state;
    default:
      return state;
  }
};

export default playerReducer;