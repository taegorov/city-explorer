import React from "react";
// import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

// alt movie url: https://image.tmdb.org/t/p/w500

class Movie extends React.Component {

  render() {
    return (

      this.props.movie.map((movie, index) => (

        <ListGroup.Item key={index} as="li" active>
          <h2>
            Title: {movie.title}
          </h2>
          <p>
            Rating: {movie.popularity}
          </p>
          <p id="overview">
            Overview: {movie.overview}
          </p>
          <p id="movieImage">
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.image}`} alt="here lies a stationary movie" />
          </p>
        </ListGroup.Item>

      )
      )
    );
  }
}


export default Movie;

