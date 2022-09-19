const initaialState = {
  isLoggedIn : false,
}

export const authReducer = (state =initaialState,action)=>{
  switch(action.type){
    case 'IS_LOGGED_IN':
      return {...state, isLoggedIn : !state.isLoggedIn}
    default:
      return state
  }
}