import React from 'react';
import Login from './components/Login'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
       <Switch>
          <Route path="/" component={Login} />
          {/* <Route exact path="/" component={() => (
            <Redirect to={"/search"} />
          )} /> */}
        </Switch>
    </React.Fragment>
  );
}

export default App;
