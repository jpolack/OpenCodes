import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';

import MainComp from './create';
import WriteComp from './write';
import ShowComp from './show';
import ProxyShow from './proxyShow';

export const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ position: 'absolute', right: 50, top: 50 }}>
          <Link to="/">
            <label className="menuItem">Zeitkapsel erstellen</label>
          </Link>
          <Link to="/add">
            <label className="menuItem">Zeitkapsel befüllen</label>
          </Link>
          <Link to="/open">
            <label className="menuItem">Zeitkapsel öffnen</label>
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={MainComp} />
          <Route path="/add" component={ProxyShow('/capsule')} />
          <Route path="/capsule/:id" component={WriteComp} />
          <Route path="/open" component={ProxyShow('/show')} />
          <Route path="/show/:id" component={ShowComp} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
