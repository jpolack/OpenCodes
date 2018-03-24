import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './view';


const onSubmit = async (values) => {
  console.log(values);
  const result = await fetch('http://localhost:8000/new', {
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
      password: 'abcabcabcabcabcd',
    }),
  }).then(res => res.text());

  console.log('result', result);
};

const Main = () => {
  return (
    <View onSubmit={onSubmit} />
  );
};

Main.propTypes = {
};

Main.defaultProps = {
};


export default withRouter(connect()(Main));
