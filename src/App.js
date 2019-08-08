import React from 'react';
import Login from './components/Login'
import MainMenu from './components/MainMenu'
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './guards/PrivateRoutes'
import PublicRoutes from './guards/PublicRoutes'
function App() {
  return (
    <React.Fragment>
       <Switch>
          <PrivateRoute exact path="/" component={MainMenu} />
          <PublicRoutes exact path="/sign-in" component={Login} />
          {/* <Route exact path="/" component={() => (
            <Redirect to={"/search"} />
          )} /> */}
        </Switch>
    </React.Fragment>
  );
}

export default App;
