import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './CartDropdown.styles.scss'

import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'



//*reselect library
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch}) => {
    return <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(x => <CartItem key={x.id} barang={x} />)
                : <span className='cart-empty'> Your cart is empty</span>
            }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                //* call dispatch in onClick
                dispatch(toggleCartHidden())
                }}> Checkout</CustomButton>
    </div>
}

//* cart is from root reducer
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

//* we dont need call map dispatch to props, because we not supply second argument in connect
export default withRouter(connect(mapStateToProps)(CartDropdown))