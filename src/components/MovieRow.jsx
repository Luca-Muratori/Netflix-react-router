import React, { Component } from "react";
import Movie from "./Movie.jsx";
import { Row, Spinner } from "react-bootstrap";
import "./movieRow.css";

export default class MovieRow extends Component {
  state = {
    movies: [],
    isLoading: true,
  };

  componentDidMount = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=a0d093ea&s=" + this.props.movie
    );
    if (response.ok) {
      this.setState({ isLoading: false });
      let data = await response.json();
      this.setState({ movies: data.Search });
    } else {
      console.log("error");
    }
  };

  render() {
    return (
      <>
        <h4
          className="my-3 mx-5 d-flex align-items-center justify-content-between"
          style={{ color: "white" }}
        >
          {this.props.movie}
          {this.state.isLoading ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : (
            ""
          )}
        </h4>
        <Row className="movieRow">
          {this.state.movies !== undefined && this.state.movies.map((movie, i) => (
            <Movie movie={movie} key={i} />
          ))}
        </Row>
      </>
    );
  }
}
