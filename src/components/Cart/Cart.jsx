
import React from 'react'
import './Cart.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'



import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

//* toggleCartHidden bisa dipanggil karena sudah di mapDispatchtoProps
const Cart = ( { toggleCartHidden, itemCount}) => {
    return <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
}


const mapStateToProps = ({ cart: { cartItems}}) => {
    return{
        itemCount: cartItems.reduce((total,item) => total + item.quantity, 0)
    }
}


const mapDispatchToProps = dispatch => () => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})



export default connect(mapStateToProps, mapDispatchToProps)(Cart)