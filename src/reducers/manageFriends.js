export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      // return Object.assign({}, state, {friends: [...state.friends, action.friend]});
      return {...state, friends: [...state.friends, action.friend]};
    case "REMOVE_FRIEND":
      // return Object.assign({}, state, {friends: state.friends.filter(friend => friend.id !== action.id)});
      return {...state, friends: state.friends.filter(friend => friend.id !== action.id)};
    default:
      return state;
  }
}
