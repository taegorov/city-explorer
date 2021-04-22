import React from "react";
// import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


class Weather extends React.Component {


  render() {
    return (

      this.props.weather.map((day, index) => (
        <ListGroup.Item key={index} as="li" active>
          Day: {day.time + ' '}
          Forecast: {day.forecast}
        </ListGroup.Item>
      )
      )
    );
  }
}


export default Weather;
