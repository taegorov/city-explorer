import React from "react";
// import App from "./App";

class Weather extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     weather: props.weather,
  //   }
  // }

  render() {
    return (
      <>
        {this.props.weather.map((day, index) => (
        <div key={index}>
          <p>day: {day.date}</p>
          <p>description: {day.description}</p>
        </div>
        )
        )};
      </>

    )

  }
}

export default Weather;
