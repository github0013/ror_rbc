import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import "react-big-calendar/lib/css/react-big-calendar.css";

import BigCalendar from 'react-big-calendar';
// import moment from 'moment';

// BigCalendar.setLocalizer(
//   BigCalendar.momentLocalizer(moment)
// );

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
});
