import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

const App = ({ text }) =>
  <div className="wrapper wrapperWrite">
    <img
      src="/logo.png" width="200" alt="logo" style={{
        marginLeft: 50,
      }}
    />
    <Dialog open aria-labelledby="simple-dialog-title">
      <DialogTitle id="simple-dialog-title">Erfolg</DialogTitle>
      <div style={{ textAlign: 'center', padding: 20 }}>
        <p>{text}</p>
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
