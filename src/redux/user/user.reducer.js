import { userActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
      //* yang mau diganti action.type
    switch (action.type) {
        //*if set current user
      case userActionTypes.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;