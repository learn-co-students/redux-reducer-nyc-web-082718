export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND') {
    return {...state, friends: [...state.friends, action.friend]}
  } else if (action.type === 'REMOVE_FRIEND') {
    let afterRemoved = state.friends.filter(friend => friend.id !== action.id )
    return {...state, friends: afterRemoved}
  } else {
    return state
  }
}
