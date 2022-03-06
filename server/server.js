const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const all_characters = require("./characters.json");
const all_comics = require("./comics.json");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const port = process.env.PORT || 5001;
const games_api_key = process.env.GAMES_API_KEY;
const movie_api_key = process.env.MOVIE_API_KEY;

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/movies_api", async (req, res) => {
  let movie_list = await getMovies();
  res.send(movie_list);
});

app.get("/games_api", async (req, res) => {
  let game_list = await getGames();
  res.send(game_list);
});

app.get("/comics_api", async (req, res) => {
  let comic_list = await getComics();
  res.send(comic_list);
});

app.get("/characters_api", (req, res) => {
  let character_list = getCharacters();
  res.send(character_list);
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

async function getMovies() {
  let movie_images_config;
  let movie_list = [];
  let config_url = `https://api.themoviedb.org/3/configuration?api_key=${movie_api_key}`;
  let movie_url = `https://api.themoviedb.org/3/search/movie?api_key=${movie_api_key}&query=Spider-Man`;

  try {
    let configs = await axios.get(config_url);
    movie_images_config = { ...configs.data.images };

    let response = await axios.get(movie_url);
    let { results } = response.data;
    results.forEach((result) => {
      if (new Date(result.release_date) < new Date("2000-01-01")) {
        return;
      }
      let movie = {
        id: result.id,
        title: result.title,
        overview: result.overview,
        release_date: result.release_date,
        image:
          movie_images_config.secure_base_url +
          movie_images_config.poster_sizes[3] +
          result.poster_path,
      };
      movie_list.push(movie);
    });
    movie_list.sort((a, b) => {
      let a_date = new Date(a.release_date);
      let b_date = new Date(b.release_date);
      return b_date - a_date;
    });
  } catch (error) {
    console.error(error);
  }

  return movie_list;
}

async function getGames() {
  let api_url = `https://api.rawg.io/api/games?key=${games_api_key}&search=spider-man&search_exact=true&ordering=-rating`;
  let game_list = [];
  try {
    let response = await axios.get(api_url);

    let {
      data: { results },
    } = response;

    results.forEach((result) => {
      let game = {
        name: result.name,
        rating: result.rating,
        release_date: result.released,
        last_update: result.updated,
        platforms: [],
        image: result.background_image,
      };
      result.platforms.forEach((platform) =>
        game.platforms.push(platform.platform.name)
      );
      game_list.push(game);
    });
  } catch (error) {
    console.error(error);
  }

  return game_list;
}

function getComics() {
  comic_list = [];
  all_comics.forEach((c) => {
    let comic = {
      name: c.name,
      isbn: c.isbn,
      pageCount: c.pageCount,
      creators: c.creators,
      image: path.join("images/", c.image),
    };
    comic_list.push(comic);
  });
  return comic_list;
}

function getCharacters() {
  character_list = [];
  all_characters.forEach((c) => {
    let character = {
      name: c.name,
      description: c.description,
      image: path.join("images/", c.image),
      source: c.source,
    };
    character_list.push(character);
  });
  return character_list;
}
