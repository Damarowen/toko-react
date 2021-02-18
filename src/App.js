

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

//*The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';

//* Firebase
import { auth, createUserProfile } from './firebase/Firebase.utils'

//*reselect library
import { createStructuredSelector } from 'reselect'

import Header from '../src/components/Header/header'

//* page
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

//* from redux
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector'


class App extends React.Component {
  //* no longer needed because redux
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfile(userAuth)

        //*on snapsot is similiar with on state change
        userRef.onSnapshot(x => {

          setCurrentUser({
            currentUser: {
              id: x.id,
              ...x.data()
            }

          })
          console.log(this.state)

        })
      } else {
        //* if user log out set to false
        this.setState({ currentUser: userAuth })
      }

      setCurrentUser(userAuth);

    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          {//* if no currentUser display redirect home    
   }            <Route exact path='/signin'render={() => this.props.currentUser ? 
            (<Redirect to='/' />) : <SignInAndSignUpPage /> } />
        </Switch>
      </div>
    );
  }

}

//* call currentUser from redux
//* user fromm root reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);