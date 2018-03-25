import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

import { withRouter } from 'react-router-dom';

const App = ({ text, history }) =>
  <div className="wrapper wrapperWrite">
    <img
      src="/logo.png" width="200" alt="logo" style={{
        marginLeft: 50,
      }}
    />
    <Dialog open aria-labelledby="simple-dialog-title" onClose={() => history.push('/')}>
      <DialogTitle id="simple-dialog-title">Erfolg</DialogTitle>
      <div style={{ textAlign: 'center', padding: 20 }}>
        <p>{text}</p>
      </div>
    </Dialog>
  </div>;

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  text: PropTypes.string,
};

App.defaultProps = {
  text: '',
};

export default withRouter(App);
