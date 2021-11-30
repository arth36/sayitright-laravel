import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
//import * as router from 'react-router-dom';
import axios from 'axios';
// routes config
import routes from './routes';
import localStorage from './api/LocalStorage';


let axiosInterceptor = null;
const AuthRouter = ({ component: Component, ...rest }) => {
  return (
      
    <div>
      <Route {...rest} render={props => (
        (
          localStorage.getItem('sayitright_token') !== null
        )
          ? <Component {...props} /> : (
            this.props.history.push("/login")
            // <Redirect to={{
            //   pathname: "/login"
            // }} />
          )
      )} />
    </div>
    
  )
}


class DefaultLayout extends Component {

  loading = () => <div className="animated  text-center">loading...</div>

  render() {
    return (
      <div className="app">
        <div>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <AuthRouter path={route.path} component={route.component} key={idx} name="{route.name}" exact={route.exact} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/login" />
                </Switch>
              </Suspense>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;