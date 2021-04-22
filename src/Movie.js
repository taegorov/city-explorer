import React from "react";
// import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


class Movie extends React.Component {

  render() {
    return (

      this.props.movie.map((movie, index) => (

        <ListGroup.Item key={index} as="li" active>
          <h2>
          {movie.title} is the Title
          </h2>
          <p>
          {movie.popularity} is the Rating
          </p>
          <p id ="overview">
          {movie.overview} is the Overview
          </p>
        </ListGroup.Item>

      )
      )
    );
  }
}


export default Movie;

