import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import MainComp from './create';
import WriteComp from './write';
import ShowComp from './show';

export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainComp} />
          <Route path="/capsule/:id" component={WriteComp} />
          <Route path="/show/:id" component={ShowComp} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
