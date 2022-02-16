import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-md bg-dark mb-4">
      <div class="container-fluid">
        <a class="navbar-brand-md" href="../">
          SPIDER-MAN
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link" href="../story">
                STORY
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                CHARACTERS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                MEDIA
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                NEWS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                CREDITS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
