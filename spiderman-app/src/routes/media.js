import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";
import Navbar from "../components/navbar";
class MovieList extends React.Component {
  state = {
    moives: [],
  };

  componentDidMount() {
    axios.get(`/movies_api`).then((res) => {
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
        <h3 className="fw-bold p-3 ps-0">Movies</h3>
        <div className="container-fluid p-0">
          <div className="row">
            {this.state.moives.map((movie) => (
              <div className="col-md-12 col-lg-6 border-top mb-2 pt-2 d-flex">
                <img
                  className="p-2 ps-0 pt-0"
                  src={movie.image}
                  width="auto"
                  height="250px"
                  alt={movie.title + " poster image"}
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

class GameList extends React.Component {
  state = {
    games: [],
  };

  componentDidMount() {
    axios.get(`/games_api`).then((res) => {
      const games = res.data;
      console.log(res.data);
      this.setState({ games });
    });
  }

  render() {
    return (
      <section
        className="m-5 mt-0 p-4 pt-0"
        style={{ backgroundColor: "aliceblue" }}
      >
        <h3 className="fw-bold p-3 ps-0">Video Games</h3>
      </section>
    );
  }
}

export default function Media(props) {
  return (
    <>
      <Navbar />
      <MovieList />
      <GameList />
    </>
  );
}
