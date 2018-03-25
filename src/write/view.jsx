import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import Button from 'material-ui/Button';    // BUTTON
import Input, { InputLabel } from 'material-ui/Input';    // INPUT
import { FormControl } from 'material-ui/Form';

import '../assets/static/app.css';


export const App = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="wrapper wrapperWrite">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="box-build">
          <h1>Schreibe etwas für deine Freunde</h1>
          <div className="contactForm">
            <div className="wrapper_inputFeld">
              <FormControl className="inputFeld">
                <InputLabel htmlFor="name-simple">Dein Name</InputLabel>
                <Input id="name-simple" />
              </FormControl>
            </div>
            <div className="wrapper_inputFeld">
              <FormControl className="inputFeld">
                <InputLabel htmlFor="name-simple">Titel</InputLabel>
                <Input id="name-simple" />
              </FormControl>
            </div>
            <div className="wrapper_inputFeld">
              <FormControl className="inputFeld fullWidth">
                <InputLabel htmlFor="name-simple">Schreib deine Nachricht</InputLabel>
                <Input id="name-simple" multiline />
              </FormControl>
            </div>

            <Button style={{ marginTop: 20 }} variant="raised" color="primary">
              Jetzt Erstellen
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

App.propTypes = {
  // loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

App.defaultProps = {
  feed: undefined,
};

export default reduxForm({
  form: 'write',
})(App);
