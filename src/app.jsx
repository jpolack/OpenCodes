import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CounterComp from './counter';
import FormComp from './form';

export const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={CounterComp} />
        <Route exact path="/form" component={FormComp} />
      </div>
    </Router>
  );
};

export default App;
