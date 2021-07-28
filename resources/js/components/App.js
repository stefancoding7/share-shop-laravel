import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import './App.scss';

//components
import ShopList from './ShopList/ShopList';
import Items from './Items';
import NotFound from './NotFound/NotFound';
import Navbar from './Navbar/Navbar';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';


class App extends Component {
  render(){
    return (
        <Router>
        <Navbar />
          
        
          <Switch>
              
              <Route exact path="/" render={() => <ShopList />}/>
              <Route path="/login" render={() => <Login />} />
              <Route path="/register" render={() => <Register />} />
              <Route path="/items" render={ () => <Items /> } />
              <Route component={NotFound} />
          </Switch>
        </Router>
    );
  }
  
}

export default App;

// if (document.getElementById('app')) {
//     ReactDOM.render(<Example />, document.getElementById('app'));
// }
