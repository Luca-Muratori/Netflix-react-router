import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MovieRow from "./MovieRow";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";

export default class Gallery extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Container fluid className="px-5 pt-4">
          <SearchBar
            searchQuery={this.state.searchQuery}
            state={(dataFromSearchBar) => {
              this.setState({ searchQuery: dataFromSearchBar });
            }}
            className="justify-content-center my-2"
          />

          {/* If user types movie name which length is more than 2, it will show Movie  */}
          {this.state.searchQuery.length > 2 ? (
            <MovieRow movie={this.state.searchQuery} />
          ) : (
            ""
          )}
          <MovieRow movie="Harry Potter" />
          <MovieRow movie="Sherlock" />
          <MovieRow movie="Stranger%20Things" />
          <MovieRow movie="Joker" />
        </Container>
      </>
    );
  }
}
