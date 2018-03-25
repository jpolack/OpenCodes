import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Input, { InputLabel } from 'material-ui/Input';    // INPUT
import Button from 'material-ui/Button';    // INPUT
import { FormControl } from 'material-ui/Form';
import { withRouter } from 'react-router-dom';

import moment from 'moment';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.submit = this.submit.bind(this);
  }

  submit(values) {
    this.props.history.push(`${this.props.target}/${values.id}`);
  }

  render() {
    const handleSubmit = this.props.handleSubmit;
    return (
      <div className="wrapper wrapperWrite">
        <img
          src="/logo.png" width="200" alt="logo" style={{
            marginLeft: 50,
          }}
        />
        <Dialog
          open aria-labelledby="simple-dialog-title" onClose={() => this.props.history.push('/')}
        >
          <DialogTitle id="simple-dialog-title">Gib die Zeitkapsel ID ein</DialogTitle>
          <div style={{ textAlign: 'center', padding: 20 }}>
            <form onSubmit={handleSubmit(this.submit)}>
              <Field name="id" component={CustomTextField} label="Zeitkapsel ID" />
              <Button style={{ marginTop: 20 }} variant="raised" color="primary" type="submit">
                Jetzt Erstellen
              </Button>
            </form>
          </div>
        </Dialog>
      </div >
    );
  }
}

App.propTypes = {
  target: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default target => withRouter(reduxForm({
  form: 'kapselId',
  target,
})(App));

