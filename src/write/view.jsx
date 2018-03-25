import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';    // BUTTON
import Input, { InputLabel } from 'material-ui/Input';    // INPUT
import { FormControl } from 'material-ui/Form';

import '../assets/static/app.css';

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

const CustomTextAreaField = ({ input, label, contentType }) =>
  <div className="wrapper_inputFeld" >
    <FormControl className="inputFeld fullWidth">
      <InputLabel>{label}</InputLabel>
      <Input {...input} type={contentType} multiline />
    </FormControl>
  </div>;

CustomTextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  contentType: PropTypes.string,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
CustomTextAreaField.defaultProps = {
  contentType: 'text',
};

export const App = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="wrapper wrapperWrite">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="box-build">
          <h1>Schreibe etwas für deine Freunde</h1>
          <div className="contactForm">
            <Field name="name" component={CustomTextField} label="Dein Name" />
            <Field name="title" component={CustomTextField} label="Titel" />
            <Field name="message" component={CustomTextAreaField} label="Schreib deine Nachricht" />

            <Button style={{ marginTop: 20 }} variant="raised" color="primary" type="submit">
              Jetzt Erstellen
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

App.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

App.defaultProps = {
  feed: undefined,
};

export default reduxForm({
  form: 'write',
})(App);
