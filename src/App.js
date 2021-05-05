import React from 'react';
import Homepage from './pages/homepage/Homepage.page';
import Shop from './pages/shop/Shop.page';
import Authentication from './pages/authentication/Authentication.page';
import Header from './components/header/Header.component';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  
  componentDidMount(){
    
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

export default App;
