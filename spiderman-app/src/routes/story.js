import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Image from "../img/Stan_steve.jpg";
import Image2 from "../img/spiderman-bite.gif";
import Image3 from "../img/spideywrestling.jpg";
import Image4 from "../img/spideysuit.jpg";
import Image5 from "../img/spideypowers.jpg";
import Image6 from "../img/spideystrength.gif";
import Image7 from "../img/spider-sense-thinking.gif";
import Image8 from "../img/webshooters.gif";
import Image9 from "../img/Spider-Tracer.jpg";
import Image10 from "../img/spideyvillains.jpg";
import Image11 from "../img/rightarrow1.jfif";
import Image12 from "../img/downarrow1.jpg";

import Navbar from "../components/navbar.js";

function story(props) {
  return (
    <div>
      <Navbar />
      <div
        class="card d-inline-block w-100 text-center"
        style={{
          width: `800px`,
          height: `600px`,
          marginTop: `-20px`,
          //   backgroundColor: `green`,
        }}
      >
        <div class="card-body">
          <h1 class="card-title">
            This is the story of the Amazing Spider-Man!
          </h1>
          <div class="panel-container">
            <div class="row">
              <figure class="col-4">
                <img
                  src={Image}
                  style={{ width: `400px`, height: `300px` }}
                  alt="Spiderman creators Stan Lee and Steve Ditko"
                />
                <p style={{ fontWeight: `bold` }}>
                  The character of Spider-Man was created by Stan Lee and Steve
                  Ditko back in 1962
                </p>
              </figure>
              <figure class="col-4">
                <img
                  src={Image11}
                  style={{ width: `200px`, height: `100px` }}
                  alt="Right Arrow Indicator"
                />
              </figure>
              <figure class="col-4">
                <img
                  src={Image2}
                  style={{ width: `400px`, height: `300px` }}
                  alt="Peter Parker being bit by radioactive spider"
                />
                <p style={{ fontWeight: `bold` }}>
                  High school student and child prodigy Peter Parker submerged
                  himself in his passion for science to avoid the taunts and
                  threats of his fellow classmates and stumbled into a world
                  beyond his imagining. While visiting a public exhibition of
                  new breakthroughs in radiation manipulation and genetics,
                  Parker felt the bite of a common house spider exposed to a
                  particle beam and felt immediately ill from it, little
                  realizing how much his life would change in the coming hours.
                </p>
              </figure>
            </div>
            <div class="row">
              <figure class="col-12">
                <img
                  src={Image12}
                  style={{ width: `400px`, height: `300px` }}
                  alt="down arrow indicator"
                />
              </figure>
            </div>
            <div class="row">
              <figure class="col-4">
                <img
                  src={Image3}
                  style={{ width: `400px`, height: `300px` }}
                  alt="Peter Parker using his newfound powers"
                />
                <p style={{ fontWeight: `bold` }}>
                  On the way home, the teenager unconsciously avoided a wayward
                  automobile by making an incredible leap to the wall of a
                  nearby building, finding himself miraculously able to stick to
                  it by his hands and feet. Quickly realizing he had somehow
                  acquired the abilities of a spider, he began testing his
                  new-found powers and marveled at their width and breadth.
                  Parker tested his spider abilities in the ring of a local
                  wresting competition and, wearing a mask to hide his identity,
                  easily bested the reigning champion.
                </p>
              </figure>
              <figure class="col-4">
                <img
                  src={Image11}
                  style={{ width: `200px`, height: `100px` }}
                  alt="Right Arrow Indicator"
                />
              </figure>
              <figure class="col-4">
                <img
                  src={Image4}
                  style={{ width: `400px`, height: `300px` }}
                  alt="The Spiderman suit"
                />
                <p style={{ fontWeight: `bold` }}>
                  Parker, an orphan, lived with his kindly Aunt May and Uncle
                  Ben and was wary of exposing them to the public scrutiny that
                  would surely ensue if he revealed his powers to the world, so
                  he adopted a suitable costume and the name of “Spider-Man” to
                  hide his true identity. He also designed and crafted two
                  wrist-worn “web-shooters” to approximate a spider’s
                  web-spinning capability, and with them swiftly became a smash
                  television personality. Now with money to take care of his
                  guardians and acclaim to salve puny Peter Parker’s wounds from
                  classmates, the young man grew cold to everything but his
                  media-darling career.
                </p>
              </figure>
            </div>
            <div class="row">
              <figure class="col-12">
                <img
                  src={Image12}
                  style={{ width: `400px`, height: `300px` }}
                  alt="down arrow indicator"
                />
              </figure>
            </div>
            <div class="row">
              <figure class="col-4">
                <img
                  src={Image5}
                  style={{ width: `400px`, height: `300px` }}
                  alt="Peter becoming Spider-Man"
                />
                <p style={{ fontWeight: `bold` }}>
                  Everything changed when, in an act of selfishness, Parker
                  allowed a burglar to escape police arrest during a Spider-Man
                  appearance rather than intervene. Later, when he returned
                  home, he learned of his Uncle Ben’s murder at the hands of the
                  very same burglar and instantly felt the weight of hubris upon
                  his young shoulders. Vowing never to use his powers again for
                  his own gain, he tracked down his uncle’s killer as Spider-Man
                  and brought him to justice. From that moment on, he abandoned
                  his media star persona and spun his web solely to capture
                  criminals of all kinds.
                </p>
              </figure>
              <figure class="col-4">
                <img
                  src={Image11}
                  style={{ width: `200px`, height: `100px` }}
                  alt="Right Arrow Indicator"
                />
              </figure>
              <figure class="col-4">
                <img
                  src={Image6}
                  style={{ width: `400px`, height: `300px` }}
                  alt="Spider-Man strength gif"
                />
                <p style={{ fontWeight: `bold` }}>
                  Like his namesake, Spider-Man’s strength and agility stand far
                  above those of the average human, allowing him to lift nearly
                  ten tons and to leap and move at incredible speeds with high
                  accuracy. He also heals faster than normal when injured,
                  though he is not completely immune to viruses and other human
                  ailments.
                </p>
              </figure>
            </div>
            <div class="row">
              <figure class="col-12">
                <img
                  src={Image12}
                  style={{ width: `400px`, height: `300px` }}
                  alt="down arrow indicator"
                />
              </figure>
            </div>
            <div class="row">
              <figure class="col-4">
                <img
                  src={Image7}
                  style={{ width: `400px`, height: `300px` }}
                  alt="Spider-Man's spider-sense"
                />
                <p style={{ fontWeight: `bold` }}>
                  An inner “spider-sense” allows him a high degree of awareness
                  to impending danger and to gauge not only its level of threat
                  to him personally, but also the general direction of its
                  approach. Combined with his unique fighting style, this grants
                  Spider-Man an edge in his battles that often times defies
                  logic.
                </p>
              </figure>
              <figure class="col-4">
                <img
                  src={Image11}
                  style={{ width: `200px`, height: `100px` }}
                  alt="Right Arrow Indicator"
                />
              </figure>
              <figure class="col-4">
                <img
                  src={Image8}
                  style={{ width: `400px`, height: `300px` }}
                  alt="Spider-Man's web-shooters"
                />
                <p style={{ fontWeight: `bold` }}>
                  Spider-Man has designed and built many devices to aid him in
                  his crime fighting, but the stand-out invention among these
                  are his web-shooters. Strapped to both his wrists and
                  activated by finger pressure applied to touch pads on his
                  palms, the shooters can spray a unique fluid of the hero’s
                  creation which solidifies to various thicknesses upon exposure
                  to air and form into “webbing.” The tensile strength of the
                  substance may be modified with each activation of the
                  shooters, but at its peak can stop a large vehicle and also
                  hold several persons for nearly two hours, after which, the
                  webbing begins to dissolve.
                </p>
              </figure>
            </div>
            <div class="row">
              <figure class="col-12">
                <img
                  src={Image12}
                  style={{ width: `400px`, height: `300px` }}
                  alt="down arrow indicator"
                />
              </figure>
            </div>
            <div class="row">
              <figure class="col-4">
                <img
                  src={Image9}
                  style={{ width: `400px`, height: `300px` }}
                  alt="Spider-Man's Spider Tracers"
                />
                <p style={{ fontWeight: `bold` }}>
                  In addition, Spider-Man carries small “spider tracers” that
                  once placed upon a person or object transmit a specialized
                  signal the hero may identify with his spider-sense and thus
                  allow him to track to its origin point.
                </p>
              </figure>
              <figure class="col-4">
                <img
                  src={Image11}
                  style={{ width: `200px`, height: `100px` }}
                  alt="Right Arrow Indicator"
                />
              </figure>
              <figure class="col-4">
                <img
                  src={Image10}
                  style={{ width: `400px`, height: `500px` }}
                  alt="Spider-Man fighting villains"
                />
                <p style={{ fontWeight: `bold` }}>
                  With one of the most extensive and vile rogues gallery of any
                  super hero, Spider-Man uses his mighty powers to take on a
                  collection of the world’s wickedest villains.
                </p>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default story;
