

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//*The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';

import './App.css';


import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/Header/header.component'
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component'
import { auth, createUserProfile } from './firebase/Firebase.utils'

//* from redux
import { setCurrentUser } from './redux/user/user.actions';


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
          //* if no currentUser display redirect home
          <Route exact path='/signin'render={() => this.props.currentUser ? 
            (<Redirect to='/' />) : <SignInAndSignUpPage /> } />
        </Switch>
      </div>
    );
  }

}

//* call currentUser from redux
const mapStateToProps = ({ user }) => ({

  currentUser: user.currentUser

})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);