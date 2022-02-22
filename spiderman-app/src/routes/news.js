import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import Image from "../img/Dailybugle.jpg";

function news(props) {
  return (
    <div>
      <Navbar />
      {/* code for ticker */}
      <div
        class="ticker-wrap"
        style={{
          marginTop: `-30px`,
        }}
      >
        <div class="ticker-heading">Breaking News</div>
        <div class="ticker">
          <div class="ticker__item">
            Electro was apprehended and delivered to his own special cell at the
            Raft after a high-voltage romp through the city with Spider-Man.{" "}
          </div>
          <div class="ticker__item">
            Mayor Norman Osborn has announced a third run for Mayor.
          </div>
          <div class="ticker__item">
            A string of robberies targeting NYC’s elite have police scratching
            their heads.{" "}
          </div>
          <div class="ticker__item">
            Spider-Man collided with Rhino head-on as the armored brute barreled
            through a caravan of armored cars while attempting to make off with
            millions in gold bullion. The brawling pair made the corner of 49th
            Street and 5th Avenue their arena, slinging signs and city property
            at each other.{" "}
          </div>
          <div class="ticker__item">
            Health officials are warning citizens to avoid a violent, new and
            highly-addictive street drug dubbed Grave Dust.{" "}
          </div>
          <div class="ticker__item">
            Charitable entrepreneur Martin Li opened his first F.E.A.S.T.
            shelter in Chinatown five years ago. Since then, it’s become a
            beacon of hope for New York City’s hopeless.{" "}
          </div>
          <div class="ticker__item">
            As the premier wonder of our local prison system, the
            maximum-security institution known as the Raft should be the best
            place for incarcerated super villains. But rumors are swirling about
            its supposed faltering security, fueling public fears that the
            impervious prison is on the fritz.{" "}
          </div>
          <div class="ticker__item">
            Adrian Toomes, aka the high-flying Vulture, used his day in court to
            crow for his crimes. Upon taking the stand, Vulture screeched about
            Spider-Man instead of owning up to his criminal behavior. Toomes
            claimed the masked vigilante was the “true mastermind” behind his
            dastardly deeds. The jury humored Toomes, as it’s a well-known fact
            Spider-Man was the very one to apprehend the bald buzzard for the
            police. With a unanimously guilty verdict and his wings clipped, the
            bird-man can warble all he wants about his innocence from his
            personal cell in the maximum-security prison, the Raft.{" "}
          </div>
          <div class="ticker__item">
            Wilson Fisk returned from his business trip to Japan for the grand
            opening of Fisk Tower. Fisk himself sliced the symbolic opening
            ribbon strung in front of the entrance, appearing unfettered by the
            recent allegations framing him as New York City’s criminal
            “Kingpin.”{" "}
          </div>
        </div>
      </div>
      {/* End of ticker code */}
      <div
        class="card d-inline-block w-100 text-center"
        style={{
          width: `900px`,
          height: `auto`,
          //   marginTop: `-30px`,
          backgroundColor: `#03254c`,
        }}
      >
        <div>
          <img src={Image} alt="Daily Bugle logo" class="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default news;
