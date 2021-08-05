import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import './App.scss';

//components
import ShopList from './ShopList/ShopList';
import Items from './Items/Items';
import NotFound from './NotFound/NotFound';
import Navbar from './Navbar/Navbar';
//post routes
import AddShopList from './ShopList/AddShopList/AddShopList';
import { Sanctum } from 'react-sanctum';




//auth routes
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import { UserContext } from '../UserContext';





const  App = () => {

//   const [loggedIn, setLoggedIn] = React.useState(false);
  
//   const login = () => {

//     setLoggedIn(true);

// };
  
    return (
      
          <Router>
        <Navbar />
          
        
          <Switch>
              <UserContext.Provider value="hello context">
                <Route exact path="/" render={() => <ShopList />}/>
                <Route path="/login" render={() => <Login />} />
                <Route path="/register" render={() => <Register />} />
                <Route exact  path="/items/:id" render={ () => <Items /> } />
                <Route path="/add-shop-list" render={() => <AddShopList/> } />
              </UserContext.Provider>
              
              <Route component={NotFound} />
          </Switch>
        </Router>
      
        
    );
 
  
}

export default App;

// if (document.getElementById('app')) {
//     ReactDOM.render(<Example />, document.getElementById('app'));
// }
