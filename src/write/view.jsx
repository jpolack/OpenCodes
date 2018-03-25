import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';    // BUTTON
import Input, { InputLabel } from 'material-ui/Input';    // INPUT
import { FormControl } from 'material-ui/Form';
import moment from 'moment';

import '../assets/static/app.css';

moment.locale('de');

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

export const App = ({ handleSubmit, onSubmit, feed }) => {
  return (
    <div className="wrapper wrapperWrite">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="box-build">
          <h1>Schreibe etwas für deine Freunde</h1>
          <div className="contactForm">
            <div className="metaInfos">
              <p className="metaContent">Zeitkapsel {feed.capsule.title} | Von {feed.capsule.from} | Öffnungsdatum {moment.utc(feed.openingDate).format('DD. MMMM YYYY')}</p>
            </div>
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
  feed: PropTypes.shape({
    capsule: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
    }),
    openingDate: PropTypes.string.isRequired,
    memoryCount: PropTypes.number.isRequired,
    memories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
    })),
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

App.defaultProps = {
  feed: undefined,
};

export default reduxForm({
  form: 'write',
})(App);
