export function manageFriends(
  state = {
    friends: []
  }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]};
    case "REMOVE_FRIEND":
      let indexOfaction = state.friends.indexOf(
        friend => friend.id === action.id
      );

      return {
        friends: indexOfaction
      };
    default:
      return state;
  }
}
