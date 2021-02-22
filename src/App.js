

import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

//*The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';

//* Firebase
import { auth, createUserProfile, addCollectionAndDocs } from './firebase/Firebase.utils'

//*reselect library
import { createStructuredSelector } from 'reselect'

import Header from './components/Header/header'

//* page
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

//* from redux
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector'


import { selectCollectionsForPreview } from './redux/shop/shop.selector'

const App = ({ setCurrentUser, currentUser }) => {

  // const unsubscribeFromAuth = null;

  //* component did mount
  useEffect(() => {
    console.log('I am subscribed')

    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfile(userAuth)

        //*on snapsot is similiar with on state change
        userRef.onSnapshot(snapshot => {

          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }

          })
        })
      }
      else {
        setCurrentUser(userAuth)
      }

      //*add collection to database by call function , title and items from db
      // addCollectionAndDocs('koleksi', koleksi.map(({title,items}) => ({title,items}) ))

    })

    //* componentWillUnmount()
    return () => {
      console.log('I am unsubscribed')
      unsubscribeFromAuth()
    }

    
  }, [setCurrentUser])


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />

        {//* if no currentUser display redirect home    
        }            <Route exact path='/signin' render={() => currentUser ?
          (<Redirect to='/' />) : <SignInAndSignUpPage />} />
      </Switch>
    </div>
  );

}

//* call currentUser from redux
//* user fromm root reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  koleksi: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);