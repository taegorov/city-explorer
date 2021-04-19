import React from 'react';
import axios from 'axios';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    }
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(API);
    console.log(res.data[0])
    this.setState({ location: res.data[0] });

  }

  render() {
    const img_url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;
    return (
      <>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="city name here"></input>
        <button onClick={this.getLocation}>Explore a City!</button>
        {this.state.location.place_id &&
          <h2>The city is: {this.state.location.display_name}</h2>
        }
        {this.state.location.place_id &&
          <h3>Latitude is: {this.state.location.lat}</h3>
        }
        {this.state.location.place_id &&
          <h3>Longitude is: {this.state.location.lon}</h3>
        }
        <br></br>
        <img src={img_url} alt="location" id="map"/>
      </>
    )
  }
}

export default App;

