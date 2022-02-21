const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const port = 5001;

let movie_list = getMovies();
let game_list = getGames();

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/movies_api", (req, res) => {
  res.send(movie_list);
});

app.get("/games_api", (req, res) => {
  console.log(game_list); // looks like this works but front-end can't grab data
  res.send(game_list);
  // res.send({ data: "Hello from express server" }); // this works perfectly fine
  // res.send(getGames());
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

function getMovies() {
  let movie_api_key = "5941d4436aff4a93f3f11e86cb336bec";
  let movie_images_config;
  let movie_list = [];
  axios
    .get(`https://api.themoviedb.org/3/configuration?api_key=${movie_api_key}`)
    .then((response) => {
      movie_images_config = { ...response.data.images };
      getMovieData();
    })
    .catch((error) => {
      console.error(error);
    });
  const getMovieData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${movie_api_key}&query=Spider-Man`
      )
      .then((response) => {
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
      })
      .catch((error) => {
        console.error(error);
      });
    return;
  };

  return movie_list;
  // const getCastCrew = (movie_id) => {
  //   // let movie_cast = [];
  //   let movie_crew_deep = [];
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3//movie/${movie_id}/credits?api_key=${movie_api_key}`
  //     )
  //     .then((response) => {
  //       let { cast, crew } = response.data;
  //       // movie_cast = cast.slice(0, 10).map((c) => {
  //       //   return {
  //       //     id: c.id,
  //       //     name: c.name,
  //       //     character: c.character,
  //       //     profile_path: c.profile_path,
  //       //     order: c.order,
  //       //   };
  //       // });
  //       // console.log(movie_cast);
  //       // let movie_crew_shallow = crew
  //       //   .filter((c) => c.job === "Director" || c.job === "Executive Producer")
  //       //   .map((c) => {
  //       //     return {
  //       //       id: c.id,
  //       //       name: c.name,
  //       //       job: c.job,
  //       //     };
  //       //   });
  //       crew.forEach((crew_member) => {
  //         if (
  //           crew_member.job === "Director" ||
  //           crew_member.job === "Executive Producer"
  //         ) {
  //           let member = {
  //             id: crew_member.id,
  //             name: crew_member.name,
  //             job: crew_member.job,
  //           };
  //           movie_crew_deep.push(member);
  //         }
  //       });
  //       // console.log(movie_crew_deep);
  //       return movie_crew_deep;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   console.log(movie_crew_deep);
  //   // return {
  //   //   movie_cast,
  //   //   movie_crew,
  //   // };
  // };
}

async function getGames() {
  let games_api_key = "f12cf57bf66c47298d34c831991a800e";
  let game_list = [];
  try {
    let response = await axios.get(
      `https://api.rawg.io/api/games?key=${games_api_key}&search=Spider-Man&ordering=-rating`
    );

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
  // console.log(game_list);
  return game_list;
}
