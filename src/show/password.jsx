import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';    // BUTTON
import Input, { InputLabel } from 'material-ui/Input';    // INPUT
import { FormControl } from 'material-ui/Form';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

const CustomTextField = ({ input, label, contentType }) =>
  <div className="wrapper_inputFeld" >
    <FormControl className="inputFeld">
      <InputLabel>{label}</InputLabel>
      <Input {...input} type={contentType} />
    </FormControl>
  </div>;

CustomTextField.propTypes = {
  label: PropTypes.string.isRequired,
  contentType: PropTypes.string,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
CustomTextField.defaultProps = {
  contentType: 'text',
};

const App = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="wrapper wrapperWrite">
      <Dialog open aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title">Gib das Passwort ein</DialogTitle>
        <div style={{ textAlign: 'center', padding: 20 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field name="password" component={CustomTextField} label="Passwort" contentType="password" />
            <Button style={{ marginTop: 20 }} variant="raised" color="primary" type="submit">
          Jetzt Freischalten
        </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

App.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'password',
})(App);
