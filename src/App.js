import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Weather from './Weather';
import Movie from './Movie';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      weather: [],
      movies: [],
      error: false
    }
  }

  getLocation = async (e) => {
    try {
      e.preventDefault();
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
      const res = await axios.get(API);
      // console.log(res.data[0])
      this.setState({ location: res.data[0], error: false });
      this.getWeather();
      this.getMovie();
    } catch (error) {
      this.setState({ error: true });

    }
  }
  getWeather = async () => {
    try {
      const weatherAPI = `${process.env.REACT_APP_BACKEND_URL}/weather`
      const query = {
        lon: this.state.location.lon,
        lat: this.state.location.lat
      };
      const weatherRes = await axios.get(weatherAPI, {params : query});
      const weather = weatherRes.data;
      // console.log(weather);
      this.setState({ weather, error: false });

    } catch (error) {
      this.setState({ error: true });
    }
  }
  getMovie = async () => {
    try {
      const movieAPI = `${process.env.REACT_APP_BACKEND_URL}/movies`
      const query = {
        cityName: this.state.searchQuery
      };
      const movieRes = await axios.get(movieAPI, {params : query});
      const movies = movieRes.data;
      console.log(movies);
      this.setState({ movies, error: false });

    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    const img_url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;
    return (
      <>
        <div>
          <form id="form"> Enter a city you'd like to visit <br></br>
            <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="city name here"></input>
            <button onClick={this.getLocation}>Explore a City!</button>
          </form>
          {this.state.error &&
            <div class="alert alert-primary" role="alert">
              Something went wrong
          </div>
          }
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
          <img src={img_url} alt="location" id="map" />
          <Weather weather={this.state.weather} />
          <Movie movie={this.state.movies} />

        </div>
      </>
    )
  }
}

export default App;

