import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import './App.scss';

//components
import Home from './Home';
import NotFound from './NotFound/NotFound';


class App extends Component {
  render(){
    return (
        <Router>
          <Switch>
              <Route exact path="/" render={ () => <Home /> } />
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
