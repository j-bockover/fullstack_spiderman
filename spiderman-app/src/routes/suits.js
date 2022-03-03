import "../components/suits.css";
import Image from "../img/game/advancedsuit.png";
import Image2 from "../img/game/bigtime.png";
import Image3 from "../img/game/classicsuitr.png";
import Image4 from "../img/game/electricallyinsulated.png";
import Image5 from "../img/game/fearitself.png";
import Image6 from "../img/game/hybridsuit.png";
import Image7 from "../img/game/scarletspider.png";
// import Image8 from "../img/game/secretwar.png";
// import Image9 from "../img/game/spiderarmour3.png";
import Image10 from "../img/game/spiderarmourmk2.png";
import Image11 from "../img/game/spiderman2099.png";
import Image12 from "../img/game/starksuit.png";
import { Link } from "react-router-dom";
import { render } from "react-dom";
// import "../components/gamecomp";

function Suits(props) {
  const cardsArray = [
    {
      name: "advsuit",
      img: Image,
    },
    {
      name: "bigtime",
      img: Image2,
    },
    {
      name: "classicsuitr",
      img: Image3,
    },
    {
      name: "electricallyinsulated",
      img: Image4,
    },
    {
      name: "fearitself",
      img: Image5,
    },
    {
      name: "hybridsuit",
      img: Image6,
    },
    {
      name: "scarletspider",
      img: Image7,
    },
    // {
    //   name: "secretwar",
    //   img: Image8,
    // },
    // {
    //   name: "spiderarmour3",
    //   img: Image9,
    // },
    {
      name: "spiderarmour2",
      img: Image10,
    },
    {
      name: "spiderman2099",
      img: Image11,
    },
    // {
    //   name: "starksuit",
    //   img: Image12,
    // },
  ];

  let gameGrid = cardsArray.concat(cardsArray);
  gameGrid.sort(() => 0.5 - Math.random());

  var firstGuess = "";
  var secondGuess = "";
  var count = 0;
  var previousTarget = null;
  var delay = 800;
  var game = document.getElementById("root");
  var heading = document.createElement("h1");
  var text = document.createTextNode("Spider-Man Suits Memory Game!");
  heading.appendChild(text);
  heading.style.color = "white";
  heading.style.textAlign = "center";
  game.appendChild(heading);
  var grid = document.createElement("section");
  grid.setAttribute("class", "grid");
  game.appendChild(grid);
  //create link to get back to news page
  var x = document.createElement("a");
  x.href = "../news";
  // x.setAttribute("color", "red");
  x.textContent = "RETURN";
  game.appendChild(x);

  gameGrid.forEach(function (item) {
    var name = item.name,
      img = item.img;

    var card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = name;

    var front = document.createElement("div");
    front.classList.add("front");

    var back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = "url(" + img + ")";

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });
  var match = function match() {
    var selected = document.querySelectorAll(".selected");
    selected.forEach(function (card) {
      card.classList.add("match");
    });
  };

  var resetGuesses = function resetGuesses() {
    firstGuess = "";
    secondGuess = "";
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll(".selected");
    selected.forEach(function (card) {
      card.classList.remove("selected");
    });
  };
  grid.addEventListener("click", function (event) {
    var clicked = event.target;

    if (
      clicked.nodeName === "SECTION" ||
      clicked === previousTarget ||
      clicked.parentNode.classList.contains("selected") ||
      clicked.parentNode.classList.contains("match")
    ) {
      return;
    }

    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add("selected");
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add("selected");
      }

      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
        }
        setTimeout(resetGuesses, delay);
      }
      previousTarget = clicked;
    }
  });
  return (
    <div>
      <div id="game"></div>
      {/* <script src="../src/components/gamecomp"></script> */}
    </div>
  );
}

export default Suits;
