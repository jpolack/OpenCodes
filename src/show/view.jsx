import React from 'react';
import Button from 'material-ui/Button'; // BUTTON
import Input, { InputLabel } from 'material-ui/Input'; // INPUT
import { FormControl, FormHelperText } from 'material-ui/Form';
import { withTheme } from 'material-ui/styles'; // DATEPICKER
import TextField from 'material-ui/TextField';
import Visibility from 'material-ui-icons/Visibility'; // PASSWORD
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import '../assets/static/stylesfeed.css';
import '../assets/static/app.css';

export const App = () => {
  return (<div className="box-build">
    <h1>Sieh dir deine Zeitkapsel an</h1>
    <div className="contactForm">
      <h2>Titel des Zeitkapseleintrags</h2>
      <p>Lieber Steffi,<br />
        erinnerst du dich noch an unseren Urlaub auf Korsika? Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
    </div>
  </div>);
};

export default App;
