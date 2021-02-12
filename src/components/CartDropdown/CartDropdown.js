import React from 'react'

import './CartDropdown.styles.scss'

import CustomButton from '../CustomButton/CustomButton'

const CartDropdown = () => {
    return <div className="cart-dropdown">
        <div className="cart-items"/>
            <CustomButton> Checkout</CustomButton>
    </div>
}

export default CartDropdown