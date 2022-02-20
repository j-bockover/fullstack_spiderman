import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
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
      <section
        className="m-5 mt-0 p-4 pt-0"
        style={{ backgroundColor: "aliceblue" }}
      >
        <h3 className="fw-bold ps-1">Movies</h3>
        <div className="container p-0">
          <div className="row">
            {this.state.moives.map((movie) => (
              <div className="col-sm-12 col-md-6 border-bottom mb-2 d-flex">
                <img
                  className="pt-1 pe-2"
                  src={movie.image}
                  width="auto"
                  height="250px"
                  alt={movie.title + "poster image"}
                ></img>
                <div>
                  <h5>{movie.title}</h5>
                  <p>{movie.overview}</p>
                  <p>{movie.release_date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
