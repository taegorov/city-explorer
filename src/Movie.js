import React from "react";
// import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ListGroup from 'react-bootstrap/ListGroup';
import MovieDay from './MovieDay';


// alt movie url: https://image.tmdb.org/t/p/w500

class Movie extends React.Component {

  render() {
    return (

      this.props.movie.map((movie, index) => (
        <MovieDay movie={movie} key={index} />

      )
      )
    )
  }
}


export default Movie;

