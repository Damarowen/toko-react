import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/Firebase.utils'
import Cart from '../Cart/Cart'

//*reselect library
import { createStructuredSelector } from 'reselect'

//*The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';

//* from redux
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'


import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartDropdown from '../CartDropdown/CartDropdown';

//* current user and hidden params from mapStateToProps
const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo-container' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : 
                    <Link  className='option'  to='/signin'> SIGN IN </Link>
                }
                <Cart/>
            </div>
            {
                hidden ? null :  <CartDropdown/>

            }
        </div>
    )
}

//* passing from root reducer
//*sebelum reselect
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     currentUser,
//     hidden
//   });


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });


  
  export default connect(mapStateToProps)(Header);
