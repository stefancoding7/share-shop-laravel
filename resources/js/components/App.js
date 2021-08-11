import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import './App.scss';

//components
import ShopList from './ShopList/ShopList';
import Items from './Items/Items';
import NotFound from './NotFound/NotFound';
import Navbar from './Navbar/Navbar';
import Settings from '../components/Settings/Settings';
import Welcome from '../components/Welcome/Welcome';
//post routes
import AddShopList from './ShopList/AddShopList/AddShopList';






//auth routes
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';

import PrivateRoute from '../PrivateRoute';
import withContext from '../Context';

const ShopListWithContext = withContext(ShopList);
const LoginWithContext = withContext(Login);
const AddShopListWithContext = withContext(AddShopList);
const ItemsWithContext = withContext(Items);
const RegisterWithContext = withContext(Register);
const SettingsWithContext = withContext(Settings);
const NavBarWithContext = withContext(Navbar);
const  App = (props) => {

//   const [loggedIn, setLoggedIn] = React.useState(false);
  
//   const login = () => {

//     setLoggedIn(true);

// };

    return (
     
          <Router>
          <NavBarWithContext />
          
        
          <Switch>
                  <Route exact path="/" render={() => <Welcome />} />
                  <PrivateRoute path="/shoplists" component={ShopListWithContext}/>
                  <PrivateRoute path="/items/:id" component={ItemsWithContext} />
                  <PrivateRoute path="/add-shop-list" component={AddShopListWithContext} />
                  <PrivateRoute path="/settings" component={SettingsWithContext} />
                  <Route path="/login" component={LoginWithContext} />
                  <Route path="/register" component={RegisterWithContext} />
                  
                  <Route component={NotFound} />
               
              
             
          </Switch>
        </Router>
      
        
    );
 
  
}

export default App;

// if (document.getElementById('app')) {
//     ReactDOM.render(<Example />, document.getElementById('app'));
// }
