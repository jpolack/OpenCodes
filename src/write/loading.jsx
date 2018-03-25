import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import { CircularProgress } from 'material-ui/Progress';

const App = ({ text }) =>
  <div className="wrapper wrapperWrite">
    <Dialog open aria-labelledby="simple-dialog-title">
      <DialogTitle id="simple-dialog-title">{text}</DialogTitle>
      <div style={{ textAlign: 'center', padding: 20 }}>
        <CircularProgress />
      </div>
    </Dialog>
  </div>;

App.propTypes = {
  text: PropTypes.string,
};

App.defaultProps = {
  text: '',
};

export default App;
