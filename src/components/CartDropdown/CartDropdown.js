import React from 'react'
import { connect } from 'react-redux'

import './CartDropdown.styles.scss'

import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'

const CartDropdown = ({ cartItems}) => {
    return <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(x => <CartItem key={x.id} barang={x} />)
            }
            </div>
            <CustomButton> Checkout</CustomButton>
    </div>
}

//* cart is from root reducer
const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)