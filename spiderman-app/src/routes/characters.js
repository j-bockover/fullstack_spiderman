import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";
import spider_man from "../images/spider-man.png";
import Navbar from "../components/navbar";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(async () => {
    let response = await axios.get("/characters_api");
    let all_characters = response.data;
    setCharacters(all_characters);
    console.log(all_characters);
  }, []);

  return (
    <section
      className="m-5 mt-0 p-4 pt-0"
      style={{ backgroundColor: "aliceblue" }}
    >
      <h3 className="fw-bold p-3 ps-0">Characters</h3>
      <div className="container-fluid p-0">
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-12 col-lg-6 border-top mb-2 pt-2 d-flex">
              <img
                className="ps-0 pt-0 pe-3 pb-2"
                src={`${character.image}`}
                width="200px"
                height="300px"
                alt={character.name + " cover image"}
                style={{ objectFit: "fill" }}
              ></img>
              <div>
                <h5>{character.name}</h5>
                <p>Description: {character.description}</p>
                <p>Source: {character.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Characters() {
  return (
    <div style={{ backgroundColor: "#03254c", paddingBottom: "20px" }}>
      <Navbar />
      <CharacterList />
    </div>
  );
}
