//spiderman id is 1009610
import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "../components/navbar";
import Image from "../img/Dailybugle.jpg";
import Image2 from "../img/rhino.jfif";
import Image3 from "../img/kingpin.jfif";
import Image4 from "../img/amateur.png";
import Image5 from "../img/gravedust.png";
import Image6 from "../img/raft.png";
import Image7 from "../img/vulture1.png";
import Image8 from "../img/scorpion1.png";
import Image9 from "../img/millenials.png";
import Image10 from "../img/demons.png";
import Image11 from "../img/penthouse.jfif";
import Image12 from "../img/game/vortex.gif";
import { Link } from "react-router-dom";

// import "../components/newscomp";

function News(props) {
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
        {/* <div class="col-6 mx-auto">
          <img src={Image} alt="Daily Bugle logo" class="img-fluid" />
        </div> */}
        {/* Start of test */}
        {/* <section class="container border rounded bg-light w-50 mx-auto mt-5 p-3">
          <h1 class="mt-2 mb-4">Trending Now</h1>
          <br />
          <ol id="results"></ol>
        </section>
        //test 2 */}
        <div
          class="card d-inline-block w-100 text-center"
          style={{
            width: `900px`,
            height: `auto`,
            // marginTop: `-30px`,
            backgroundColor: `#03254c`,
          }}
        >
          <div class="card-body">
            <h1 class="card-title" style={{ color: `white` }}>
              New York's Finest Daily Paper
            </h1>
            <div class="container" style={{ display: `inline-block` }}>
              <div class="row">
                <figure class="col-8 col-sm-12 col-md-12 col-lg-12">
                  <img
                    src={Image}
                    class="img-fluid"
                    // style={{ width: `400px`, height: `300px` }}
                    alt="Daily Bugle Logo"
                  />
                  <h2 style={{ fontWeight: `bold`, color: `white` }}>
                    Top Stories:
                  </h2>
                </figure>
              </div>
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-2">
                  <img
                    src={Image2}
                    class="img-fluid"
                    // id="image2"
                    // style={{ width: `400px`, height: `300px` }}
                    alt="the villain Rhino"
                  />
                </div>
                <div class="col-10">
                  <h2 style={{ fontStyle: `bold`, color: `white` }}>
                    RHINO’S RAMPAGE ROADBLOCKED!
                  </h2>
                  <h3 style={{ fontWeight: `bold`, color: `white` }}>
                    By Ben Urich
                  </h3>
                  <p style={{ fontWeight: `bold`, color: `white` }}>
                    Spider-Man collided with Rhino head-on as the armored brute
                    barreled through a caravan of armored cars while attempting
                    to make off with millions in gold bullion. The brawling pair
                    made the corner of 49th Street and 5th Avenue their arena,
                    slinging signs and city property at each other. Spider-Man
                    ultimately subdued the horned hot-head, but only after the
                    destructive duo razed an entire city block and pulverized
                    the city’s beloved ice rink. Now that Rhino has been shipped
                    off to the Raft, New York City’s maximum-security prison,
                    one question remains: will taxpayers pick up the
                    multimillion-dollar tab for Spidey’s latest damage?
                  </p>
                </div>
              </div>
              <br />
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-2" id="image">
                  <img
                    src={Image5}
                    class="img-fluid"
                    // id="image2"
                    // style={{ width: `400px`, height: `300px` }}
                    alt="grave dust zombie"
                  />
                </div>
                <div class="col-10">
                  <h2 style={{ fontStyle: `bold`, color: `white` }}>
                    GRAVE ENCOUNTERS
                  </h2>
                  <h3 style={{ fontWeight: `bold`, color: `white` }}>
                    New street drug Grave Dust creates “monsters”
                  </h3>
                  <h4 style={{ fontWeight: `bold`, color: `white` }}>
                    By Betty Brant
                  </h4>
                  <p style={{ fontWeight: `bold`, color: `white` }}>
                    Health officials are warning citizens to avoid a violent,
                    new and highly-addictive street drug dubbed Grave Dust.
                    Medical reports exclusively obtained by the Daily Bugle
                    outline the violent changes users undergo immediately after
                    ingesting the drug. Biochemists are working hard to crack
                    the formula, whose effects supposedly alter users’
                    appearances. Terrified eyewitnesses claim that users’ skin
                    flushes gray and hardens, quite literally as if they’ve
                    turned to stone. Others report users break into fits of
                    rage, inflicting violence against innocent citizens, and
                    even themselves. For the safety and well-being of all,
                    health officials are urging those suspected of using Grave
                    Dust to seek help immediately.
                  </p>
                </div>
              </div>
              <br />
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-2" id="image">
                  <img
                    src={Image7}
                    class="img-fluid"
                    // id="image2"
                    style={{ width: `auto`, height: `400` }}
                    alt="the vulture"
                  />
                </div>
                <div class="col-10">
                  <h2 style={{ fontStyle: `bold`, color: `white` }}>
                    VULTURE SQUAWKS!
                  </h2>

                  <h3 style={{ fontWeight: `bold`, color: `white` }}>
                    By Ben Urich
                  </h3>
                  <p style={{ fontWeight: `bold`, color: `white` }}>
                    Adrian Toomes, aka the high-flying Vulture, used his day in
                    court to crow for his crimes. Upon taking the stand, Vulture
                    screeched about Spider-Man instead of owning up to his
                    criminal behavior. Toomes claimed the masked vigilante was
                    the “true mastermind” behind his dastardly deeds. The jury
                    humored Toomes, as it’s a well-known fact Spider-Man was the
                    very one to apprehend the bald buzzard for the police. With
                    a unanimously guilty verdict and his wings clipped, the
                    bird-man can warble all he wants about his innocence from
                    his personal cell in the maximum-security prison, the Raft.
                  </p>
                </div>
              </div>
              <br />
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-2" id="image">
                  <img
                    src={Image8}
                    class="img-fluid"
                    // id="image2"
                    // style={{ width: `400px`, height: `300px` }}
                    alt="the scorpion"
                  />
                </div>
                <div class="col-10">
                  <h2 style={{ fontStyle: `bold`, color: `white` }}>
                    WILL SCORPION STING OR SING?
                  </h2>

                  <h3 style={{ fontWeight: `bold`, color: `white` }}>
                    By Kat Farrell
                  </h3>
                  <p style={{ fontWeight: `bold`, color: `white` }}>
                    MacDonald “Mac” Gargan, aka the deadly mecha-criminal
                    Scorpion, has finally been apprehended by police, thanks in
                    no small part to the heroic efforts of Spider-Man. Wanted
                    for multiple counts of criminal activity, including
                    attempted murder and attempted kidnapping, the venom-tipped
                    Super Villain is now due to stand trial. While the poisonous
                    public enemy is known to be the silent-but-deadly type, the
                    district attorney isn’t letting him go so easy; prosecutors
                    are expected to put considerable pressure on Gargan tomorrow
                    to speak for his crimes. Regardless of whether Gargan admits
                    to the list of criminal charges he’s racked up or not, it’s
                    a no-brainer: Scorpion’s one-way ticket to maximum-security
                    prison the Raft is punched.
                  </p>
                </div>
              </div>
              <br />
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-2" id="image">
                  <img
                    src={Image9}
                    class="img-fluid"
                    // id="image2"
                    style={{ width: `auto`, height: `300px` }}
                    alt="new york city"
                  />
                </div>
                <div class="col-10">
                  <h2 style={{ fontStyle: `bold`, color: `white` }}>
                    MILLENNIALS IN PERIL
                  </h2>
                  <h3 style={{ fontWeight: `bold`, color: `white` }}>
                    Rising rent prices dash big city dreams
                  </h3>
                  <h4 style={{ fontWeight: `bold`, color: `white` }}>
                    By Mary Jane Watson
                  </h4>
                  <p style={{ fontWeight: `bold`, color: `white` }}>
                    The struggle for freshly graduated millennials is about to
                    get real as city rent suffered another jarring increase. As
                    reported previously, young professionals were going broke
                    from the city’s incredible rental rates, with many blaming
                    Spider-Man’s recklessness for the market impact. But what
                    about the real destructive forces — the masked maniacs he’s
                    defended us against? Spider-Man has defeated every one of
                    the costumed criminals who have declared war on New York and
                    wreaked subsequent havoc. Had the web-slinger not shown up
                    eight years ago, there wouldn’t be a city to hike rental
                    prices in the first place. Besides, the rebuilt skyline is
                    always better than the last thanks to construction titan
                    Wilson Fisk. He’s reassembled the rubble from practically
                    every corner of the city — even in the smaller,
                    once-affordable boroughs. It’s no wonder debt-ridden
                    millennials are draining their savings to keep up. New York
                    City was once the place for starry-eyed youngsters with
                    sky-high aspirations. However, as prices soar ever higher
                    with no end in sight, for many those dreams remain just
                    that: dreams.
                  </p>
                </div>
              </div>
              <br />
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-2" id="image">
                  <img
                    src={Image11}
                    class="img-fluid"
                    // id="image2"
                    // style={{ width: `auto`, height: `300px` }}
                    alt="cat burglar"
                  />
                </div>
                <div class="col-10">
                  <h2 style={{ fontStyle: `bold`, color: `white` }}>
                    PENTHOUSES PILFERED
                  </h2>
                  <h3 style={{ fontWeight: `bold`, color: `white` }}>
                    No leads on who’s looting the rich{" "}
                  </h3>
                  <h4 style={{ fontWeight: `bold`, color: `white` }}>
                    By Betty Brant
                  </h4>
                  <p style={{ fontWeight: `bold`, color: `white` }}>
                    A string of robberies targeting NYC’s elite have police
                    scratching their heads. Who’s foolish enough to target New
                    York City’s rich and powerful? Apparently, someone familiar
                    with sophisticated home security systems, the likes of which
                    are normally reserved for art museums and diamond importers.
                    Authorities lack any leads confirming whether the break-ins
                    are executed by a single thief or a ring of criminals.
                    Inside sources claim the culprit leaves a “calling card” at
                    each crime scene, at least confirming police hunches that
                    it’s no common crook burgling our city’s elite. The city’s
                    wealthiest families demand justice, cranking the heat up to
                    full blast on police to crack this case. And if they
                    continue to fail, some suggest victims will invite outside
                    forces to demystify the million-dollar bandit and bring them
                    into custody.
                  </p>
                </div>
              </div>
              <br />
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-2" id="image">
                  <img
                    src={Image10}
                    class="img-fluid"
                    // id="image2"
                    // style={{ width: `auto`, height: `300px` }}
                    alt="spiderman vs demon thug"
                  />
                </div>
                <div class="col-10">
                  <h2 style={{ fontStyle: `bold`, color: `white` }}>
                    CHINATOWN DEMONS
                  </h2>
                  <h3 style={{ fontWeight: `bold`, color: `white` }}>
                    Masked thugs raise hell{" "}
                  </h3>
                  <h4 style={{ fontWeight: `bold`, color: `white` }}>
                    By Ben Urich{" "}
                  </h4>
                  <p style={{ fontWeight: `bold`, color: `white` }}>
                    Unbelievably, a new gang has arrived in our already
                    crime-riddled city — and the Daily Bugle is the first with
                    emerging details on the masked newcomers. Wearing black-tie
                    suits and terrifying Chinese masks, this new gang of
                    “well-dressed demons” is terrorizing citizens. While no
                    official reports state where the group came from, it seems
                    they have made Chinatown their headquarters. Could it be
                    that international crime is carving out a new home in our
                    city? While locals have expressed their fears, New York
                    City’s billionaire philanthropist Martin Li feels
                    differently. “Groups like that are after thousands of
                    dollars in money. Many in this area cannot afford that,
                    especially those in the F.E.A.S.T. shelters. If it’s money
                    they want around here, I’m afraid they’ll be disappointed,”
                    he says. While Li’s statement carries truth, many are
                    wondering just how long their pocket money is safe before
                    these metal-masked goons start shaking down citizens for
                    their loose change.
                  </p>
                </div>
              </div>
              <br />
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-2" id="image2">
                  <img
                    src={Image4}
                    class="img-fluid"
                    // id="image2"
                    // style={{ width: `auto`, height: `300px` }}
                    alt="spiderman"
                  />
                </div>
                <div class="col-10">
                  <h2 style={{ fontStyle: `bold`, color: `white` }}>
                    AMATEUR ARACHNIDS{" "}
                  </h2>
                  <h3 style={{ fontWeight: `bold`, color: `white` }}>
                    Spider-Menace is rousing a generation of DIY vigilantes{" "}
                  </h3>
                  <h4 style={{ fontWeight: `bold`, color: `white` }}>
                    Special Op-ed by J. Jonah Jameson{" "}
                  </h4>
                  <p style={{ fontWeight: `bold`, color: `white` }}>
                    The Spider-Menace’s influence over the city is out of
                    control. Childrens’ costumes and Halloween masks are one
                    thing, but when copy cats are prowling the streets in
                    bargain store costumes, it’s a problem! It seems another
                    side effect of his unchecked “vigilantism” comes in the form
                    of powerless imitators running amok. Sure, they’ll get the
                    few perks of wearing his mask: fan selfies, freebies from
                    spider sympathizers. They won’t be so lucky when they come
                    across any one of the webhead’s enemies. One moment they’re
                    squeezing ketchup on their free frank, and the next they’re
                    receiving the kiss of a big burly fist from one of
                    Spider-Man’s angry adversaries. I implore you all to leave
                    crime-fighting to the courageous men and women of the police
                    force. As if one Spider-Menace wasn’t enough, they sure
                    don’t need a militia of costumed amateurs harassing people
                    on the street. And the Spider-Brat certainly doesn’t need
                    any more encouragement than he’s got!
                  </p>
                </div>
              </div>
              <br />
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-2">
                  <img
                    src={Image3}
                    class="img-fluid"
                    // style={{ width: `400px`, height: `300px` }}
                    alt="The villain Kingpin"
                  />
                </div>
                <div class="col-10">
                  <h2 style={{ fontStyle: `bold`, color: `white` }}>
                    FISK IS BACK{" "}
                  </h2>
                  <h3 style={{ fontWeight: `bold`, color: `white` }}>
                    Mogul brushes off "Kingpin" rumors as new tower opens{" "}
                  </h3>
                  <h4 style={{ fontWeight: `bold`, color: `white` }}>
                    By Kat Farrell{" "}
                  </h4>
                  <p style={{ fontWeight: `bold`, color: `white` }}>
                    Wilson Fisk returned from his business trip to Japan for the
                    grand opening of Fisk Tower. Fisk himself sliced the
                    symbolic opening ribbon strung in front of the entrance,
                    appearing unfettered by the recent allegations framing him
                    as New York City’s criminal “Kingpin.” Just a short while
                    ago, the Daily Bugle was the first to report that Wilson
                    Fisk’s offices had been searched in an effort to put the
                    “Kingpin” rumors surrounding him to rest. Authorities who
                    conducted the investigation concluded there was no evidence
                    suggesting connections between Fisk and New York City’s
                    organized crime. As a result, the investigation was closed.
                    When asked for comment about the scandal, Fisk’s only
                    response was a coy smile, a sip of his brandy, and a
                    referral to his lawyers. While the CEO celebrates his new
                    self-titled high-rise, the Police Commissioner is in talks
                    with Police Captain Yuri Watanabe about future protocol for
                    investigations.
                  </p>
                </div>
              </div>
              <br />
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-2">
                  <img
                    src={Image6}
                    class="img-fluid"
                    style={{ width: `auto`, height: `300px` }}
                    alt="the Raft Prison"
                  />
                </div>
                <div class="col-10">
                  <h2 style={{ fontStyle: `bold`, color: `white` }}>
                    PRISON PROBLEMS{" "}
                  </h2>
                  <h3 style={{ fontWeight: `bold`, color: `white` }}>
                    The Raft responds to rumored rot{" "}
                  </h3>
                  <h4 style={{ fontWeight: `bold`, color: `white` }}>
                    By Robbie Robertson{" "}
                  </h4>
                  <p style={{ fontWeight: `bold`, color: `white` }}>
                    As the premier wonder of our local prison system, the
                    maximum-security institution known as the Raft should be the
                    best place for incarcerated super villains. But rumors are
                    swirling about its supposed faltering security, fueling
                    public fears that the impervious prison is on the fritz.
                    Rumors claim the Raft wasn’t completely primed for the
                    extraordinarily diverse abilities among inmates. Insiders
                    claim the security protocols in place aren’t specific enough
                    to fully contain inmate superpowers, with some reporting
                    prison guards have improvised prisoner restraint during the
                    occasional outburst. In an attempt to quell worry, prison
                    officials have released a statement detailing plans for
                    meetings between the warden and city and state officials to
                    formulate new benchmarks for incarcerated super villain
                    supervision. With work scheduled to begin immediately,
                    citizens — and prison employees, for that matter — can
                    breathe a little easier knowing any faults found in the
                    fortress are being addressed.
                  </p>
                </div>
              </div>

              {/*  */}
              <div
                class="row"
                style={{
                  backgroundColor: `black`,
                  borderStyle: `solid`,
                  borderColor: `white`,
                  borderWidth: `5px`,
                  margin: `auto`,
                }}
              >
                <div class="col-12">
                  <Link to="../suits">
                    <img
                      src={Image12}
                      class="img-fluid"
                      style={{ width: `auto`, height: `300px` }}
                      alt="the vortex"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      {/* End of Test */}
    </div>
  );
}

export default News;
