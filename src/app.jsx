import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import MainComp from './main';

export const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MainComp} />
      </div>
    </Router>
  );
};

export default App;
