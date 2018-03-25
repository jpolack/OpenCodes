import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import { withRouter } from 'react-router-dom';

import moment from 'moment';

moment.locale('de');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openOn: moment.utc(props.openOn),
    };

    this.calcTime = this.calcTime.bind(this);
  }

  componentDidMount() {
    this.calcTime();

    setInterval(this.calcTime, 1000);
  }

  calcTime() {
    const opensOn = this.state.openOn.startOf('day');

    const milliseconds = Math.max(opensOn.toDate() - moment().add(2, 'hours'), 0);

    const years = Math.floor(milliseconds / 3.154e+10);
    const yearsLeft = milliseconds % 3.154e+10;

    const months = Math.floor(yearsLeft / 2.628e+9);
    const monthsLeft = yearsLeft % 2.628e+9;

    const days = Math.floor(monthsLeft / 8.64e+7);
    const daysLeft = monthsLeft % 8.64e+7;

    const hours = Math.floor(daysLeft / 3.6e+6);
    const hoursLeft = daysLeft % 3.6e+6;

    const minutes = Math.floor(hoursLeft / 60000);
    const minutesLeft = hoursLeft % 60000;

    const seconds = Math.floor(minutesLeft / 1000);

    this.setState({
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
    });
  }

  render() {
    return (
      <div className="wrapper wrapperWrite">
        <Dialog open aria-labelledby="simple-dialog-title" onClose={() => this.props.history.push('/')}>
          <DialogTitle id="simple-dialog-title">Geduld du haben musst, mein junger Padawan</DialogTitle>
          <div style={{ textAlign: 'center', padding: 20 }}>
            <p>Diese Zeitkapsel öffnet sich in von selbst in:</p>
            <p>{this.state.years} Jahren {this.state.months} Monaten {this.state.days} Tagen</p>
            <p>{this.state.hours} Stunden {this.state.minutes} Minuten {this.state.seconds} Sekunden</p>
          </div>
        </Dialog>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  openOn: PropTypes.string.isRequired,
};

export default withRouter(App);
