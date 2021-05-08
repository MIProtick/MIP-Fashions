import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage.page';
import Shop from './pages/shop/Shop.page';
import Authentication from './pages/authentication/Authentication.page';
import Header from './components/header/Header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }
  
  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      // this.setState({ currentUser: user });
      // console.log(user);
      if(authUser){
        const userRef = await createUserProfileDocument(authUser);
        
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data(),
            }
          });
          console.log(this.state);
        });
      } else{
        this.setState({ currentUser: authUser });
      }
      
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/authentication' component={Authentication} />

        </Switch>
      </div>
    );
  }
}

export default App;
