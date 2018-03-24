import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import { TextField } from 'material-ui';
import './assets/static/app.css';

const TextFieldWrapper = ({ input }) => {
  return (<TextField
    {...input}
    label="Name"
    margin="normal"
  />);
};

TextFieldWrapper.propTypes = {
  input: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

TextFieldWrapper.defaultProps = {
  input: {},
};

export const Form = ({ textValue }) => {
  return (
    <div>
      <h1>{textValue}</h1>
      <Field
        name="firstName" component={TextFieldWrapper}
      />
      <Link to="/">
        <button>
          Back
        </button>
      </Link>
    </div>
  );
};

Form.propTypes = {
  textValue: PropTypes.string,
};

Form.defaultProps = {
  textValue: '',
};

const selector = formValueSelector('test');
const mapStateToProps = (state) => {
  return {
    textValue: selector(state, 'firstName'),
  };
};

const connectedForm = reduxForm({
  form: 'test',
})(Form);

export default connect(
  mapStateToProps,
)(connectedForm);
