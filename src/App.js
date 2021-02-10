

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';


import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/Header/header.component'
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component'
import { auth, createUserProfile } from './firebase/Firebase.utils'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {



      if (userAuth) {
        const userRef = await createUserProfile(userAuth)

        //*on snapsot is similiar with on state change
        userRef.onSnapshot(x => {

          this.setState({
            currentUser: {
              id: x.id,
              ...x.data()
            }
          }, () => {  console.log(this.state)  })
        })

      } else {
        //* if user log out set to false
        this.setState({ currentUser: userAuth})
      }

      createUserProfile(userAuth)
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header userSession={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
