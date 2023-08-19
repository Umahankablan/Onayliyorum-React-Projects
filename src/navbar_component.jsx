import React from "react";
import { Link } from "react-router-dom";

export const logoNav = "../assets/images/navbarlogo.jpeg"; // navbar Logo Path   resmi düzenledim eger istersen .jpeg  .png ile değiştir

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg px-1">
      <Link class="" to="/">
        <img className="navbarLogo" src={logoNav} />
      </Link>
      <a
        href="#"
        class="mt-2 me-0  border-0 navbar-toggler"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="material-symbols-outlined display-4 fw-light text-dark">
          menu_open
        </span>
      </a>
      <div
        class="offcanvas widthsettingmobile offcanvas-start text-bg-light"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title mx-auto" id="offcanvasDarkNavbarLabel">
            <img className="navbarLogo" src={logoNav} />
          </h5>
          <button
            type="button"
            class="btn-close btn-close-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body ">
          <ul class="navbar-nav navbarLinkFontSize mx-xl-3 m-0 justify-content-between flex-grow-1 pe-3 p-3 p-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/hakkimizda" aria-current="page">
                Nedir?
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                Fiyatlar & Planlar
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/sikca-sorulan-sorular">
                Sık Sorulan Sorular
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/iletisim">
                İletişim
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav navbarLinkFontSize justify-content-end flex-grow-1 p-3 p-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bayilik
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    item ?
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <Link
                to="/login"
                className="btn btn-success text-light rounded-5 px-3 py-2"
              >
                Giriş Yap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
