import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './view';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({
      link: undefined,
    });
  }

  async onSubmit(values) {
    this.setState({
      loading: true,
    });
    const capsule = await fetch('http://localhost:8000/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        capsule: {
          title: values.title,
          subtitle: values.subtitle,
          from: values.from,
        },
        openingDate: new Date(),
        password: values.password,
      }),
    }).then(res => res.json());

    this.setState({
      loading: false,
      link: capsule.link,
    });
    console.log('capsule', capsule.link);
  }

  render() {
    return (
      <View onSubmit={this.onSubmit} onClose={this.onClose} loading={this.state.loading} link={this.state.link} />
    );
  }
}


export default withRouter(connect()(Main));
