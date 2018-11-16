export function manageFriends(state, action){


  function removeFriend (removeFriendId) {
    return state.friends.filter(function(friend){
      return friend.id !== removeFriendId
    })
  }

  switch (action.type) {
    case "ADD_FRIEND":
    return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
    return {friends: removeFriend(action.id)}
    default:
    return state
  }
}
