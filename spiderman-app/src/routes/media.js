import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../App.css";
import Navbar from "../components/navbar";

export default function Media(props) {
  const [data, setData] = React.useState("");

  axios
    .get("/api")
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));

  return <Navbar />;
}
