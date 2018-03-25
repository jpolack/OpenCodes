import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';    // BUTTON
import Input, { InputLabel } from 'material-ui/Input';    // INPUT
import { FormControl } from 'material-ui/Form';
import { Field, reduxForm } from 'redux-form';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import { CircularProgress } from 'material-ui/Progress';

import { withRouter } from 'react-router-dom';

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

const renderLoading = () => (
  <Dialog open aria-labelledby="simple-dialog-title">
    <DialogTitle id="simple-dialog-title">Zeitkapsel wird erstellt</DialogTitle>
    <div style={{ textAlign: 'center', padding: 20 }}>
      <CircularProgress />
    </div>
  </Dialog>
);

const showLink = (link, onClose, history) => (
  <Dialog open aria-labelledby="simple-dialog-title" onClose={onClose}>
    <DialogTitle id="simple-dialog-title">Die Zeitkapsel steht bereit</DialogTitle>
    <div style={{ textAlign: 'center', padding: 20, paddingTop: 0 }}>
      <p>Sichere diese ID, um auf deine Zeitkapsel zuzugreifen</p>
      <Input
        multiline
        value={link}
        onClick={event => event.target.select()}
      />
      <div
        style={{
          marginTop: 10,
        }}
      >
        <Button
          onClick={() => {
            history.push(`/capsule/${link}`);
          }} color="primary" variant="raised"
        >
          Jetzt Zeitkapsel befüllen
        </Button>
      </div>
    </div>
  </Dialog>
);

export const App = ({ handleSubmit, onSubmit, loading, link, onClose, history }) => {
  return (
    <div className="wrapper wrapperCreate">
      <img
        src="/logo.png" width="200" alt="logo" style={{
          marginLeft: 50,
        }}
      />
      {loading && renderLoading()}
      {link && showLink(link, onClose, history)}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="box-build">
          <h1>Erstelle eine Zeitkapsel für dich und deine Freunde</h1>
          <div className="contactForm">
            <Field name="title" component={CustomTextField} label="Titel deiner Zeitkapsel" />
            <Field name="subtitle" component={CustomTextField} label="Beschreibung (optional)" />
            <Field name="from" component={CustomTextField} label="Von wem ist diese Zeitkapsel?" />
            <Field name="openingDate" component={CustomTextField} label="Öffnungsdatum" />
            <Field name="password" component={CustomTextField} label="Passwort" contentType="password" />
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  link: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

App.defaultProps = {
  link: undefined,
};

export default withRouter(reduxForm({
  form: 'create',
})(App));
