import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import MainMenu from './components/MainMenu';
import RecordingList from './components/RecordingsList';
import UserList from './components/UsersList';
import Checkout from './components/recordings/Checkout.js';
import { Switch } from 'react-router-dom';
import PrivateRoute from './guards/PrivateRoutes';
import PublicRoutes from './guards/PublicRoutes';

function App() {
  return (
    <React.Fragment>
       <Switch>
          <PrivateRoute exact path="/" component={MainMenu} />
          <PublicRoutes exact path="/sign-in" component={Login} />

          <PrivateRoute exact path="/user" component={Register} />
          <PrivateRoute exact path="/user/:id/edit" component={Register} />

          <PrivateRoute exact path="/strategies" component={Register} />
          <PrivateRoute exact path="/efl" component={Register} />
          <PrivateRoute exact path="/emotions" component={Register} />

          <PrivateRoute exact path="/new-record" component={Checkout} />
          <PrivateRoute path="/record/:id" component={Checkout} />
          <PrivateRoute exact path="/recordings" component={RecordingList} />
          <PrivateRoute exact path="/students" component={UserList} />
          {/* <Route exact path="/" component={() => (
            <Redirect to={"/search"} />
          )} /> */}
        </Switch>
    </React.Fragment>
  );
}

export default App;
