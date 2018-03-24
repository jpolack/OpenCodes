import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './assets/static/app.css';

export const Counter = ({ count, dispatch, history }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch({
          type: 'INC',
        })}
      >Increment</button>
      <button
        onClick={() => history.replace('/form')}
      >To Form and not back</button>
      <Link to="/form">
        <button>
            To Form
        </button>
      </Link>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }),
};

Counter.defaultProps = {
  count: 0,
  dispatch: () => { },
  history: {
    replace: () => {},
  },
};

const mapStateToProps = ({ appReducer }) => {
  return {
    count: appReducer.count,
  };
};

export default withRouter(connect(
  mapStateToProps,
)(Counter));
