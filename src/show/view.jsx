import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import moment from 'moment';

import '../assets/static/app.css';

moment.locale('de');

const CreatePaper = (memory, iter) => (
  <Paper key={iter} className="textbox" elevation={4}>
    <div className="metaInfos">
      <p className="metaContent">Von {memory.name} | Erstellungsdatum {moment.utc(memory.creationDate).format('DD. MMMM YYYY')}</p>
    </div>
    <h2>{memory.title}</h2>
    <p>{memory.message}</p>
  </Paper>);

export const App = ({ feed }) => {
  return (<div className="wrapper wrapperFeed">
    <div className="box-build">
      <h1>Sieh dir deine Zeitkapsel an</h1>
      {
        feed.memories.reverse().map(CreatePaper)
      }
    </div>
  </div>);
};

App.propTypes = {
  feed: PropTypes.shape({
    capsule: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
    }),
    openingDate: PropTypes.string.isRequired,
    memories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
App.defaultProps = {
};

export default App;
