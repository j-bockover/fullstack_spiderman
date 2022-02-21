import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";
import Navbar from "../components/navbar";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    let response = await axios.get("/movies_api");
    let all_movies = response.data;
    console.log(response.data);
    setMovies(all_movies);
  }, []);

  return (
    <section
      className="m-5 mt-0 p-4 pt-0"
      style={{ backgroundColor: "aliceblue" }}
    >
      <h3 className="fw-bold p-3 ps-0">Movies</h3>
      <div className="container-fluid p-0">
        <div className="row">
          {movies.map((movie) => (
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

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(async () => {
    let response = await axios.get("games_api");
    console.log("Client says: here's data from server: ", response.data);
  }, []);

  return (
    <section
      className="m-5 mt-0 p-4 pt-0"
      style={{ backgroundColor: "aliceblue" }}
    >
      <h3 className="fw-bold p-3 ps-0">Video Games</h3>
    </section>
  );
}

export default function Media() {
  return (
    <>
      <Navbar />
      <MovieList />
      <GameList />
    </>
  );
}
