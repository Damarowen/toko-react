import CartActionTypes from './cart.types'

const INITIAL_STATE = {
    //* hide dropdown when first display
    hidden: true
}

const cartReducer = ( state = INITIAL_STATE, action) => {
    switch ( action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                //* toggle false and true
                hidden: !state.hidden
            }
           default:
               return state;
    }
}

export default cartReducer