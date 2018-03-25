import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import View from './view';
import PasswordMask from './password';
import Loading from './loading';
import Error from './error';
import Notyet from './notyet';

moment.locale('de');

class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };

    this.loadCapsule = this.loadCapsule.bind(this);
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


  render() {
    if (this.state.error) {
      return <Error text={this.state.error} />;
    }

    if (this.state.loading) {
      return <Loading text={'Die Zeitkapsel wird entsperrt'} />;
    }

    if (this.state.feed) {
      if (moment().isBefore(moment.utc(this.state.feed.openingDate))) {
        return (<Notyet openOn={this.state.feed.openingDate} />);
      }

      return (
        <View feed={this.state.feed} />
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
