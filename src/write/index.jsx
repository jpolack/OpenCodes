import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './view';


class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };

    this.loadCapsule = this.loadCapsule.bind(this);
  }

  async loadCapsule(id) {
    this.setState({
      loading: true,
    });
    const capsule = await fetch(`http://localhost:8000/capsule/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: 'test',
      }),
    }).then(res => res.json());

    this.setState({
      loading: false,
    });

    console.log(capsule);
  }


  render() {
    return (
      <View
        loading={this.state.loading}
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
