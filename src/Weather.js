import React from "react";
// import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


class Weather extends React.Component {


  render() {
    return (

      this.props.weather.map((day, index) => (
        <ListGroup.Item key={index} as="li" active>
          {day.time} is the day and {day.forecast} is the forecast
        </ListGroup.Item>
      )
      )
    );
  }
}


export default Weather;
