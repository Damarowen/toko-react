import { createSelector} from 'reselect'

//* select cart from reducer state
const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    //* from root reduce
    cart =>  cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
        //* from root reducer
    cart =>  cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total,item) => total + item.quantity, 0)
)


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total,item) => total + item.quantity * item.price, 0)
)
