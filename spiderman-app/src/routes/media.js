// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import "../App.css";
import Navbar from "../components/navbar";
class MovieList extends React.Component {
  state = {
    moives: [],
  };

  componentDidMount() {
    axios.get(`/api`).then((res) => {
      const moives = res.data;
      this.setState({ moives });
    });
  }

  render() {
    return (
      <Container>
        {this.state.moives.map((movie) => (
          // <>
          <Row className="show-grid">
            <Col>
              <div className="d-flex">
                <img src={movie.image} width="auto" height="200px"></img>
                <div>
                  <h4>{movie.title}</h4>
                  <p>{movie.overview}</p>
                  <p>{movie.release_date}</p>
                </div>
              </div>
            </Col>
          </Row>
          // </>
        ))}
      </Container>
    );
  }
}

export default function Media(props) {
  return (
    <>
      <Navbar />
      <MovieList />
    </>
  );
}
