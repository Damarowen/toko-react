import CartActionTypes from './cart.types'
import { addItemToCart, removeItemFromCart} from './cart.utils'

const INITIAL_STATE = {
    //* hide dropdown when first display
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                //* toggle false and true
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_SINGLE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    //* keep item yang tidak dihapus
                    y => y.id !== action.payload.id
                )
            };
        default:
            return state;
    }
}

export default cartReducer