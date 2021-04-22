import React from "react";
// import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from './WeatherDay';


class Weather extends React.Component {

  render() {
    return (

      this.props.weather.map((day, index) => (
        <WeatherDay day={day} index={index} />
      )
      )
    )
  }
}


export default Weather;


// // this goes above
// this.props.weather.map((day, index) => (
//   <WeatherDay dayInfo={day} index={index} />
//   ))

