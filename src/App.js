import React from 'react';
import Login from './components/Login'
import MainMenu from './components/MainMenu'
import newRecord from './components/recordings/Checkout'
import { Switch } from 'react-router-dom';
import PrivateRoute from './guards/PrivateRoutes'
import PublicRoutes from './guards/PublicRoutes'

function App() {
  return (
    <React.Fragment>
       <Switch>
          <PrivateRoute exact path="/" component={MainMenu} />
          <PublicRoutes exact path="/sign-in" component={Login} />
          {/* <PublicRoutes exact path="/sign-up" component={Register} /> */}          
          <PrivateRoute exact path="/new-record" component={newRecord} />
          {/* <PrivateRoute exact path="/recordins" component={Recordins} /> */}
          {/* <Route exact path="/" component={() => (
            <Redirect to={"/search"} />
          )} /> */}
        </Switch>
    </React.Fragment>
  );
}

export default App;
