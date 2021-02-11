import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/Firebase.utils'
import Cart from '../Cart/Cart'

//*The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';


import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser }) => {
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
        </div>
    )
}

//* passing from root reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  });
  
  export default connect(mapStateToProps)(Header);
