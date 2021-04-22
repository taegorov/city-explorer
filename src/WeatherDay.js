import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component {

  render() {
    return (
      <ListGroup.Item key={this.props.index} as="li" action variant="dark"active>
        Day: {this.props.day.time}
        Forecast: {this.props.day.forecast}
      </ListGroup.Item>
    )
  }
}

export default WeatherDay;



// dont forget to import into parent component!



// this.props.weather.map((day, index) => (

//   <ListGroup.Item key={index} as="li" active>
//     Day: {day.time + ' '}
//     Forecast: {day.forecast}
//   </ListGroup.Item>