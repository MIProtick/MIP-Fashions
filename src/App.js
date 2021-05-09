import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/homepage/Homepage.page';
import Shop from './pages/shop/Shop.page';
import Authentication from './pages/authentication/Authentication.page';
import Header from './components/header/Header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/User.action';

import './App.css';

class App extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null,
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(authUser);
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/authentication' component={Authentication} />

        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
