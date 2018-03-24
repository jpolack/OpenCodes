import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { MuiThemeProvider } from 'material-ui/styles';

import appReducer from './reducers/appreducer.js';
import AppComponent from './app';
import Theme from './theme';

const store = createStore(combineReducers({
  appReducer,
  form: formReducer,
}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
);

const IndexComponent = (
  <Provider store={store}>
    <MuiThemeProvider theme={Theme}>
      <AppComponent />
    </MuiThemeProvider>
  </Provider>
);

const renderApp = () => {
  ReactDOM.render(
    IndexComponent,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept('./app', renderApp);
} else {
  window.onload = renderApp;
}

// https://www.robinwieruch.de/minimal-react-webpack-babel-setup/#react-project-setup
