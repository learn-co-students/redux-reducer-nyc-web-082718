export function manageFriends(state, action){
  if(action.type === "ADD_FRIEND" && !!action.friend.name && !!action.friend.hometown && !!action.friend.id){
    return {...state, ...state.friends.push(action.friend)}
  }
  else if(action.type === "REMOVE_FRIEND"){
    return {...state, friends: [...state.friends.filter(f => f.id !== action.id)]}
  }
  else{
    return {...state}
  }
}
