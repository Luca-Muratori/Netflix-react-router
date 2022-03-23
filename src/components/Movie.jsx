import React from "react";
import { Col } from "react-bootstrap";
import "./movie.css";

const movie = (props) => {
  return (
    <Col xs={6} md={3} lg={2}>
      <img src={props.movie.Poster} alt="movie" class="img-fluid image mb-2" />
    </Col>
  );
};

export default movie;
