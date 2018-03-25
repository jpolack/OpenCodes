import React from 'react';
import PropTypes from 'prop-types';
import '../assets/static/app.css';

export const App = ({ feed }) => {
  return (<div className="wrapper wrapperFeed">
    <div className="box-build">
      {JSON.stringify(feed)}
      <h1>Sieh dir deine Zeitkapsel an</h1>
      <div className="contactForm">
        <h2>Titel des Zeitkapseleintrags</h2>
        <p>Lieber Harald,<br />
          erinnerst du dich noch an die Bier die so schön hat geprickelt in meine Bauchnabel? Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
      </div>
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
    memories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
App.defaultProps = {
};

export default App;
