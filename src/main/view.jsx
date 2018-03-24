import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';    // BUTTON
import Input, { InputLabel } from 'material-ui/Input';    // INPUT
import { FormControl } from 'material-ui/Form';
import { Field, reduxForm } from 'redux-form';

import '../assets/static/app.css';

const CustomTextField = ({ input, label }) =>
  <div className="inputFeld">
    <FormControl>
      <InputLabel htmlFor="name-simple">{label}</InputLabel>
      <Input id="name-simple" {...input} />
    </FormControl>
  </div>;

CustomTextField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
CustomTextField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const App = ({ handleSubmit, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="box-build">
        <h1>Erstell deine eigene Zeitkapsel für dich und deine Freunde</h1>
        <Field name="title" component={CustomTextField} label="Titel deiner Zeitkapsel" />
        <Field name="subtitle" component={CustomTextField} label="Beschreibung (optional)" />
        <Field name="from" component={CustomTextField} label="Von wem ist diese Zeitkapsel?" />
        <Field name="openingDate" component={CustomTextField} label="Öffnungsdatum" />
        <Button variant="raised" color="secondary" type="submit">
          Jetzt Erstellen
      </Button>
      </div>
    </form>
  );
};


App.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'create',
})(App);
