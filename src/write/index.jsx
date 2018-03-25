import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './view';
import PasswordMask from './password';
import Loading from './loading';
import Error from './error';
import Done from './done';


class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };

    this.loadCapsule = this.loadCapsule.bind(this);
    this.writeToCapsule = this.writeToCapsule.bind(this);
  }

  async loadCapsule(id, password) {
    this.setState({
      loading: true,
    });
    const res = await fetch(`http://localhost:8000/capsule/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
      }),
    });

    if (res.status >= 400) {
      const message = await res.text();
      this.setState({
        loading: false,
        error: message,
      });
      return;
    }

    const capsule = await res.json();

    this.setState({
      loading: false,
      feed: capsule,
    });
  }

  async writeToCapsule(data) {
    this.setState({
      loading: true,
    });
    const res = await fetch(`http://localhost:8000/capsule/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: 'pass',
        memory: {
          name: data.name,
          title: data.title,
          message: data.message,
        },
      }),
    });
    if (res.status >= 400) {
      this.setState({
        loading: false,
        error: 'Daten konnten nicht gespeichert werden',
      });
      return;
    }
    this.setState({
      loading: false,
      success: 'Deine Daten wurden der Zeitkapsel hinzugefüht',
    });
  }


  render() {
    if (this.state.success) {
      return <Done text={this.state.success} />;
    }

    if (this.state.error) {
      return <Error text={this.state.error} />;
    }

    if (this.state.loading) {
      return <Loading text={this.state.feed ? 'Schreibe in die Zeitkapsel' : 'Die Zeitkapsel wird entsperrt'} />;
    }

    if (this.state.feed) {
      return (
        <View
          feed={this.state.feed}
          onSubmit={this.writeToCapsule}
        />
      );
    }

    return (
      <PasswordMask
        onSubmit={({ password }) => {
          this.loadCapsule(this.props.match.params.id, password);
        }}
      />
    );
  }
}

Write.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};


export default withRouter(connect()(Write));
