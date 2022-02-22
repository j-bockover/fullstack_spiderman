import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "../img/spidermanswing.jfif";
import Image2 from "../img/spideyaction.gif";
import Image6 from "../img/cbbugle.jpg";
import Image7 from "../img/cbchar.jpg";
import Image8 from "../img/cbmedia.jpg";
import Image9 from "../img/cborigins.jpg";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
// import React, { useState, useEffect } from "react";

function home(props) {
  return (
    <div>
      <Navbar />
      <div
        class="card d-inline-block w-100 text-center"
        style={{
          width: `800px`,
          height: `auto`,
          marginTop: `-30px`,
          backgroundColor: `#03254c`,
        }}
      >
        <div class="card-body">
          <h1
            class="card-title"
            style={{
              color: `white`,
            }}
          >
            Welcome to the Spider-Man Universe!
          </h1>
          <ul>
            <li>
              <figure>
                <img
                  class="static img-fluid"
                  src={Image}
                  style={{ width: `720px`, height: `480px` }}
                  alt="Spiderman at night"
                />
                <img
                  class="active img-fluid"
                  src={Image2}
                  style={{ width: `720px`, height: `480px` }}
                  alt="Spiderman fighting electro"
                />
              </figure>
            </li>
          </ul>
          <h2 class="card-title text-center" style={{ color: `white` }}>
            For more information:
          </h2>
          <div class="container">
            <figure class="web">
              <Link to="../story">
                <img
                  src={Image9}
                  style={{ width: `200px`, height: `200px` }}
                  alt="Spiderman origin comic"
                />
              </Link>
              <p style={{ fontWeight: `bold` }}>
                Story: Find out the origin story of Spider-Man!
              </p>
            </figure>
            <figure class="web">
              <Link to="../characters">
                <img
                  src={Image7}
                  style={{ width: `200px`, height: `200px` }}
                  alt="Spiderman characters comic"
                />
              </Link>
              <p style={{ fontWeight: `bold` }}>
                Characters: Learn more about the heroes and villains in the
                Spideyverse!
              </p>
            </figure>
            <figure class="web">
              <Link to="../media">
                <img
                  src={Image8}
                  style={{ width: `200px`, height: `200px` }}
                  alt="Spiderman media comic"
                />
              </Link>
              <p style={{ fontWeight: `bold` }}>
                Media: From Comics to Movies, see where the Web-Slinger has
                been!
              </p>
            </figure>
            <figure class="web">
              <Link to="../news">
                <img
                  src={Image6}
                  style={{ width: `200px`, height: `200px` }}
                  alt="Spiderman news comic"
                />
              </Link>
              <p style={{ fontWeight: `bold` }}>
                News: Read the latest stories from the Daily Bugle!
              </p>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
