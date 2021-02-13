
import React from 'react'
import './Cart.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'



import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

//*from reSelect Library
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'


//* toggleCartHidden bisa dipanggil karena sudah di mapDispatchtoProps
const Cart = ( { toggleCartHidden, itemCount}) => {
    return <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
}


const mapStateToProps = createStructuredSelector({
    
        itemCount: selectCartItemsCount
})


const mapDispatchToProps = dispatch => () => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})



export default connect(mapStateToProps, mapDispatchToProps)(Cart)