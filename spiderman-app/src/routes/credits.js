import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import Image from "../img/spidermanvariations.jpg";

function credits(props) {
  return (
    <div>
      <Navbar />
      <div>
        <div
          class="card d-inline-block w-100 text-center"
          style={{
            width: `900px`,
            height: `auto`,
            marginTop: `-30px`,
            backgroundColor: `#03254c`,
          }}
        >
          <div class="card-body">
            <h1
              class="card-title"
              style={{ fontWeight: `bold`, color: `white` }}
            >
              Created By Jason Bockover and Mina Vu
            </h1>
            <div class="panel-container" style={{ display: `inline-block` }}>
              <div class="row">
                <figure class="col-12 col-sm-12 col-md-12 col-lg-12">
                  <img
                    src={Image}
                    class="img-fluid"
                    // style={{ width: `960px`, height: `500px` }}
                    alt="variations of Spider-Man"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default credits;
