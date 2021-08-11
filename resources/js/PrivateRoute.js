import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

const fn = ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      { context => (
        <Route
          {...rest}
          render={props => context.authenticatedUser ? (
              <Component {...props} />
            ) : (
              <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }} />
            )
          }

        />
      )}
    </Consumer>
  );
};

export default fn;