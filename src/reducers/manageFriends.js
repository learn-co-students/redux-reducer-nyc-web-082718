export function manageFriends(state, action){
  const newFriends = [...state.friends]
  switch (action.type) {
    case 'ADD_FRIEND':
    newFriends.push(action.friend)
    return {friends:newFriends}
    break;
    case 'REMOVE_FRIEND':
    return {friends: newFriends.filter(friend => friend.id !==action.id)}
    break;
    default:
    return state
  }
}
