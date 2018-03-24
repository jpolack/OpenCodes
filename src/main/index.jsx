import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './view';


const onSubmit = (values) => {
  console.log(values);
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
